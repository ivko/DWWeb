require(['dw/core'], function (core) {
    core.load({
        dialog: {
            dialogOption: {
                optionsFor: 'dialog'
            }
        }
    }).then(function () {
        var ko = require('knockout');
        
        ko.applyBindings({
            text: 'Application Started'
        }, document.getElementById('app'));
    });
});