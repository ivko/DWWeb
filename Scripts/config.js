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