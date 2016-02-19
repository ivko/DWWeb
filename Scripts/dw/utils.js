define(['jquery', 'dw/global'], function ($) {
    
    var utils = {
        addTemplates: function () {
            $("body").append(Array.slice(arguments).join("\n"));
        },
        log: function () {
            console.log.apply(console, arguments);
        },
        error: function () {
            console.error.apply(console, arguments);
        },
        defer: function (action) {
            return $.Deferred(action);
        },
        isObject: function(obj) {
            return obj === Object(obj);
        },
        /**
         * Uses require.js to obtain a module. This function returns a promise which resolves with the module instance.
         * You can pass more than one module id to this function or an array of ids. If more than one or an array is passed,
         * then the promise will resolve with an array of module instances.
         */
        acquire: function () {
            var modules,
                first = arguments[0],
                arrayRequest = false,
                slice = Array.prototype.slice;

            if ($.isArray(first)) {
                modules = first;
                arrayRequest = true;
            } else {
                modules = slice.call(arguments, 0);
            }

            return this.defer(function (dfd) {
                require(modules, function () {
                    var args = arguments;
                    setTimeout(function () {
                        if (args.length > 1 || arrayRequest) {
                            dfd.resolve(slice.call(args, 0));
                        } else {
                            dfd.resolve(args[0]);
                        }
                    }, 1);
                }, function (err) {
                    dfd.reject(err);
                });
            }).promise();
        }
    };

    return utils;
});