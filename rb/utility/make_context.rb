# BbcWeb SDK utility: make_context
require_relative '../core/context'
module BbcWebUtilities
  MakeContext = ->(ctxmap, basectx) {
    BbcWebContext.new(ctxmap, basectx)
  }
end
