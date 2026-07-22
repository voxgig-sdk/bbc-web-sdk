<?php
declare(strict_types=1);

// BbcWeb SDK utility: feature_hook

class BbcWebFeatureHook
{
    public static function call(BbcWebContext $ctx, string $name): void
    {
        if (!$ctx->client) {
            return;
        }
        $features = $ctx->client->features ?? null;
        if (!$features) {
            return;
        }
        foreach ($features as $f) {
            if (method_exists($f, $name)) {
                $f->$name($ctx);
            }
        }
    }
}
