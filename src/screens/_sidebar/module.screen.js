define([
    'quark',
    'knockout',
    'text!./module.screen.html'
], function($$, ko, template) {

    function SidebarModuleScreen(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            ajaxMessage: ko.observable(),
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

    return $$.component(SidebarModuleScreen, template);
});
