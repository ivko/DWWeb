define([
    '../utils',
    'text!../templates/t1.html',
    'text!../templates/t2.html',
    './dialog/b'],
function (utils, t1, t2) {
    
    // TODO: css, localization??

    // Adding owned templates.
    utils.addTemplates(t1, t2);

    // Use some system methods
    utils.log('dialog loaded', window.dw, t1, t2);

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