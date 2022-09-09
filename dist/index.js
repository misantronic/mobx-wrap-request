"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.wrapRequest = void 0;
const mobx_1 = require("mobx");
const pkg = require("wrap-request");
const originalWrapRequest = pkg.wrapRequest;
function buildNewWrapRequest(overrides, ...args) {
    const res = originalWrapRequest(...args);
    (0, mobx_1.makeAutoObservable)(res, overrides);
    return res;
}
function newWrapRequest(...args) {
    return buildNewWrapRequest({
        reset: mobx_1.action,
        request: mobx_1.action,
    }, ...args);
}
exports.wrapRequest = newWrapRequest;
function withObservableOverrides(overrides) {
    return (...args) => {
        return buildNewWrapRequest(overrides, ...args);
    };
}
newWrapRequest.withObservableOverrides = withObservableOverrides;
pkg.wrapRequest = newWrapRequest;
//# sourceMappingURL=index.js.map