<?php
declare(strict_types=1);

// BbcWeb SDK base feature

class BbcWebBaseFeature
{
    public string $version;
    public string $name;
    public bool $active;

    // Positions this feature when added via the client `extend` option:
    // "__before__" / "__after__" / "__replace__" name an already-added
    // feature (mirrors the ts feature `_options`). Declared so setting it
    // on an extension instance avoids the dynamic-property deprecation.
    public ?array $_options = null;

    public function __construct()
    {
        $this->version = '0.0.1';
        $this->name = 'base';
        $this->active = true;
    }

    public function get_version(): string { return $this->version; }
    public function get_name(): string { return $this->name; }
    public function get_active(): bool { return $this->active; }

    public function init(BbcWebContext $ctx, array $options): void {}
    public function PostConstruct(BbcWebContext $ctx): void {}
    public function PostConstructEntity(BbcWebContext $ctx): void {}
    public function SetData(BbcWebContext $ctx): void {}
    public function GetData(BbcWebContext $ctx): void {}
    public function GetMatch(BbcWebContext $ctx): void {}
    public function SetMatch(BbcWebContext $ctx): void {}
    public function PrePoint(BbcWebContext $ctx): void {}
    public function PreSpec(BbcWebContext $ctx): void {}
    public function PreRequest(BbcWebContext $ctx): void {}
    public function PreResponse(BbcWebContext $ctx): void {}
    public function PreResult(BbcWebContext $ctx): void {}
    public function PreDone(BbcWebContext $ctx): void {}
    public function PreUnexpected(BbcWebContext $ctx): void {}
}
