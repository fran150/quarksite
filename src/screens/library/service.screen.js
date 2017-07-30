define([
    'quark',
    'knockout',
    'text!./service.screen.html',
    'service!ModulesService'
], function($$, ko, template) {

    function LibraryServiceScreen(params, $scope, $imports, $context) {
        var self = this;

        var service = $context.get('ModulesService');

        $$.parameters({
            moduleName: ko.observable(),
            serviceName: ko.observable()
        }, params, this);

        $scope.ajaxMessage = service.ajaxMessage;
        $scope.module = service.module;

        $scope.service = ko.pureComputed(function() {
            if ($scope.module()) {
                var module = $scope.module();
                var name = self.serviceName();

                if (module && module.services) {
                    var services = JSON.parse(module.services);

                    if (services[name]) {
                        var service = services[name];
                        return service;
                    }
                }
            }
        });

        $imports.initComponent = function() {
            if (!$scope.module() && !$scope.ajaxMessage()) {
                service.read(self.moduleName());
            }
        }

        $scope.properties = ko.pureComputed(function() {
            var service = $scope.service();
            var result = new Array();

            if (service && service.properties) {
                for (var name in service.properties) {
                    var property = service.properties[name];

                    result.push(property);
                }
            }

            return result;
        });

        $scope.parameters = ko.pureComputed(function() {
            var service = $scope.service();
            var result = new Array();

            if (service && service.parameters) {
                for (var name in service.parameters) {
                    var parameter = service.parameters[name];

                    result.push(parameter);
                }
            }

            return result;
        });

        $scope.methods = ko.pureComputed(function() {
            var service = $scope.service();
            var result = new Array();

            if (service && service.methods) {
                for (var name in service.methods) {
                    var method = service.methods[name];

                    if (method.params) {
                        for (var name in method.params) {
                            var param = method.params[name];

                            if (!method.parameters) {
                                method.parameters = new Array();
                            }

                            method.parameters.push(param);
                        }
                    }

                    result.push(method);
                }
            }

            return result;
        });
    }

    return $$.component(LibraryServiceScreen, template);
});
