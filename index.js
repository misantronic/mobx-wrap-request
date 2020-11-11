import { action, makeAutoObservable } from "mobx";
import { wrapRequest } from "wrap-request";

export * from "wrap-request";

const originalWrapRequest = wrapRequest;

wrapRequest = function (...args) {
  const res = originalWrapRequest(...args);

  makeAutoObservable(res, {
    reset: action,
    request: action
  });

  return res;
};
