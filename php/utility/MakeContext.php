<?php
declare(strict_types=1);

// BbcWeb SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class BbcWebMakeContext
{
    public static function call(array $ctxmap, ?BbcWebContext $basectx): BbcWebContext
    {
        return new BbcWebContext($ctxmap, $basectx);
    }
}
