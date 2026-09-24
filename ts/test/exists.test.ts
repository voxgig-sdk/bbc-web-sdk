
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BbcWebSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = BbcWebSDK.test()
    equal(testsdk instanceof BbcWebSDK, true,
      'BbcWebSDK.test() must return a client synchronously')
  })

})
