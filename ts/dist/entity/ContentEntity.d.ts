import { BbcWebEntityBase } from '../BbcWebEntityBase';
import type { BbcWebSDK } from '../BbcWebSDK';
import type { Control } from '../types';
import type { Content, ContentLoadMatch } from '../BbcWebTypes';
declare class ContentEntity extends BbcWebEntityBase<Content> {
    constructor(client: BbcWebSDK, entopts: any);
    make(this: ContentEntity): ContentEntity;
    load(this: any, reqmatch?: ContentLoadMatch, ctrl?: Control): Promise<ContentEntity>;
}
export { ContentEntity };
