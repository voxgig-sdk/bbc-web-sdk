
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'BbcWeb',
        slug: "bbc-web",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     test:     {
      "options": {
        "active": false
      },
      "transport": "base"
    },

  }


  options = {
    base: "https://web-cdn.api.bbci.co.uk",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      content: {
      },

    }
  }


  entity = {
    "content": {
      "fields": [
        {
          "name": "data",
          "short": "The content data object containing news articles, videos, or other BBC content",
          "type": "`$OBJECT`"
        },
        {
          "name": "metadata",
          "short": "Metadata about the content",
          "type": "`$OBJECT`"
        }
      ],
      "name": "content",
      "op": {
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "query": [
                  {
                    "example": "/news/videos/ckgerdnvm2xo",
                    "kind": "query",
                    "name": "path",
                    "orig": "path",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/xd/page/content",
              "segments": [
                {
                  "lit": "xd"
                },
                {
                  "lit": "page"
                },
                {
                  "lit": "content"
                }
              ],
              "select": {
                "exist": [
                  "path"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "xd",
                "page",
                "content"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

