define([
    'dw/utils',
    'dw/a',
    'text!dw/templates/t1.html',
    'text!dw/templates/t2.html'],
function (utils, a, t1, t2) {

    // TODO: css, localization??

    // Adding owned templates.
    utils.addTemplates(t1, t2);

    // Use some system methods
    utils.log('dialog loaded', a, t1, t2);

    // Define plugin
    var dialog = {
        // callback to initialize the plugin
        install: function (options) {
            // create vm instances with special options..
            // do someting...
            utils.log('install dialog! Options:', options);
            //TODO: return promise
        }
    };

    return dialog;
});