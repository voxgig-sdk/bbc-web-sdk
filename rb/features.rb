# BbcWeb SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module BbcWebFeatures
  def self.make_feature(name)
    case name
    when "base"
      BbcWebBaseFeature.new
    when "ratelimit"
      BbcWebRatelimitFeature.new
    when "retry"
      BbcWebRetryFeature.new
    when "test"
      BbcWebTestFeature.new
    when "timeout"
      BbcWebTimeoutFeature.new
    else
      BbcWebBaseFeature.new
    end
  end
end
