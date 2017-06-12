define([
    'quark', 
    'knockout', 
    'text!./component.screen.html',
    'service!ModulesService'
], function($$, ko, template) {
    
    function LibraryComponentScreen(params, $scope, $imports, $context) {
        var self = this;

        var service = $context.get('ModulesService');

        $$.parameters({
            moduleName: ko.observable(),
            componentName: ko.observable()
        }, params, this);

        $scope.ajaxMessage = service.ajaxMessage;
        $scope.module = service.module;

        $scope.component = ko.pureComputed(function() {
            if ($scope.module()) {
                var module = $scope.module();
                var name = self.componentName();

                if (module && module.components) {
                    var components = JSON.parse(module.components);

                    if (components[name]) {
                        var component = components[name];
                        return component;
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
            var component = $scope.component();
            var result = new Array();

            if (component && component.properties) {
                for (var name in component.properties) {
                    var property = component.properties[name];

                    result.push(property);
                }
            }

            return result;
        });

        $scope.parameters = ko.pureComputed(function() {
            var component = $scope.component();
            var result = new Array();

            if (component && component.parameters) {
                for (var name in component.parameters) {
                    var parameter = component.parameters[name];

                    result.push(parameter);
                }
            }

            return result;
        });

        $scope.methods = ko.pureComputed(function() {
            var component = $scope.component();
            var result = new Array();

            if (component && component.methods) {
                for (var name in component.methods) {
                    var method = component.methods[name];

                    result.push(method);
                }
            }

            return result;
        });
    }

    return $$.component(LibraryComponentScreen, template);
});
