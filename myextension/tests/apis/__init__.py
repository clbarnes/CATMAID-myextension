# -*- coding: utf-8 -*-
import json
from myextension.tests.common import MyextensionTestCase


URL_PREFIX = '/ext/myextension'


class InstallationTest(MyextensionTestCase):
    def test_is_installed(self):
        response = self.client.get(URL_PREFIX + '/is-installed')
        self.assertEqual(response.status_code, 200)
        parsed_response = json.loads(response.content.decode('utf-8'))
        assert parsed_response['is_installed']
