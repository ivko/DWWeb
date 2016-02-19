define(['jquery', 'dw/utils', 'dw/global', 'text'], function ($, utils) {
    var core,
        allPluginIds = [],
        allPluginConfigs = [];

    function loadPlugins() {
        return utils.defer(function (dfd) {
            if (allPluginIds.length == 0) {
                dfd.resolve();
                return;
            }

            utils.acquire(allPluginIds).then(function (loaded) {
                for (var i = 0; i < loaded.length; i++) {
                    var currentModule = loaded[i];

                    if (currentModule.install) {
                        var config = allPluginConfigs[i];
                        if (!utils.isObject(config)) {
                            config = {};
                        }

                        currentModule.install(config);
                        utils.log('Plugin:Installed ' + allPluginIds[i]);
                    } else {
                        utils.log('Plugin:Loaded ' + allPluginIds[i]);
                    }
                }

                dfd.resolve();
            }).fail(function (err) {
                utils.error('Failed to load plugin(s). Details: ' + err.message);
            });
        }).promise();
    }


    core = {
        configurePlugins: function (config, baseUrl) {
            var pluginIds = Object.keys(config);
            baseUrl = baseUrl || 'plugins/';

            if (baseUrl.indexOf('/', baseUrl.length - 1) === -1) {
                baseUrl += '/';
            }

            for (var i = 0; i < pluginIds.length; i++) {
                var key = pluginIds[i];
                allPluginIds.push(baseUrl + key);
                allPluginConfigs.push(config[key]);
            }
        },
        start: function () {
            return utils.defer(function (dfd) {
                $(function () {
                    loadPlugins().then(function () {
                        dfd.resolve();
                        utils.log('Application:Started');
                    });
                });
            }).promise();
        }
    };


    return core;
});