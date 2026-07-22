# BbcWeb SDK exists test

require "minitest/autorun"
require_relative "../BbcWeb_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = BbcWebSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
