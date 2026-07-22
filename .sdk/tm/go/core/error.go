package core

type BbcWebError struct {
	IsBbcWebError bool
	Sdk              string
	Code             string
	Msg              string
	Ctx              *Context
	Result           any
	Spec             any
}

func NewBbcWebError(code string, msg string, ctx *Context) *BbcWebError {
	return &BbcWebError{
		IsBbcWebError: true,
		Sdk:              "BbcWeb",
		Code:             code,
		Msg:              msg,
		Ctx:              ctx,
	}
}

func (e *BbcWebError) Error() string {
	return e.Msg
}
