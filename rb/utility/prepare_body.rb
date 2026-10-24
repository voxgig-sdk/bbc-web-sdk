# BbcWeb SDK utility: prepare_body
require_relative 'media'
module BbcWebUtilities
  PrepareBody = ->(ctx) {
    return nil unless ctx.op.input == "data"
    return BbcWebUtilities.raw_body(ctx.reqdata) if BbcWebUtilities.raw_request?(ctx.point)
    ctx.utility.transform_request.call(ctx)
  }
end
