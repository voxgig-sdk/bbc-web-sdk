# BbcWeb SDK feature factory

from bbcweb_sdk.feature.base_feature import BbcWebBaseFeature
from bbcweb_sdk.feature.test_feature import BbcWebTestFeature


def _make_feature(name):
    features = {
        "base": lambda: BbcWebBaseFeature(),
        "test": lambda: BbcWebTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
