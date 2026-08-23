# BbcWeb SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "BbcWeb",
            "slug": "bbc-web",
            "version": "0.0.1",
            "target": "py",
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
            "name": "data",
            "short": "The content data object containing news articles, videos, or other BBC content",
            "type": "`$OBJECT`",
          },
          {
            "name": "metadata",
            "short": "Metadata about the content",
            "type": "`$OBJECT`",
          },
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
                      "reqd": True,
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
