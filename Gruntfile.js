module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            bower: {
                /*files: {
                    'lib/jquery.calendars.bundle.js': [
                        'lib/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.js',
                        'lib/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker.js',
                        'lib/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker.ext.js',
                        'lib/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.picker-*.js',
                        'lib/SharedResources/Components/Widgets/DateTime/calendars/js/jquery.calendars.*.js'
                    ],
                    'lib/globalize.bundle.js': [
                        'lib/SharedResources/Components/Globalize/globalize.js',
                        'lib/SharedResources/Components/Globalize/globalize.culture-*.js'
                    ]
                },*/
            },
        },
        copy: {
          main: {
            files: [
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
                options: {
                    appDir: 'Scripts',
                    baseUrl: './',
                    mainConfigFile: 'Scripts/config.js',
                    dir: 'Release',
                    optimize: "none",
                    skipDirOptimize: true,
                    optimizeCss: "none",
                    findNestedDependencies: true,
                    wrapShim: true,
                    fileExclusionRegExp: /^(\.|node_modules)$/,
                    modules: [
                        {
                            name: 'dw/core'
                        },
                        {
                            name: 'dw/main'
                        }
                    ]
                }
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

    // Default task(s).
    grunt.registerTask('default', ['requirejs']);

};