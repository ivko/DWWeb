require('mootools')
var fs = require('fs'),
    file = require('file'),
    path = require('path');

var DependenciesScanner = new Class({
    Hierarchy: {},
    Files: [],
    shim: {},
    _timeotId: null,
    mappings: {
        "mootools": [/new Class/g],
        "jquery": [/jQuery/g, /$\(/],
        "knockout": [/([\S]ko\.)/g],
        //"timeentry": [/\.timeEntry/g],
        //"datetimeentry": [/\.datetimeEntry/g],
        //"globalize": [/[.*]Globalize/g],
        "dw/viewModel/command": [/DW\.Command/],
        "dw/viewModel/disposable": [/DW\.Disposable/],
        "dw/utils": [/DW\.Utils/],
        "dw/core": [/[\s](ns|namespace)\(/],
        "dw/widgets/autocomplete": [/Autocomplete/g],
        "dw/widgets/queryBuilder": [/QueryBuilder\./],
        "dw/bindings": [/ko\.bindingHandlers\./]
    },
    directories: [
        'lib/SharedResources',
        //'lib/QueryBuilder',
        //'app'
    ],
    initialize: function () {
        this.directories.forEach(function(directory) {

            file.walkSync(directory, function(dirPath, dirs, files) {
                files
                    .filter(function(file) {
                        return file.substr(-3) === '.js';
                    })
                    .forEach(function(file) {
                        var moduleId = path.relative('lib/', path.join(dirPath, file));
                        //var moduleId = path.normalize(file);
                        moduleId = moduleId.split(path.sep).join('/');
                        this.Files.push(moduleId);
                        var fullPath = path.join(dirPath , file);
                        fs.readFile(fullPath, 'utf-8', function(err, contents) {
                            this.inspectFile(fullPath, contents);
                        }.bind(this));
                    }.bind(this));
            }.bind(this));
        }.bind(this));
    },
    writeFile: function(path, data) {
        fs.writeFile(path, data, function(err) {
            if (err) {
                console.log(err);
            } else {
                console.log("File saved to " + path);
            }
        });
    },
    getItemName: function (item) {
        if (typeof item == 'string') {
            return item;
        } else {
            return item.name;
        }
    },
    addShimItem: function (item, parentItem) {
        var name = this.getItemName(item);
        if (!this.shim[name]) {
            this.shim[name] = [];
        }
        this.shim[name].push(this.getItemName(parentItem));
    },
    processItems: function (items, parentItem) {
        if (items.length) {
            for (var i = 0; i < items.length; i++) {
                this.addShimItem(items[i], parentItem);
            }
        }
    },

    inspectFile: function (file, contents) {
        var moduleId = path.relative('lib/', file);
        moduleId = moduleId.split(path.sep).join('/');
                        
        clearTimeout(this._timeotId);
        var regs = [];
        for( var name in this.mappings ) {
            if (!this.Hierarchy[name]) {
                this.Hierarchy[name] = [];
            }
            regs = this.mappings[name];
            for (var i = 0; i < regs.length; i++) {
                regs[i].lastIndex = 0;
                if (regs[i].test(contents)) {
                    if (this.Hierarchy[name].indexOf(moduleId) == -1) {
                        this.Hierarchy[name].push(moduleId);
                    }
                }
            }
        }
        this._timeotId = setTimeout(this._scan.bind(this), 100);
    },
    _scan: function() {
        for (var name in this.Hierarchy) {
            this.processItems(this.Hierarchy[name], name);
        }
        this.writeFile('Hierarchy.json', JSON.stringify(this.Hierarchy, null, 4));
        this.writeFile('Shim.json', JSON.stringify(this.shim, null, 4));
        this.writeFile('Files.txt', this.Files.join('\n'));
    }
});

new DependenciesScanner();