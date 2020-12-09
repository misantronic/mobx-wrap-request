"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
const mobx_1 = require("mobx");
const pkg = require("wrap-request");
__exportStar(require("wrap-request"), exports);
const originalWrapRequest = pkg.wrapRequest;
pkg.wrapRequest = function (...args) {
    const res = originalWrapRequest(...args);
    mobx_1.makeAutoObservable(res, {
        reset: mobx_1.action,
        request: mobx_1.action
    });
    return res;
};
//# sourceMappingURL=index.js.map