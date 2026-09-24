"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BbcWebError = void 0;
class BbcWebError extends Error {
    isBbcWebError = true;
    sdk = 'BbcWeb';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.BbcWebError = BbcWebError;
//# sourceMappingURL=BbcWebError.js.map