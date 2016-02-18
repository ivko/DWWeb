({
    appDir: '../Scripts',
    baseUrl: './',
    mainConfigFile: '../Scripts/config.js',
    dir: '../Release',
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
})