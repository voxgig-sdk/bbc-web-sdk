<?php
declare(strict_types=1);

// BbcWeb SDK utility: result_headers

class BbcWebResultHeaders
{
    public static function call(BbcWebContext $ctx): ?BbcWebResult
    {
        $response = $ctx->response;
        $result = $ctx->result;
        if ($result) {
            if ($response && is_array($response->headers)) {
                $result->headers = $response->headers;
            } else {
                $result->headers = [];
            }
        }
        return $result;
    }
}
