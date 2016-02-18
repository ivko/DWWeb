define(['dw/utils'], function (utils) {

    utils.log('dialog loaded');

    var dialog = {
        install: function (options) {
            utils.log('install dialog', options);
        }
    };

    return dialog;
});