import { AnnotationsMap } from 'mobx';
import * as pkg from 'wrap-request';
declare const originalWrapRequest: typeof pkg.wrapRequest;
declare type NoInfer<T> = [T][T extends any ? 0 : never];
declare type WrapRequestParams = Parameters<typeof originalWrapRequest>;
declare type RequestFn = WrapRequestParams[0];
declare type RequestOptions = Parameters<RequestFn>[1];
declare type Options = WrapRequestParams[1];
export { RequestFn, Options, RequestOptions };
declare function buildNewWrapRequest(overrides: AnnotationsMap<pkg.WrapRequest, NoInfer<PropertyKey>>, ...args: WrapRequestParams): pkg.WrapRequest<unknown, unknown, unknown, unknown>;
declare function newWrapRequest(...args: WrapRequestParams): ReturnType<typeof buildNewWrapRequest>;
declare namespace newWrapRequest {
    var withObservableOverrides: (overrides: AnnotationsMap<pkg.WrapRequest<any, any, any, any>, string | number | symbol>) => (request: pkg.RequestFn<unknown, unknown>, options?: pkg.Options<unknown, unknown, unknown> | undefined) => pkg.WrapRequest<unknown, unknown, unknown, unknown>;
}
export { newWrapRequest as wrapRequest };
