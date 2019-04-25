# -*- coding: utf-8 -*-
from catmaid.tests.apis.common import CatmaidApiTestCase


class MyextensionTestCase(CatmaidApiTestCase):
    fixtures = CatmaidApiTestCase.fixtures + ['myextension_testdata.json']

    @classmethod
    def setUpTestData(cls):
        super(MyextensionTestCase, cls).setUpTestData()
