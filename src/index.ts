import { action, makeAutoObservable } from "mobx";
import * as pkg from "wrap-request";

export * from "wrap-request";

const originalWrapRequest = pkg.wrapRequest;

type WrapRequestParams = Parameters<typeof originalWrapRequest>;

(pkg as any).wrapRequest = function (...args: WrapRequestParams) {
  const res = originalWrapRequest(...args);

  makeAutoObservable(res, {
    reset: action,
    request: action
  });

  return res;
};
