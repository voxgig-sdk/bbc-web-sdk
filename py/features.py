# BbcWeb SDK feature factory

from feature.base_feature import BbcWebBaseFeature
from feature.test_feature import BbcWebTestFeature


def _make_feature(name):
    features = {
        "base": lambda: BbcWebBaseFeature(),
        "test": lambda: BbcWebTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
