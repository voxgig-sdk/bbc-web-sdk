# BbcWeb SDK exists test

import pytest
from bbcweb_sdk import BbcWebSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = BbcWebSDK.test(None, None)
        assert testsdk is not None
