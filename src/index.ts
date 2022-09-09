import { action, AnnotationsMap, makeAutoObservable } from 'mobx';
import * as pkg from 'wrap-request';

const originalWrapRequest = pkg.wrapRequest;

type NoInfer<T> = [T][T extends any ? 0 : never];

type WrapRequestParams = Parameters<typeof originalWrapRequest>;
type RequestFn = WrapRequestParams[0];
type RequestOptions = Parameters<RequestFn>[1];
type Options = WrapRequestParams[1];

export { RequestFn, Options, RequestOptions };

function buildNewWrapRequest(
    overrides: AnnotationsMap<pkg.WrapRequest, NoInfer<PropertyKey>>,
    ...args: WrapRequestParams
) {
    const res = originalWrapRequest(...args);

    makeAutoObservable(res, overrides);

    return res;
}

function newWrapRequest(
    ...args: WrapRequestParams
): ReturnType<typeof buildNewWrapRequest> {
    return buildNewWrapRequest(
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
    return (...args: WrapRequestParams) => {
        return buildNewWrapRequest(overrides, ...args);
    };
}

newWrapRequest.withObservableOverrides = withObservableOverrides;

(pkg as any).wrapRequest = newWrapRequest;

export { newWrapRequest as wrapRequest };
