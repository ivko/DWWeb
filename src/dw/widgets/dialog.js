define([
    '../utils',
    './b',
    'text!../templates/t1.html',
    'text!../templates/t2.html'],
function (utils, b, t1, t2) {
    
    // TODO: css, localization??

    // Adding owned templates.
    utils.addTemplates(t1, t2);

    // Use some system methods
    utils.log('dialog loaded', window, t1, t2);

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