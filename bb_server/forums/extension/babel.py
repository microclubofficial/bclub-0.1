#!/usr/bin/env python
# -*- coding: utf-8 -*-
# ********************************************************************************
# Copyright © 2018 jianglin
# File Name: babel.py
# Author: jianglin
# Email: xiyang0807@gmail.com
# Created: 2018-02-11 14:52:25 (CST)
# Last Update: 星期日 2018-02-11 15:31:25 (CST)
#          By:
# Description:
# ********************************************************************************
from flask import request, g, current_app
from flask_babelex import Babel, Domain
import os

translations = os.path.abspath(
    os.path.join(
        os.path.dirname(__file__), os.pardir, os.pardir, 'translations'))
domain = Domain(translations)
babel = Babel(default_domain=domain)


@babel.localeselector
def locale():
    user = getattr(g, 'user', None)
    if user is not None:
        if request.path.startswith('/admin'):
            return 'zh_Hans_CN'
        if g.user.is_authenticated:
            return user.setting.locale or 'zh'
    return request.accept_languages.best_match(current_app.config['LANGUAGES']
                                               .keys())


@babel.timezoneselector
def timezone():
    user = getattr(g, 'user', None)
    if user is not None:
        if g.user.is_authenticated:
            return user.setting.timezone


def init_app(app):
    babel.init_app(app)
