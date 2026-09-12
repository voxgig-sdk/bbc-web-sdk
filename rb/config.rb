# BbcWeb SDK configuration

module BbcWebConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "BbcWeb",
        "slug" => "bbc-web",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
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
              "name" => "data",
              "short" => "The content data object containing news articles, videos, or other BBC content",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "metadata",
              "short" => "Metadata about the content",
              "type" => "`$OBJECT`",
            },
          ],
          "name" => "content",
          "op" => {
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
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
                  "segments" => [
                    {
                      "lit" => "xd",
                    },
                    {
                      "lit" => "page",
                    },
                    {
                      "lit" => "content",
                    },
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
                  "parts" => [
                    "xd",
                    "page",
                    "content",
                  ],
                },
              ],
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
