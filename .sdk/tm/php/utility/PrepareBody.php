<?php
declare(strict_types=1);

// BbcWeb SDK utility: prepare_body

class BbcWebPrepareBody
{
    public static function call(BbcWebContext $ctx): mixed
    {
        if ($ctx->op->input === 'data') {
            return ($ctx->utility->transform_request)($ctx);
        }
        return null;
    }
}
