define([
    'quark',
    'knockout',
    'text!./module.screen.html',
    'service!ModulesService'
], function($$, ko, template) {

    function SidebarModuleScreen(params, $scope, $imports, $context) {
        var self = this;

        var service = $context.get('ModulesService');

        $$.parameters({
            name: ko.observable()
        }, params, this);

        $scope.ajaxMessage = service.ajaxMessage;
        $scope.module = service.module;

        $imports.initComponent = function() {
            if (!$scope.module() && !$scope.ajaxMessage()) {
                service.read(self.name());
            }
        }

        $scope.componentsNames = ko.pureComputed(function() {
            var module = $scope.module();
            var result = new Array();

            if (module && module.components) {
                var components = JSON.parse(module.components);

                for (var name in components) {
                    result.push(name);
                }
            }

            return result;
        });

        $scope.behavioursNames = ko.pureComputed(function() {
            var module = $scope.module();
            var result = new Array();

            if (module && module.behaviours) {
                var behaviours = JSON.parse(module.behaviours);

                for (var name in behaviours) {
                    if (name != "dependencies") {
                        result.push(name);
                    }
                }
            }

            return result;
        });

        $scope.bindingsNames = ko.pureComputed(function() {
            var module = $scope.module();
            var result = new Array();

            if (module && module.bindings) {
                var bindings = JSON.parse(module.bindings);

                for (var name in bindings) {
                    if (name != "dependencies") {
                        result.push(name);
                    }
                }
            }

            return result;
        });

        $scope.servicesNames = ko.pureComputed(function() {
            var module = $scope.module();
            var result = new Array();

            if (module && module.services) {
                var services = JSON.parse(module.services);

                for (var name in services) {
                    result.push(name);
                }
            }

            return result;
        });

        $scope.formattersNames = ko.pureComputed(function() {
            var module = $scope.module();
            var result = new Array();

            if (module && module.formatters) {
                var formatters = JSON.parse(module.formatters);

                for (var name in formatters) {
                    if (name != "dependencies") {
                        result.push(name);
                    }
                }
            }

            return result;
        });

        var subscriptions = {
            name: self.name.subscribe(function(newValue) {
                service.read(newValue);
            })
        }

        $scope.dispose = function() {
            subscriptions.name.dispose();
        }
    }

    return $$.component(SidebarModuleScreen, template);
});
