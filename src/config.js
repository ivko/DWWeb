require.config({
    waitSeconds: 15,
    paths: {
        'text': 'vendor/requirejs-text/text',
        'knockout': 'vendor/knockout/dist/knockout.debug',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'jquery': 'vendor/jquery/dist/jquery',
        "mootools": "vendor/mootools/dist/mootools-core"
    },
    shim: {
        'knockout': ['jquery'],
        'bootstrap': ['jquery'],
        "mootools-interfaces": [ "mootools" ],
        'dw/widgets/dialog/b': {
            deps: ['dw/widgets/dialog/a'],
            exports: 'dw'
        },
        'dw/widgets/dialog/a': {
            exports: 'dw'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
});