#!/usr/bin/env python
# -*- coding: utf-8 -*-
# **************************************************************************
# Copyright © 2016 jianglin
# File Name: models.py
# Author: jianglin
# Email: xiyang0807@gmail.com
# Created: 2016-12-15 20:52:07 (CST)
# Last Update: 星期日 2018-02-11 15:06:01 (CST)
#          By:
# Description:
# **************************************************************************
from datetime import datetime

from flask import current_app
from flask_login import current_user

from flask_auth.models import ModelMixin, ModelTimeMixin, ModelUserMixin
from forums.api.forums.models import Board
from forums.api.user.models import User
from forums.common.models import CommonUserMixin
from forums.extension import db
from forums.count import Count
from forums.jinja import safe_markdown, safe_clean, markdown

topic_follower = db.Table(
    'topic_follower',
    db.Column('topic_id', db.Integer, db.ForeignKey('topics.id')),
    db.Column('follower_id', db.Integer, db.ForeignKey('user.id')))


class Topic(db.Model, ModelMixin):
    __tablename__ = 'topics'
    __searchable__ = ['title', 'content']

    CONTENT_TYPE_TEXT = '0'
    CONTENT_TYPE_MARKDOWN = '1'
    CONTENT_TYPE_ORGMODE = '2'

    CONTENT_TYPE = (('0', 'text'), ('1', 'markdown'), ('2', 'org-mode'))

    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(512))
    content = db.Column(db.Text, nullable=False)
    content_type = db.Column(
        db.String(10), nullable=False, default=CONTENT_TYPE_MARKDOWN)
    created_at = db.Column(
        db.DateTime, default=datetime.now, nullable=False)
    token = db.Column(db.String(81))
    zh_token = db.Column(db.String(81))
    updated_at = db.Column(
        db.DateTime, default=datetime.now, onupdate=datetime.now)
    is_good = db.Column(db.String(512), default='[]')
    is_bad = db.Column(db.String(512), default='[]')
    picture = db.Column(db.String(512))
    author_id = db.Column(
        db.Integer, db.ForeignKey(
            'user.id', ondelete="CASCADE"))
    author = db.relationship(
        User,
        backref=db.backref(
            'topics', cascade='all,delete-orphan', lazy='dynamic', passive_deletes=True),
        lazy='joined')
    board_id = db.Column(
        db.Integer, db.ForeignKey(
            'boards.id', ondelete="CASCADE"))
    board = db.relationship(
        Board,
        backref=db.backref(
            'topics', cascade='all,delete-orphan', lazy='dynamic', passive_deletes=True),
        lazy='joined')
    followers = db.relationship(
        User,
        secondary=topic_follower,
        backref=db.backref(
            'following_topics', lazy='dynamic'),
        lazy='dynamic')

    __mapper_args__ = {"order_by": created_at.desc()}

    def is_followed(self, user=None):
        if user is None:
            user = current_user
        return db.session.query(topic_follower).filter(
            topic_follower.c.topic_id == self.id,
            topic_follower.c.follower_id == user.id).exists()

    def is_collected(self, user=None):
        if user is None:
            user = current_user
        return self.collects.filter_by(author_id=user.id).exists()

    @property
    def text(self):
        if self.content_type == Topic.CONTENT_TYPE_TEXT:
            return safe_clean(self.content)
        elif self.content_type == Topic.CONTENT_TYPE_MARKDOWN:
            return markdown(self.content)
        return self.content

    @property
    def newest_reply(self):
        return self.replies.order_by('-id').first()

    @property
    def reply_count(self):
        return Count.topic_reply_count(self.id)

    @reply_count.setter
    def reply_count(self, value):
        return Count.topic_reply_count(self.id, value)

    @property
    def read_count(self):
        return Count.topic_read_count(self.id)

    @read_count.setter
    def read_count(self, value):
        return Count.topic_read_count(self.id, value)

    def __str__(self):
        if self.title:
            return self.title
        if self.token:
            return self.token
        if self.picture:
            return self.picture
        return ''

    def __repr__(self):
        return "<Topic %r>" % self.title


reply_liker = db.Table(
    'reply_liker',
    db.Column('reply_id', db.Integer, db.ForeignKey('replies.id')),
    db.Column('liker_id', db.Integer, db.ForeignKey('user.id')))


class Reply(db.Model, ModelMixin):
    __tablename__ = 'replies'
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.Text, nullable=False)
    created_at = db.Column(
        db.DateTime, default=datetime.now, nullable=False)
    updated_at = db.Column(
        db.DateTime, default=datetime.now, onupdate=datetime.now)
    is_good = db.Column(db.String(512), default='[]')
    is_bad = db.Column(db.String(512), default='[]')
    topic_id = db.Column(db.Integer, db.ForeignKey(
            'topics.id', ondelete="CASCADE"))
    topic = db.relationship(
        Topic, backref=db.backref(
            'topic_replies', cascade='all,delete-orphan', lazy='dynamic', passive_deletes=True), lazy='joined')
    reference = db.Column(db.String(512), default='')
    at_user = db.Column(db.String(81), default='')
    author_id = db.Column(db.Integer, db.ForeignKey('user.id', ondelete="CASCADE"))
    author = db.relationship(
        User, backref=db.backref(
            'replies_author', cascade='all,delete-orphan', lazy='dynamic', passive_deletes=True), lazy='joined')
    picture = db.Column(db.String(512))
    likers = db.relationship(
        User,
        secondary=reply_liker,
        backref=db.backref(
            'like_replies', lazy='dynamic'),
        lazy='dynamic')

    def is_liked(self, user=None):
        if user is None:
            user = current_user
            if not user.is_authenticated:
                return False
        return self.likers.filter_by(id=user.id).exists()

    @property
    def liker_count(self):
        return Count.reply_liker_count(self.id)

    @liker_count.setter
    def liker_count(self, value):
        return Count.reply_liker_count(self.id, value)

    def __str__(self):
        if self.content:
            return self.content
        if self.at_user:
            return self.at_user
        if self.reference:
            return self.reference
        return ''

    def __repr__(self):
        return "<Topic %r>" % self.content[:10]

class Counter(db.Model, ModelMixin):
    __tablename__ = 'counter'
    id = db.Column(db.Integer, primary_key=True)
    topic_id = db.Column(db.Integer, nullable=False)
    read_count = db.Column(db.Integer, default=0)
    