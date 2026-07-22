
import { Context } from './Context'


class BbcWebError extends Error {

  isBbcWebError = true

  sdk = 'BbcWeb'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  BbcWebError
}

