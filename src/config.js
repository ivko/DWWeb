require.config({
    waitSeconds: 15,
    paths: {
        "require": "vendor/requirejs",
        "text": "vendor/text",
        "jquery": "vendor/jquery",
        "knockout": "vendor/knockout",
        "mootools": "vendor/mootools-core",
        //#region sharedResources
        "jquery-ui": "vendor/jquery-ui",
        "jquery.base64": "vendor/jquery.base64",
        "jquery.browser": "vendor/jquery.browser",
        "jquery.calendars": "vendor/jquery.calendars",
        "jquery.cookie": "vendor/jquery.cookie",
        "jquery.event.drag": "vendor/jquery.event.drag",
        "jquery.event.drop": "vendor/jquery.event.drop",
        "jquery.mousewheel": "vendor/jquery.mousewheel",
        "jquery.plugin": "vendor/jquery.plugin",

        "knockout-delegatedEvents": "vendor/knockout-delegatedEvents",
        "knockout-jquery-ui-widget": "vendor/knockout-jquery-ui-widget",
        "knockout-sortable": "vendor/knockout-sortable",
        "knockout-activity": "vendor/knockout.activity",
        "knockout-validation": "vendor/knockout.validation",
        "moment": "vendor/moment",
        
        "mootools-interfaces": "vendor/mootools-interfaces",
        "activity-indicator": "vendor/activity-indicator",
        "hammer": "vendor/hammer",
        "hand": "vendor/hand",
        "spin": "vendor/spin",
        "slick.grid": "vendor/slick.grid",
        "globalize": "vendor/globalize",
        //#endregion;
        //#region jQueryUI
        /* jQuery UI */
        'jquery.ui.accordion': 'vendor/jquery-ui/jquery.ui.accordion',
        'jquery.ui.autocomplete': 'vendor/jquery-ui/jquery.ui.autocomplete',
        'jquery.ui.button': 'vendor/jquery-ui/jquery.ui.button',
        'jquery.ui.core': 'vendor/jquery-ui/jquery.ui.core',
        'jquery.ui.datepicker': 'vendor/jquery-ui/jquery.ui.datepicker',
        'jquery.ui.dialog': 'vendor/jquery-ui/jquery.ui.dialog',
        'jquery.ui.draggable': 'vendor/jquery-ui/jquery.ui.draggable',
        'jquery.ui.droppable': 'vendor/jquery-ui/jquery.ui.droppable',
        'jquery.ui.effect-blind': 'vendor/jquery-ui/jquery.ui.effect-blind',
        'jquery.ui.effect-bounce': 'vendor/jquery-ui/jquery.ui.effect-bounce',
        'jquery.ui.effect-clip': 'vendor/jquery-ui/jquery.ui.effect-clip',
        'jquery.ui.effect-drop': 'vendor/jquery-ui/jquery.ui.effect-drop',
        'jquery.ui.effect-explode': 'vendor/jquery-ui/jquery.ui.effect-explode',
        'jquery.ui.effect-fade': 'vendor/jquery-ui/jquery.ui.effect-fade',
        'jquery.ui.effect-fold': 'vendor/jquery-ui/jquery.ui.effect-fold',
        'jquery.ui.effect-highlight': 'vendor/jquery-ui/jquery.ui.effect-highlight',
        'jquery.ui.effect-pulsate': 'vendor/jquery-ui/jquery.ui.effect-pulsate',
        'jquery.ui.effect-scale': 'vendor/jquery-ui/jquery.ui.effect-scale',
        'jquery.ui.effect-shake': 'vendor/jquery-ui/jquery.ui.effect-shake',
        'jquery.ui.effect-slide': 'vendor/jquery-ui/jquery.ui.effect-slide',
        'jquery.ui.effect-transfer': 'vendor/jquery-ui/jquery.ui.effect-transfer',
        'jquery.ui.effect': 'vendor/jquery-ui/jquery.ui.effect',
        'jquery.ui.menu': 'vendor/jquery-ui/jquery.ui.menu',
        'jquery.ui.mouse': 'vendor/jquery-ui/jquery.ui.mouse',
        'jquery.ui.position': 'vendor/jquery-ui/jquery.ui.position',
        'jquery.ui.progressbar': 'vendor/jquery-ui/jquery.ui.progressbar',
        'jquery.ui.resizable': 'vendor/jquery-ui/jquery.ui.resizable',
        'jquery.ui.selectable': 'vendor/jquery-ui/jquery.ui.selectable',
        'jquery.ui.slider': 'vendor/jquery-ui/jquery.ui.slider',
        'jquery.ui.sortable': 'vendor/jquery-ui/jquery.ui.sortable',
        'jquery.ui.spinner': 'vendor/jquery-ui/jquery.ui.spinner',
        'jquery.ui.tabs': 'vendor/jquery-ui/jquery.ui.tabs',
        'jquery.ui.tooltip': 'vendor/jquery-ui/jquery.ui.tooltip',
        'jquery.ui.widget': 'vendor/jquery-ui/jquery.ui.widget'
        // #endregion
    },
    shim: {
        'knockout': ['jquery'],
        'dw/widgets/dialog/b': {
            deps: ['dw/widgets/dialog/a'],
            exports: 'dw'
        },
        'dw/widgets/dialog/a': {
            exports: 'dw'
        },
        //#region sharedResources
        "mootools-interfaces": ["mootools"],
        //#endregion;
        //#region jQueryUI
        /* jQuery UI */
        'jquery.ui.accordion': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.widget'
            ]
        },
        'jquery.ui.autocomplete': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.widget',
                'jquery.ui.position',
                'jquery.ui.menu'
            ]
        },
        'jquery.ui.button': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.widget'
            ]
        },
        'jquery.ui.core': {
            deps: ['jquery']
        },
        'jquery.ui.datepicker': {
            deps: ['jquery.ui.core']
        },
        'jquery.ui.dialog': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.widget',
                'jquery.ui.button',
                'jquery.ui.draggable',
                'jquery.ui.mouse',
                'jquery.ui.position',
                'jquery.ui.resizable'
            ]
        },
        'jquery.ui.draggable': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.mouse',
                'jquery.ui.widget'
            ]
        },
        'jquery.ui.droppable': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.mouse',
                'jquery.ui.widget',
                'jquery.ui.draggable'
            ]
        },
        'jquery.ui.effect-blind': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect-bounce': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect-clip': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect-drop': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect-explode': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect-fade': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect-fold': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect-highlight': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect-pulsate': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect-scale': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect-shake': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect-slide': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect-transfer': {
            deps: ['jquery.ui.effect']
        },
        'jquery.ui.effect': {
            deps: ['jquery']
        },
        'jquery.ui.menu': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.widget',
                'jquery.ui.position'
            ]
        },
        'jquery.ui.mouse': {
            deps: ['jquery.ui.widget']
        },
        'jquery.ui.position': {
            deps: ['jquery']
        },
        'jquery.ui.progressbar': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.widget'
            ]
        },
        'jquery.ui.resizable': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.mouse',
                'jquery.ui.widget'
            ]
        },
        'jquery.ui.selectable': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.mouse',
                'jquery.ui.widget'
            ]
        },
        'jquery.ui.slider': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.mouse',
                'jquery.ui.widget'
            ]
        },
        'jquery.ui.sortable': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.mouse',
                'jquery.ui.widget'
            ]
        },
        'jquery.ui.spinner': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.widget',
                'jquery.ui.button'
            ]
        },
        'jquery.ui.tabs': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.widget'
            ]
        },
        'jquery.ui.tooltip': {
            deps: [
                'jquery.ui.core',
                'jquery.ui.widget',
                'jquery.ui.position'
            ]
        },
        'jquery.ui.widget': {
            deps: ['jquery']
        },

        /* jQuery UI i18n */
        'jquery.ui.datepicker-en': {
            deps: ['jquery.ui.datepicker']
        }
        //#endregion
    },
    urlArgs: "bust=" + (new Date()).getTime()
});