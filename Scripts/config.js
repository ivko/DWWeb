require.config({
    waitSeconds: 15,
    paths: {
        'text': 'vendor/requirejs-text/text',
        'knockout': 'vendor/knockout/dist/knockout.debug',
        'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
        'jquery': 'vendor/jquery/dist/jquery',
        "mootools": "vendor/mootools/dist/mootools-core",
    },
    shim: {
        'dw/a': {
            deps: ['dw/b'],
            exports: 'a'
        },
        'dw/b': {
            exports: 'b'
        },
        'knockout': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        'bootstrap': {
            deps: ['jquery'],
            exports: 'jQuery'
        },
        "mootools-interfaces": [
            "mootools"
        ]
    },
    urlArgs: "bust=" + (new Date()).getTime()
});