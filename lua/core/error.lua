-- BbcWeb SDK error

local BbcWebError = {}
BbcWebError.__index = BbcWebError


function BbcWebError.new(code, msg, ctx)
  local self = setmetatable({}, BbcWebError)
  self.is_sdk_error = true
  self.sdk = "BbcWeb"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function BbcWebError:error()
  return self.msg
end


function BbcWebError:__tostring()
  return self.msg
end


return BbcWebError
