import { action, AnnotationsMap, makeAutoObservable } from 'mobx';
import * as pkg from 'wrap-request';

const originalWrapRequest = pkg.wrapRequest;

type NoInfer<T> = [T][T extends any ? 0 : never];

type WrapRequestParams<$, P = any, $$ = $, MD = any> = Parameters<
    typeof originalWrapRequest<$, P, $$, MD>
>;

function buildNewWrapRequest<$, P = any, $$ = $, MD = any>(
    overrides: AnnotationsMap<pkg.WrapRequest, NoInfer<PropertyKey>>,
    ...args: WrapRequestParams<$, P, $$, MD>
) {
    const res = originalWrapRequest<$, P, $$, MD>(...args);

    makeAutoObservable(res, overrides);

    return res;
}

function newWrapRequest<$, P = any, $$ = $, MD = any>(
    ...args: WrapRequestParams<$, P, $$, MD>
) {
    return buildNewWrapRequest<$, P, $$, MD>(
        {
            reset: action,
            request: action,
        },
        ...args
    );
}

function withObservableOverrides(
    overrides: AnnotationsMap<pkg.WrapRequest, NoInfer<PropertyKey>>
) {
    return <$, P = any, $$ = $, MD = any>(
        ...args: WrapRequestParams<$, P, $$, MD>
    ) => {
        return buildNewWrapRequest<$, P, $$, MD>(overrides, ...args);
    };
}

newWrapRequest.withObservableOverrides = withObservableOverrides;

(pkg as any).wrapRequest = newWrapRequest;

export { newWrapRequest as wrapRequest };
