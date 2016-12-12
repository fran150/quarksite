
define('text!components/library/finder/form.component.html',[],function () { return '<quark-component>\n    <div class="row">\n        <div class="col-xs-12">\n            <form name="moduleSearch" data-bind="submit: model.search">\n                <div class="input-group">\n                    <input type="text" name="moduleName" class="form-control"\n                           placeholder="Find Modules..." data-bind="value: model.text" />\n\n                    <span class="input-group-btn">\n                        <button class="btn btn-primary" type="submit">\n                            &nbsp;\n                            <i class="glyphicon glyphicon-search"></i>\n                            &nbsp;\n                        </button>\n                    </span>\n                </div>\n            </form>\n        </div>\n    </div>\n</quark-component>\n';});

define('components/library/finder/form.component',[
    'quark',
    'knockout',
    'text!./form.component.html'
], function($$, ko, template) {

    function LibraryFinderFormComponent(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            text: ko.observable(),
            onSearch: function(text) { }
        }, params, this);

        this.search = function() {
            $$.call(self.onSearch, self.text());
        }

    }

    return $$.component(LibraryFinderFormComponent, template);
});

define('text!components/library/finder/results.component.html',[],function () { return '<quark-component>\n    <!-- ko if: model.ajaxMessage -->\n        <h3 class="text-center" data-bind="text: model.ajaxMessage">\n        </h3>\n    <!-- /ko -->\n\n    <!-- ko foreach: model.data -->\n        <div class="row">\n            <div class="col-xs-12">\n                <h2>\n                    <a href="#" data-bind="text: name,\n                                           href: $parent.model.pageName,\n                                           params: { id: bowerId } ">\n                    </a>\n                    <small data-bind="name: author"></small>\n                </h2>\n                <p data-bind="text: description"></p>\n                <p>\n                    <small>\n                        <em>\n                            Version\n                            <span data-bind="text: version"></span>\n                        </em>\n                    </small>\n                </p>\n                <p data-bind="foreach: tags">\n                    <span class="label label-default" data-bind="text: $data">\n                    </span>\n                </p>\n            </div>\n        </div>\n        <hr />\n    <!-- /ko -->\n</quark-component>\n';});

define('components/library/finder/results.component',[
    'quark',
    'knockout',
    'text!./results.component.html'
], function($$, ko, template) {

    function LibraryFinderResultsComponent(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            data: ko.observableArray(),
            pageName: ko.observable(),
            ajaxMessage: ko.observable()
        }, params, this);
    }

    return $$.component(LibraryFinderResultsComponent, template);
});

define('text!screens/library/finder.screen.html',[],function () { return '<quark-component>\r\n    <h1>Search for Quark Modules</h1>\r\n\r\n    <library-finder-form params="text: model.text,\r\n                                 onSearch: model.onSearch">\n    </library-finder-form>\r\n\r\n    <library-finder-results params="ajaxMessage: model.ajaxMessage,\r\n                                    pageName: \'main/library/modules/module\',\r\n                                    data: model.data">\r\n    </library-finder-results>\r\n</quark-component>\r\n';});

define('screens/library/finder.screen',[
    'quark',
    'knockout',
    'text!./finder.screen.html'
], function($$, ko, template) {

    function LibraryFinderScreen(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            text: ko.observable(),
            onSearch: function(text) { },
            ajaxMessage: ko.observable(),
            data: ko.observableArray()
        }, params, this);
    }

    return $$.component(LibraryFinderScreen, template);
});

define('text!screens/library/module.screen.html',[],function () { return '<quark-component>\r\n    <!-- ko with: model.module -->\r\n        <h1>\r\n            <span data-bind="text: name"></span>\r\n        </h1>\r\n        <hr/>\r\n        <span data-bind="text: description"></span>\r\n        <div class="col-sm-4 well pull-right">\r\n            <small>\r\n                <p>\r\n                    <strong>Version:</strong>\r\n                    <span data-bind="text: version"></span>\r\n                </p>\r\n                <p>\r\n                    <strong>Prefix:</strong>\r\n                    <span data-bind="text: prefix"></span>\r\n                </p>\r\n                <p>\r\n                    <strong>Author:</strong>\r\n                    <span data-bind="text: author"></span>\r\n                </p>\r\n                <p>\r\n                    <strong>Tags:</strong>\r\n                    <!-- ko foreach: tags -->\r\n                        <span class="label label-primary" data-bind="text: $data"></span>\r\n                    <!-- /ko -->\r\n                </p>\r\n            </small>\r\n        </div>\r\n    <!-- /ko -->\r\n</quark-component>\r\n';});

define('screens/library/module.screen',[
    'quark',
    'knockout',
    'text!./module.screen.html'
], function($$, ko, template) {

    function LibraryModuleScreen(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            module: ko.observable()
        }, params, this);

        $scope.componentNames = ko.pureComputed(function() {
            var module = self.module();
            var result = new Array();

            if (module && module.components) {
                for (var name in module.components) {
                    result.push(name);
                }
            }

            return result;
        });
    }

    return $$.component(LibraryModuleScreen, template);
});

define('text!screens/library/component.screen.html',[],function () { return '<quark-component>\r\n    <div class="docs">\r\n        <small class="pull-right" data-bind="with: model.module">\r\n            <strong>Módulo:</strong>\r\n            <span data-bind="text: name"></span>\r\n            <br/>\r\n            <strong>Versión:</strong>\r\n            <span data-bind="text: version"></span>\r\n            <br/>\r\n            <strong>Prefijo:</strong>\r\n            <span data-bind="text: prefix"></span>\r\n        </small>\r\n\r\n        <h1 data-bind="text: model.componentName"></h1>\r\n        <hr />\r\n\r\n        <!-- ko if: model.component -->\r\n            <!-- ko if: model.component().allowContent -->\r\n                <div class="label label-primary pull-right">\r\n                    Admite Contenido\r\n                </div>\r\n            <!-- /ko -->\r\n\r\n            <p data-bind="text: model.component().description">\r\n            </p>\r\n        <!-- /ko -->\r\n\r\n        <!-- ko if: model.properties().length > 0 -->\r\n            <h2>Propiedades</h2>\r\n            <hr/>\r\n            <table class="table table-condensed table-striped table-bordered">\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            Nombre\r\n                        </th>\r\n                        <th>\r\n                            Tipo\r\n                        </th>\r\n                        <th>\r\n                            Observable\r\n                        </th>\r\n                        <th>\r\n                            Descripción\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody data-bind="foreach: model.properties">\r\n                    <tr>\r\n                        <td>\r\n                            <code data-bind="text: name"></code>\r\n                        </td>\r\n                        <td>\r\n                            <em data-bind="text: type"></em>\r\n                        </td>\r\n                        <td>\r\n                            <!-- ko if: observable -->\r\n                            Si\r\n                            <!-- /ko -->\r\n                            <!-- ko ifnot: observable -->\r\n                            No\r\n                            <!-- /ko -->\r\n                        </td>\r\n                        <td data-bind="text: description"></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        <!-- /ko -->\r\n\r\n        <!-- ko if: model.parameters().length > 0 -->\r\n            <h2>Parámetros</h2>\r\n            <hr/>\r\n            <table class="table table-condensed table-striped table-bordered">\r\n                <thead>\r\n                    <tr>\r\n                        <th>\r\n                            Nombre\r\n                        </th>\r\n                        <th>\r\n                            Tipo\r\n                        </th>\r\n                        <th>\r\n                            Observable\r\n                        </th>\r\n                        <th>\r\n                            Descripción\r\n                        </th>\r\n                    </tr>\r\n                </thead>\r\n                <tbody data-bind="foreach: model.parameters">\r\n                    <tr>\r\n                        <td>\r\n                            <code data-bind="text: name"></code>\r\n                        </td>\r\n                        <td>\r\n                            <em data-bind="text: type"></em>\r\n                        </td>\r\n                        <td>\r\n                            <!-- ko if: observable -->\r\n                            Si\r\n                            <!-- /ko -->\r\n                            <!-- ko ifnot: observable -->\r\n                            No\r\n                            <!-- /ko -->\r\n                        </td>\r\n                        <td data-bind="text: description"></td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        <!-- /ko -->\r\n\r\n        <!-- ko if: model.methods().length > 0 -->\r\n            <h2>Métodos</h2>\r\n            <hr/>\r\n\r\n            <div data-bind="foreach: model.methods">\r\n                <div class="panel panel-default">\r\n                    <div class="panel-body">\r\n                    <code class="lead" data-bind="text: signature"></code>\r\n\r\n                    <h3>Descripción</h3>\r\n                    <p data-bind="text: description">\r\n                    </p>\r\n\r\n                    <!-- ko if: parameters.length > 0 -->\r\n                        <h3>Parámetros</h3>\r\n                        <table class="table table-condensed table-striped table-bordered">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>\r\n                                        Nombre\r\n                                    </th>\r\n                                    <th>\r\n                                        Tipo\r\n                                    </th>\r\n                                    <th>\r\n                                        Descripción\r\n                                    </th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody data-bind="foreach: parameters">\r\n                                <tr>\r\n                                    <td>\r\n                                        <code data-bind="text: name"></code>\r\n                                    </td>\r\n                                    <td>\r\n                                        <em data-bind="text: type"></em>\r\n                                    </td>\r\n                                    <td data-bind="text: description"></td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    <!-- /ko -->\r\n\r\n\r\n                    <h3>Devuelve</h3>\r\n                    <small>\r\n                        <strong>Tipo</strong>: <code data-bind="text: returns.type"></code>\r\n                    </small>\r\n                    <br/>\r\n                    <p data-bind="text: returns.description"></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        <!-- /ko -->\r\n    </div>\r\n</quark-component>\r\n';});

define('screens/library/component.screen',[
    'quark',
    'knockout',
    'text!./component.screen.html'
], function($$, ko, template) {

    function LibraryComponentScreen(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            module: ko.observable(),
            componentName: ko.observable()
        }, params, this);

        this.component = ko.pureComputed(function() {
            var module = self.module();
            var components;
            var component;

            if (module) {
                components = module.components;

                if (components) {
                    component = components[self.componentName()];
                }
            }

            return component;
        });

        this.properties = ko.pureComputed(function() {
            var component = self.component();
            var result = new Array();

            if (component && component.properties) {
                for (var name in component.properties) {
                    var property = component.properties[name];

                    result.push({
                        name: name,
                        type: property.type,
                        observable: property.observable,
                        description: property.description
                    });
                }
            }

            return result;
        });

        this.parameters = ko.pureComputed(function() {
            var component = self.component();
            var result = new Array();

            if (component && component.parameters) {
                for (var name in component.parameters) {
                    var parameter = component.parameters[name];

                    result.push({
                        name: name,
                        type: parameter.type,
                        observable: parameter.observable,
                        description: parameter.description
                    });
                }
            }

            return result;
        });

        this.methods = ko.pureComputed(function() {
            var component = self.component();
            var result = new Array();

            if (component && component.methods) {
                for (var name in component.methods) {
                    var method = component.methods[name];

                    var methodData = {
                        name: name,
                        signature: method.signature,
                        description: method.description
                    };

                    if (method.parameters) {
                        methodData.parameters = new Array();

                        for (var name in method.parameters) {
                            var parameter = method.parameters[name];

                            methodData.parameters.push({
                                name: name,
                                type: parameter.type,
                                description: parameter.description
                            });
                        }
                    }

                    if (method.returns) {
                        methodData.returns = {
                            type: method.returns.type,
                            description: method.returns.description
                        }
                    }

                    result.push(methodData);
                }
            }

            return result;
        });
    }

    return $$.component(LibraryComponentScreen, template);
});

define('controllers/main/library.controller',[
    'quark',
    'knockout'
], function($$, ko) {

    function MainLibraryController() {
        var self = this;
    }

    return MainLibraryController;
});

define('config/services.config',[

], function() {

    var server = {
        api: 'http://localhost:2403'
    }

    return {
        urls: {
            api: {
                modules: server.api + '/modules',
                components: server.api + '/components'
            }
        }
    }
});

define('services/modules.service',[
    'quark',
    'knockout',
    'config/services.config'
], function($$, ko, config) {

    function ModulesService() {
        var self = this;

        this.ajaxMessage = ko.observable();

        this.search = function(search, callback) {
            self.ajaxMessage('Searching...');

            var filter = {
                "name": { "$regex": "[" + search + "]" }
            }

            $$.ajax(config.urls.api.modules, 'GET', JSON.stringify(filter), {
                onSuccess: function(data) {
                    callback(data);
                },
                onComplete: function() {
                    self.ajaxMessage('');
                }
            }, false, { cache: true });
        }

        this.read = function(bowerId, callback) {
            self.ajaxMessage('Loading...');

            var query = config.urls.api.modules + "?bowerId=" + bowerId;

            $$.ajax(query, 'GET', {}, {
                onSuccess: function(data) {
                    if ($$.isArray(data)) {
                        callback(data[0]);
                    } else {
                        callback();
                    }
                },
                onComplete: function() {
                    self.ajaxMessage('');
                }
            }, false, { cache: true });
        }


        this.list = function(callback) {
            self.ajaxMessage('Loading...');

            $$.ajax(config.urls.api.modules, 'GET', {}, {
                onSuccess: function(data) {
                    callback(data);
                },
                onComplete: function() {
                    self.ajaxMessage('');
                }
            });
        }
    }

    return ModulesService;
});

define('controllers/main/library/finder.controller',[
    'quark',
    'knockout',
    'services/modules.service'
], function($$, ko, ModulesService) {

    function MainLibraryFinderController() {
        var self = this;

        this.dataSource = new ModulesService();

        this.data = ko.observable();

        this.search = function(text) {
            if ($$.isDefined(self.dataSource)) {
                self.dataSource.search(text, function(data) {
                    self.data(data);
                });
            }
        }

        this.sendParameters = function(name) {
            switch(name) {
                case "main":
                    return {
                        onSearch: self.search,
                        ajaxMessage: self.dataSource.searchMessage,
                        data: self.data
                    }
            }
        }
    }

    return MainLibraryFinderController;
})
;
define('controllers/main/library/modules.controller',[
    'quark',
    'knockout',
    'services/modules.service'
], function($$, ko, ModulesService) {

    function MainLibraryModulesController() {
        var self = this;

        var dataSource = new ModulesService();

        this.ajaxMessage = ko.observable();
        this.module = ko.observable();

        var subscriptions;

        function read(moduleId) {
            dataSource.read(moduleId, function(data) {
                self.module(data);
            })
        }

        this.init = function() {
            read(self.params.id());

            subscriptions = {
                moduleId: self.params.id.subscribe(read)
            }
        }

        this.sendParameters = function(name) {
            switch (name) {
                case "sidebar":
                    return {
                        module: self.module,
                        ajaxMessage: dataSource.ajaxMessage
                    }
                    break;
            }
        }

        this.dispose = function() {
            subscriptions.moduleId.dispose();
        }
    }

    return MainLibraryModulesController;
})
;
define('controllers/main/library/modules/component.controller',[
    'quark',
    'knockout'
], function($$, ko) {

    function MainLibraryModulesComponentController() {
        var self = this;

        this.sendParameters = function(name) {
            switch (name) {
                case "main":
                    return {
                        module: self.parent.module,
                        componentName: self.params.component
                    }
                    break;
            }
        }
    }

    return MainLibraryModulesComponentController;
})
;
define('controllers/main/library/modules/module.controller',[
    'quark',
    'knockout'
], function($$, ko) {

    function MainLibraryModulesModuleController() {
        var self = this;

        this.sendParameters = function(name) {
            switch (name) {
                case "main":
                    return {
                        module: self.parent.module
                    }
                    break;
            }
        }
    }

    return MainLibraryModulesModuleController;
})
;
