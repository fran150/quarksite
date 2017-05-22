define([
    'quark', 
    'knockout', 
    'text!./module.screen.html',
    'service!ModulesService'
], function($$, ko, template) {
    
    function LibraryModuleScreen(params, $scope, $imports, $context) {
        var self = this;

        var service = $context.get('ModulesService');

        $$.parameters({
            name: ko.observable()
        }, params, this);

        $scope.ajaxMessage = service.ajaxMessage;
        $scope.module = service.module;

        $scope.componentNames = ko.pureComputed(function() {
            var module = $scope.module();
            var result = new Array();

            if (module && module.components) {
                for (var name in module.components) {
                    result.push(name);
                }
            }

            return result;
        });

        $imports.initComponent = function() {
            if (!$scope.module() && !$scope.ajaxMessage()) {
                service.read(self.name());
            }
        }

        var subscriptions = {
            name: self.name.subscribe(function(newValue) {
                service.read(newValue);
            })
        }

        $scope.dispose = function() {
            subscriptions.name.dispose();
        }
    }

    return $$.component(LibraryModuleScreen, template);
});
