# BbcWeb SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module BbcWebFeatures
  def self.make_feature(name)
    case name
    when "base"
      BbcWebBaseFeature.new
    when "test"
      BbcWebTestFeature.new
    else
      BbcWebBaseFeature.new
    end
  end
end
