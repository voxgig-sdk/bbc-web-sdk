# BbcWeb SDK configuration

module BbcWebConfig
  def self.make_config
    {
      "main" => {
        "name" => "BbcWeb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://web-cdn.api.bbci.co.uk",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "content" => {},
        },
      },
      "entity" => {
        "content" => {
          "fields" => [
            {
              "active" => true,
              "name" => "data",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 0,
            },
            {
              "active" => true,
              "name" => "metadata",
              "req" => false,
              "type" => "`$OBJECT`",
              "index$" => 1,
            },
          ],
          "name" => "content",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "active" => true,
                  "args" => {
                    "query" => [
                      {
                        "active" => true,
                        "example" => "/news/videos/ckgerdnvm2xo",
                        "kind" => "query",
                        "name" => "path",
                        "orig" => "path",
                        "reqd" => true,
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/xd/page/content",
                  "parts" => [
                    "xd",
                    "page",
                    "content",
                  ],
                  "select" => {
                    "exist" => [
                      "path",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "index$" => 0,
                },
              ],
              "key$" => "load",
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    BbcWebFeatures.make_feature(name)
  end
end
