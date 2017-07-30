define([
    'quark',
    'knockout',
    'text!./behaviour.screen.html',
    'service!ModulesService'
], function($$, ko, template) {

    function LibraryBehaviourScreen(params, $scope, $imports, $context) {
        var self = this;

        var service = $context.get('ModulesService');

        $$.parameters({
            moduleName: ko.observable(),
            behaviourName: ko.observable()
        }, params, this);

        $scope.ajaxMessage = service.ajaxMessage;
        $scope.module = service.module;

        $scope.behaviour = ko.pureComputed(function() {
            if ($scope.module()) {
                var module = $scope.module();
                var name = self.behaviourName();

                if (module && module.behaviours) {
                    var behaviours = JSON.parse(module.behaviours);

                    if (behaviours[name]) {
                        var behaviour = behaviours[name];
                        return behaviour;
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
            var behaviour = $scope.behaviour();
            var result = new Array();

            if (behaviour && behaviour.properties) {
                for (var name in behaviour.properties) {
                    var property = behaviour.properties[name];

                    result.push(property);
                }
            }

            return result;
        });

        $scope.parameters = ko.pureComputed(function() {
            var behaviour = $scope.behaviour();
            var result = new Array();

            if (behaviour && behaviour.parameters) {
                for (var name in behaviour.parameters) {
                    var parameter = behaviour.parameters[name];

                    result.push(parameter);
                }
            }

            return result;
        });

        $scope.methods = ko.pureComputed(function() {
            var behaviour = $scope.behaviour();
            var result = new Array();

            if (behaviour && behaviour.methods) {
                for (var name in behaviour.methods) {
                    var method = behaviour.methods[name];

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

    return $$.component(LibraryBehaviourScreen, template);
});
