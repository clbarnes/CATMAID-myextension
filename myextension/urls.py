# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.conf.urls import url

import myextension.control

app_name = 'myextension'

urlpatterns = [
    url(r'^is-installed$', myextension.control.is_installed),
]
