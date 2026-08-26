-- BbcWeb SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "BbcWeb",
      slug = "bbc-web",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://web-cdn.api.bbci.co.uk",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["content"] = {},
      },
    },
    entity = {
      ["content"] = {
        ["fields"] = {
          {
            ["name"] = "data",
            ["short"] = "The content data object containing news articles, videos, or other BBC content",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "metadata",
            ["short"] = "Metadata about the content",
            ["type"] = "`$OBJECT`",
          },
        },
        ["name"] = "content",
        ["op"] = {
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = "/news/videos/ckgerdnvm2xo",
                      ["kind"] = "query",
                      ["name"] = "path",
                      ["orig"] = "path",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/xd/page/content",
                ["parts"] = {
                  "xd",
                  "page",
                  "content",
                },
                ["select"] = {
                  ["exist"] = {
                    "path",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
