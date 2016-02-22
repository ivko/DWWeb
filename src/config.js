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
        'dw/gallery/a': {
            deps: ['dw/gallery/b'],
            exports: 'a'
        },
        'dw/gallery/b': {
            exports: 'b'
        }
    },
    urlArgs: "bust=" + (new Date()).getTime()
});