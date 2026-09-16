

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { BbcWebSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ContentEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when BBC_WEB_TEST_LIVE=TRUE.
  afterEach(liveDelay('BBC_WEB_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = BbcWebSDK.test()
    const ent = testsdk.Content()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.BBC_WEB_TEST_LIVE
    for (const op of ['load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'content.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"data","req":false,"short":"The content data object containing news articles, videos, or other BBC content","type":"`$OBJECT`","index$":0},{"active":true,"name":"metadata","req":false,"short":"Metadata about the content","type":"`$OBJECT`","index$":1}],"name":"content","op":{"load":{"input":"data","name":"load","points":[{"active":true,"args":{"query":[{"active":true,"example":"/news/videos/ckgerdnvm2xo","kind":"query","name":"path","orig":"path","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /xd/page/content","json":"{\"operationId\":\"getContent\",\"parameters\":[{\"description\":\"The path to the BBC content resource (e.g., /news/videos/ckgerdnvm2xo)\",\"in\":\"query\",\"name\":\"path\",\"required\":true,\"schema\":{\"example\":\"/news/videos/ckgerdnvm2xo\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"data\":{\"description\":\"The content data object containing news articles, videos, or other BBC content\",\"type\":\"object\"},\"metadata\":{\"description\":\"Metadata about the content\",\"type\":\"object\"}},\"type\":\"object\"}}},\"description\":\"Successfully retrieved BBC content\"},\"400\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Invalid path parameter\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Bad Request - Invalid path parameter\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Content not found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Content not found for the specified path\"},\"500\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"Internal server error\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Internal Server Error\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/xd/page/content","segments":[{"lit":"xd"},{"lit":"page"},{"lit":"content"}],"select":{"exist":["path"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"content","name__orig":"content","Name":"Content","name_":"content","name-":"content","NAME":"CONTENT","index$":0}, {"active":true,"entity":"content","key$":"BasicContentFlow","kind":"basic","name":"BasicContentFlow","param":{},"step":[{"active":true,"data":{},"input":{"ref":"content_ref01","srcdatavar":"content_ref01_data","suffix":"_dt0"},"match":{},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-content_ref01"}}],"index$":0}]}, 'Content')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let content_ref01_data = Object.values(setup.data.existing.content)[0] as any

    // LOAD
    const content_ref01_ent = client.Content()
    const content_ref01_match_dt0: any = {}
    const content_ref01_data_dt0 = (await content_ref01_ent.load(content_ref01_match_dt0)).data()
    assert(null != content_ref01_data_dt0)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/content/ContentTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = BbcWebSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['content01','content02','content03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'BBC_WEB_TEST_CONTENT_ENTID': idmap,
    'BBC_WEB_TEST_LIVE': 'FALSE',
    'BBC_WEB_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['BBC_WEB_TEST_CONTENT_ENTID']

  const live = 'TRUE' === env.BBC_WEB_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['BBC_WEB_TEST_CONTENT_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new BbcWebSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.BBC_WEB_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  
