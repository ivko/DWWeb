require('mootools')
var fs = require('fs'),
    file = require('file'),
    path = require('path');

var DependenciesScanner = new Class({
    Hierarchy: {},
    Files: [],
    shim: {},
    _timeotId: null,
    basePath: 'bower_components/SharedResources/Components',
    mappings: {
        "mootools": [/new Class/],
        "jquery": [/jQuery/, /\b\$\(/],
        "knockout": [/(\bko\.)/],
        "timeentry": [/\.timeEntry/],
        "datetimeentry": [/\.datetimeEntry/],
        "globalize": [/\bGlobalize/],
        "dw/widgets/AutocompleteVM": [/\bAutocomplete/],
        "dw/utils": [/\bDW\.Utils/],
        "dw/core": [/\b(ns|namespace)\(/],
        "dw/core/ViewModel": [/\b(DW\.)?ViewModel/],
        "dw/core/Command": [/\b(DW\.)?Command/],
        "dw/core/Disposable": [/\b(DW\.)?Disposable/],
        "ko.jqui.bindingFactory": [/jqui\.bindingFactory/],
        "dw/core/Bindings": [/\bko\.bindingHandlers\./],
    },
    directories: [
        'SharedResources/Components',
        //'lib/QueryBuilder',
        //'app'
    ],
    initialize: function () {
        
        this.fileList = fs.readFileSync(path.join(__dirname, 'SharedResources.list.txt')).toString().split("\r\n");
        
        this.directories.forEach(function(directory) {

            file.walkSync(path.join(this.basePath, directory), function(dirPath, dirs, files) {
                files
                    .filter(function(file) {
                        var cfile = path.relative(this.basePath, path.join(dirPath, file)).split(path.sep).join('/');
                        return this.fileList.indexOf(cfile) > -1;
                    }.bind(this))
                    .forEach(function(file) {
                        var moduleId = path.relative(this.basePath, path.join(dirPath, file));
                        //var moduleId = path.normalize(file);
                        //var moduleId = path.join(dirPath, file);
                        //console.log(moduleId);
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
        
        var moduleId = path.relative(this.basePath, file).split(path.sep).join('/');
        
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
        this.writeFile(path.join(__dirname, 'Hierarchy.json'), JSON.stringify(this.Hierarchy, null, 4));
        this.writeFile(path.join(__dirname, 'Shim.json'), JSON.stringify(this.shim, null, 4));
        this.writeFile(path.join(__dirname, 'Files.txt'), this.Files.join('\n'));
    }
});

new DependenciesScanner();