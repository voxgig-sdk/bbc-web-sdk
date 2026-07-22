<?php
declare(strict_types=1);

// BbcWeb SDK utility: result_body

class BbcWebResultBody
{
    public static function call(BbcWebContext $ctx): ?BbcWebResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result && $response && $response->json_func && $response->body) {
            $result->body = ($response->json_func)();
        }
        return $result;
    }
}
