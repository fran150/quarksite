define([
    'quark',
    'knockout',
    'text!./formatter.screen.html',
    'service!ModulesService'
], function($$, ko, template) {

    function LibraryFormatterScreen(params, $scope, $imports, $context) {
        var self = this;

        var service = $context.get('ModulesService');

        $$.parameters({
            moduleName: ko.observable(),
            formatterName: ko.observable()
        }, params, this);

        $scope.ajaxMessage = service.ajaxMessage;
        $scope.module = service.module;

        $scope.formatter = ko.pureComputed(function() {
            if ($scope.module()) {
                var module = $scope.module();
                var name = self.formatterName();

                if (module && module.formatters) {
                    var formatters = JSON.parse(module.formatters);

                    if (formatters[name]) {
                        var formatter = formatters[name];
                        return formatter;
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
            var formatter = $scope.formatter();
            var result = new Array();

            if (formatter && formatter.properties) {
                for (var name in formatter.properties) {
                    var property = formatter.properties[name];

                    result.push(property);
                }
            }

            return result;
        });

        $scope.parameters = ko.pureComputed(function() {
            var formatter = $scope.formatter();
            var result = new Array();

            if (formatter && formatter.parameters) {
                for (var name in formatter.parameters) {
                    var parameter = formatter.parameters[name];

                    result.push(parameter);
                }
            }

            return result;
        });

        $scope.methods = ko.pureComputed(function() {
            var formatter = $scope.formatter();
            var result = new Array();

            if (formatter && formatter.methods) {
                for (var name in formatter.methods) {
                    var method = formatter.methods[name];

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

    return $$.component(LibraryFormatterScreen, template);
});
