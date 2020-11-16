import { action, makeAutoObservable } from "mobx";
import * as pkg from "wrap-request";

export * from "wrap-request";

const originalWrapRequest = pkg.wrapRequest;

pkg.wrapRequest = function (...args) {
  const res = originalWrapRequest(...args);

  makeAutoObservable(res, {
    reset: action,
    request: action
  });

  return res;
};
