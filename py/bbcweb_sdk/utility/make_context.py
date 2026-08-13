# BbcWeb SDK utility: make_context

from bbcweb_sdk.core.context import BbcWebContext


def make_context_util(ctxmap, basectx):
    return BbcWebContext(ctxmap, basectx)
