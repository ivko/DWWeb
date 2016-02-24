/// <vs BeforeBuild='requirejs:compile' />
module.exports = function (grunt) {

    var compileOptions = grunt.file.readJSON('build.json');

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            vendor: {
                files: {
                    'src/vendor/jquery.calendars.js': [
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.islamic.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker.ext.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-ar.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-bg.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-de.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-el.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-en-GB.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-es.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-fr.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-hr.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-it.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-ja.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-nl.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-pl.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-pt-BR.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-ru.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-sv.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-zh-CN.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.plus.js',
                        'src/vendor/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.ummalqura.js'
                    ],
                    'src/vendor/globalize.js': [
                        'src/vendor/SharedResources/Components/Globalize/globalize.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-ar.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-bg.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-de.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-de-CH.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-el.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-en-GB.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-en-US.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-es.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-fr.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-hr.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-it.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-ja.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-nl.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-pl.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-pt.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-ru.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-sv.js',
                        'src/vendor/SharedResources/Components/Globalize/globalize.culture-zh.js'
                    ],
                    'src/vendor/slick.grid.js': [
                        'src/vendor/SharedResources/Components/Widgets/slickGrid/js/slick.core.js',
                        'src/vendor/SharedResources/Components/Widgets/slickGrid/js/slick.grid.js',
                        'src/vendor/SharedResources/Components/Widgets/slickGrid/js/slick.rowselectionmodel.js',
                        'src/vendor/SharedResources/Components/Widgets/slickGrid/js/slick.cellselectionmodel.js',
                        'src/vendor/SharedResources/Components/Widgets/slickGrid/js/slick.cellrangeselector.js',
                        'src/vendor/SharedResources/Components/Widgets/slickGrid/js/slick.cellrangedecorator.js',
                        'src/vendor/SharedResources/Components/Widgets/slickGrid/js/slick.autotooltips.js',
                        'src/vendor/SharedResources/Components/Widgets/slickGrid/js/slick.droppable.js'
                    ]
                },
            },
        },
        copy: {
          main: {
              files: [
                { src: 'bower_components/requirejs/require.js', dest: 'src/vendor/require.js' },
                { src: 'bower_components/requirejs-text/text.js', dest: 'src/vendor/text.js' },
                { src: 'bower_components/jquery/dist/jquery.js', dest: 'src/vendor/jquery.js' },
                { cwd: 'bower_components/jquery-ui/ui/', src: ['*'], dest: 'src/vendor/jquery-ui/', expand: true, filter: 'isFile' },

                { src: 'bower_components/SharedResources/Scripts/knockout-3.4.0.debug.js', dest: 'src/vendor/knockout.js' },
                { src: 'bower_components/SharedResources/Scripts/Mootools/mootools-core.js', dest: 'src/vendor/mootools-core.js' },
                { src: 'bower_components/SharedResources/Scripts/Mootools/mootools-interfaces.js', dest: 'src/vendor/mootools-interfaces.js' },
                { src: 'bower_components/SharedResources/Components/hand-1.3.7.js', dest: 'src/vendor/hand.js' },
                { src: 'bower_components/SharedResources/Components/hammer.js', dest: 'src/vendor/hammer.js' },
                { src: 'bower_components/SharedResources/Components/jquery.mousewheel.js', dest: 'src/vendor/jquery.mousewheel.js' },
                { src: 'bower_components/SharedResources/Components/knockout-jquery-ui-widget.js', dest: 'src/vendor/knockout-jquery-ui-widget.js' },
                { src: 'bower_components/SharedResources/Components/jquery.event.drag-2.2.js', dest: 'src/vendor/jquery.event.drag.js' },
                { src: 'bower_components/SharedResources/Components/jquery.event.drop-2.2.js', dest: 'src/vendor/jquery.event.drop.js' },
                { src: 'bower_components/SharedResources/Components/jquery.base64.js', dest: 'src/vendor/jquery.base64.js' },
                { src: 'bower_components/SharedResources/Components/jquery.cookie.js', dest: 'src/vendor/jquery.cookie.js' },
                { src: 'bower_components/SharedResources/Components/spin.js', dest: 'src/vendor/spin.js' },
                { src: 'bower_components/SharedResources/Components/jquery.browser.js', dest: 'src/vendor/jquery.browser.js' },
                { src: 'bower_components/SharedResources/Components/activity-indicator.js', dest: 'src/vendor/activity-indicator.js' },
                { src: 'bower_components/SharedResources/Components/moment.js', dest: 'src/vendor/moment.js' },
                { src: 'bower_components/SharedResources/Components/jquery.plugin.js', dest: 'src/vendor/jquery.plugin.js' },
                { src: 'bower_components/SharedResources/Components/Bindings/knockout.activity.js', dest: 'src/vendor/knockout.activity.js' },
                { src: 'bower_components/SharedResources/Components/Bindings/knockout-delegatedEvents.js', dest: 'src/vendor/knockout-delegatedEvents.js' },
                { src: 'bower_components/SharedResources/Components/Bindings/knockout-sortable.js', dest: 'src/vendor/knockout-sortable.js' },
                { src: 'bower_components/SharedResources/Components/Bindings/knockout.validation.js', dest: 'src/vendor/knockout.validation.js' },




              // includes files within path
              /*{
                expand: true,
                cwd: 'lib/WebClient/Views/Shared/Templates',
                src: '**',
                dest: 'src/Templates',
                filter: 'isFile'
              },
              {
                expand: true,
                cwd: 'lib/SharedResources/Components/Bindings',
                src: '**',
                dest: 'src/Bindings'
              },
              {
                expand: true,
                cwd: 'lib/SharedResources/Components/Bindings',
                src: '**',
                dest: 'src/Bindings'
              }
              */
            ],
          },
        },
        requirejs: {
            compile: {
                options: compileOptions
            }
        },
    });

    // grunt bower_clean
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    
    // grunt bower_clean
    grunt.loadNpmTasks('grunt-bower-clean');
    
    // grunt concat
    grunt.loadNpmTasks('grunt-contrib-concat');
    
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Load require js builder
    grunt.loadNpmTasks('grunt-contrib-requirejs');

    grunt.registerTask('install', ['copy', 'concat']);

    // Default task(s).
    grunt.registerTask('default', ['requirejs']);

};