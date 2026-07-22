package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewContentEntityFunc func(client *BbcWebSDK, entopts map[string]any) BbcWebEntity

