import { AnnotationsMap } from 'mobx';
import * as pkg from 'wrap-request';
declare const originalWrapRequest: typeof pkg.wrapRequest;
declare type WrapRequestParams<$, P = any, $$ = $, MD = any> = Parameters<typeof originalWrapRequest<$, P, $$, MD>>;
declare function newWrapRequest<$, P = any, $$ = $, MD = any>(...args: WrapRequestParams<$, P, $$, MD>): pkg.WrapRequest<$, P, $$, MD>;
declare namespace newWrapRequest {
    var withObservableOverrides: (overrides: AnnotationsMap<pkg.WrapRequest<any, any, any, any>, PropertyKey>) => <$, P = any, $$ = $, MD = any>(request: pkg.RequestFn<$, P>, options?: pkg.Options<$, MD> | undefined) => pkg.WrapRequest<$, P, $$, MD>;
}
export { newWrapRequest as wrapRequest };
