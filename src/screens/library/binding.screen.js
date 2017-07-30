define([
    'quark',
    'knockout',
    'text!./binding.screen.html',
    'service!ModulesService'
], function($$, ko, template) {

    function LibraryBindingScreen(params, $scope, $imports, $context) {
        var self = this;

        var service = $context.get('ModulesService');

        $$.parameters({
            moduleName: ko.observable(),
            bindingName: ko.observable()
        }, params, this);

        $scope.ajaxMessage = service.ajaxMessage;
        $scope.module = service.module;

        $scope.binding = ko.pureComputed(function() {
            if ($scope.module()) {
                var module = $scope.module();
                var name = self.bindingName();

                if (module && module.bindings) {
                    var bindings = JSON.parse(module.bindings);

                    if (bindings[name]) {
                        var binding = bindings[name];
                        return binding;
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
            var binding = $scope.binding();
            var result = new Array();

            if (binding && binding.properties) {
                for (var name in binding.properties) {
                    var property = binding.properties[name];

                    result.push(property);
                }
            }

            return result;
        });

        $scope.parameters = ko.pureComputed(function() {
            var binding = $scope.binding();
            var result = new Array();

            if (binding && binding.parameters) {
                for (var name in binding.parameters) {
                    var parameter = binding.parameters[name];

                    result.push(parameter);
                }
            }

            return result;
        });

        $scope.methods = ko.pureComputed(function() {
            var binding = $scope.binding();
            var result = new Array();

            if (binding && binding.methods) {
                for (var name in binding.methods) {
                    var method = binding.methods[name];

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

    return $$.component(LibraryBindingScreen, template);
});
