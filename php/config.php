<?php
declare(strict_types=1);

// BbcWeb SDK configuration

class BbcWebConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "BbcWeb",
                "slug" => "bbc-web",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "test" => [
          'options' => [
            'active' => false,
          ],
        ],
            ],
            "options" => [
                "base" => "https://web-cdn.api.bbci.co.uk",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "content" => [],
                ],
            ],
            "entity" => [
        'content' => [
          'fields' => [
            [
              'name' => 'data',
              'short' => 'The content data object containing news articles, videos, or other BBC content',
              'type' => '`$OBJECT`',
            ],
            [
              'name' => 'metadata',
              'short' => 'Metadata about the content',
              'type' => '`$OBJECT`',
            ],
          ],
          'name' => 'content',
          'op' => [
            'load' => [
              'input' => 'data',
              'name' => 'load',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => '/news/videos/ckgerdnvm2xo',
                        'kind' => 'query',
                        'name' => 'path',
                        'orig' => 'path',
                        'reqd' => true,
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/xd/page/content',
                  'parts' => [
                    'xd',
                    'page',
                    'content',
                  ],
                  'select' => [
                    'exist' => [
                      'path',
                    ],
                  ],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return BbcWebFeatures::make_feature($name);
    }
}
