#!/usr/bin/env python
# -*- coding: utf-8 -*-
# **************************************************************************
# Copyright © 2017 jianglin
# File Name: views.py
# Author: jianglin
# Email: xiyang0807@gmail.com
# Created: 2017-03-13 13:29:37 (CST)
# Last Update:星期五 2017-7-28 11:35:19 (CST)
#          By:
# Description:
# **************************************************************************
from flask import (request, current_app, flash, redirect, url_for,
                   render_template)
from flask.views import MethodView
from flask_login import login_required, current_user
from forums.permission import is_confirmed
from forums.extension import cache
from forums.func import get_json


def cache_key():
    if current_user.is_authenticated:
        return 'view:{}:{}'.format(current_user.id, request.url)
    return 'view:{}'.format(request.url)

class BaseMethodView(MethodView):
    @property
    def page_info(self):
        page = request.args.get('page', 1, type=int)
        if hasattr(self, 'per_page'):
            per_page = getattr(self, 'per_page')
        else:
            per_page = current_app.config.setdefault('PER_PAGE', 20)

        number = request.args.get('number', per_page, type=int)
        if number > 100:
            number = per_page
        return page, number

    #@cache.cached(timeout=180, key_prefix=cache_key)
    def dispatch_request(self, *args, **kwargs):
        return super(BaseMethodView, self).dispatch_request(*args, **kwargs)

    def render_template(self, template, **kwargs):
        return render_template(template, **kwargs)

class IsAuthMethodView(MethodView):
    decorators = [is_confirmed]
