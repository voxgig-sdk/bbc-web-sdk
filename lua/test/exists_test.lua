-- BbcWeb SDK exists test

local sdk = require("bbc-web_sdk")

describe("BbcWebSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
