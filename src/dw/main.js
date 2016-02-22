/// <reference path="../lib/requirejs/require.js" />
/// <reference path="../lib/knockoutjs/dist/knockout.debug.js" />

require(['dw/core'], function (core) {

    core.load({
        dialog: {
            dialogOption: 'dialogOption'
        }
    }).then(function () {
        var ko = require('knockout');
        
        ko.applyBindings({
            text: 'Application Started'
        }, document.getElementById('app'));
    });
});