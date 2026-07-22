
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { BbcWebSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await BbcWebSDK.test()
    equal(null !== testsdk, true)
  })

})
