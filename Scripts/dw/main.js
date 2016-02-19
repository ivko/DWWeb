/// <reference path="../lib/requirejs/require.js" />
/// <reference path="../lib/knockoutjs/dist/knockout.debug.js" />

require(['dw/core'], function (core) {

    var ko = require('knockout');

    core.configurePlugins({
        dialog: true
    }, 'dw/widgets');

    core.start().then(function () {
        ko.applyBindings({
            text: 'Application Started'
        }, document.getElementById('app'));
    });
});