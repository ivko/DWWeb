define(['dw/utils', 'dw/a', 'text!dw/templates/t1.html', 'text!dw/templates/t2.html'], function (utils, a, t1, t2) {

    utils.log('dialog loaded', a, t1, t2);

    var dialog = {
        install: function (options) {
            utils.log('install dialog', options);
        }
    };

    return dialog;
});