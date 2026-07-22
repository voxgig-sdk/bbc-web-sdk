# BbcWeb SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

BbcWebUtility.registrar = ->(u) {
  u.clean = BbcWebUtilities::Clean
  u.done = BbcWebUtilities::Done
  u.make_error = BbcWebUtilities::MakeError
  u.feature_add = BbcWebUtilities::FeatureAdd
  u.feature_hook = BbcWebUtilities::FeatureHook
  u.feature_init = BbcWebUtilities::FeatureInit
  u.fetcher = BbcWebUtilities::Fetcher
  u.make_fetch_def = BbcWebUtilities::MakeFetchDef
  u.make_context = BbcWebUtilities::MakeContext
  u.make_options = BbcWebUtilities::MakeOptions
  u.make_request = BbcWebUtilities::MakeRequest
  u.make_response = BbcWebUtilities::MakeResponse
  u.make_result = BbcWebUtilities::MakeResult
  u.make_point = BbcWebUtilities::MakePoint
  u.make_spec = BbcWebUtilities::MakeSpec
  u.make_url = BbcWebUtilities::MakeUrl
  u.param = BbcWebUtilities::Param
  u.prepare_auth = BbcWebUtilities::PrepareAuth
  u.prepare_body = BbcWebUtilities::PrepareBody
  u.prepare_headers = BbcWebUtilities::PrepareHeaders
  u.prepare_method = BbcWebUtilities::PrepareMethod
  u.prepare_params = BbcWebUtilities::PrepareParams
  u.prepare_path = BbcWebUtilities::PreparePath
  u.prepare_query = BbcWebUtilities::PrepareQuery
  u.result_basic = BbcWebUtilities::ResultBasic
  u.result_body = BbcWebUtilities::ResultBody
  u.result_headers = BbcWebUtilities::ResultHeaders
  u.transform_request = BbcWebUtilities::TransformRequest
  u.transform_response = BbcWebUtilities::TransformResponse
}
