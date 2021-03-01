"use strict";
exports.__esModule = true;
var IOCContainer = function () {
    var services = {};
    var callbacks = {};
    var add = function (name, cb) {
        callbacks[name] = cb;
    };
    var get = function (name) {
        if (!services[name]) {
            services[name] = callbacks[name](get);
        }
        return services[name];
    };
    return {
        add: add,
        get: get
    };
};
exports["default"] = IOCContainer;
