# BbcWeb SDK configuration


def make_config():
    return {
        "main": {
            "name": "BbcWeb",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://web-cdn.api.bbci.co.uk",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "content": {},
            },
        },
        "entity": {
      "content": {
        "fields": [
          {
            "active": True,
            "name": "data",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "metadata",
            "req": False,
            "type": "`$OBJECT`",
            "index$": 1,
          },
        ],
        "name": "content",
        "op": {
          "load": {
            "input": "data",
            "name": "load",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "/news/videos/ckgerdnvm2xo",
                      "kind": "query",
                      "name": "path",
                      "orig": "path",
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "method": "GET",
                "orig": "/xd/page/content",
                "parts": [
                  "xd",
                  "page",
                  "content",
                ],
                "select": {
                  "exist": [
                    "path",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "index$": 0,
              },
            ],
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
