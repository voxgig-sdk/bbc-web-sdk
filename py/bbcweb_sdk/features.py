# BbcWeb SDK feature factory

from bbcweb_sdk.feature.base_feature import BbcWebBaseFeature
from bbcweb_sdk.feature.ratelimit_feature import BbcWebRatelimitFeature
from bbcweb_sdk.feature.retry_feature import BbcWebRetryFeature
from bbcweb_sdk.feature.test_feature import BbcWebTestFeature
from bbcweb_sdk.feature.timeout_feature import BbcWebTimeoutFeature


_FEATURES = {
    "base": lambda: BbcWebBaseFeature(),
    "ratelimit": lambda: BbcWebRatelimitFeature(),
    "retry": lambda: BbcWebRetryFeature(),
    "test": lambda: BbcWebTestFeature(),
    "timeout": lambda: BbcWebTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
