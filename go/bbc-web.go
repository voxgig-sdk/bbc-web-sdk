package voxgigbbcwebsdk

import (
	"github.com/voxgig-sdk/bbc-web-sdk/go/core"
	"github.com/voxgig-sdk/bbc-web-sdk/go/entity"
	"github.com/voxgig-sdk/bbc-web-sdk/go/feature"
	_ "github.com/voxgig-sdk/bbc-web-sdk/go/utility"
)

// Type aliases preserve external API.
type BbcWebSDK = core.BbcWebSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type BbcWebEntity = core.BbcWebEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type BbcWebError = core.BbcWebError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewContentEntityFunc = func(client *core.BbcWebSDK, entopts map[string]any) core.BbcWebEntity {
		return entity.NewContentEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewBbcWebSDK = core.NewBbcWebSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig

// No-arg convenience constructors. Go has no default-argument syntax,
// so these aliases let callers write `sdk.New()` / `sdk.Test()`
// instead of `sdk.NewBbcWebSDK(nil)` / `sdk.TestSDK(nil, nil)`
// for the common no-options case.
func New() *BbcWebSDK  { return NewBbcWebSDK(nil) }
func Test() *BbcWebSDK { return TestSDK(nil, nil) }
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
