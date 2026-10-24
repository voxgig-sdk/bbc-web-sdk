import { ContentEntity } from './entity/ContentEntity';
export type * from './BbcWebTypes';
import { inspect } from 'node:util';
import type { Context, Feature } from './types';
import { config } from './Config';
import { BbcWebEntityBase } from './BbcWebEntityBase';
import { Utility } from './utility/Utility';
import { BaseFeature } from './feature/base/BaseFeature';
declare const stdutil: Utility;
type DirectResult = {
    ok: false;
    err: any;
    status?: undefined;
    headers?: undefined;
    data?: undefined;
} | {
    ok: boolean;
    status: number;
    headers: any;
    data: any;
    err?: any;
};
declare class BbcWebSDK {
    _mode: string;
    _options: any;
    _utility: Utility;
    _features: Feature[];
    _rootctx: Context;
    constructor(options?: any);
    options(): any;
    utility(): any;
    prepare(fetchargs?: any): Promise<any>;
    direct(fetchargs?: any): Promise<DirectResult>;
    _rawRequest(fetchargs?: any): Promise<DirectResult>;
    graphql(query: string, variables?: any, ctrl?: any): Promise<any>;
    Content(entopts?: Record<string, any>): ContentEntity;
    static test(testoptsarg?: any, sdkoptsarg?: any): BbcWebSDK;
    tester(testopts?: any, sdkopts?: any): BbcWebSDK;
    toJSON(): {
        name: string;
    };
    toString(): string;
    [inspect.custom](): string;
}
declare const SDK: typeof BbcWebSDK;
export { stdutil, config, BaseFeature, BbcWebEntityBase, BbcWebSDK, SDK, };
export type { DirectResult };
