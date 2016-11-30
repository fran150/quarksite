define(['quark', 'knockout', 'data/modules', 'text!./module.html'], function($$, ko, ModulesData, template) {
    function ModuleSidebar(params, $scope, $imports) {
        var self = this;

        var dataSource = new ModulesData();

        $$.parameters({
            moduleName: ko.observable(),
            dataSource: dataSource,
            components: ko.observableArray()
        }, params, this);

        $scope.ajaxMessage = ko.observable();

        $imports.initComponent = function() {
            debugger;
            self.dataSource.read(self.moduleName(), function(data) {
                if (data.components) {
                    self.components(data.components);
                }
            });
        }
    }

    return $$.component(ModuleSidebar, template);
});
