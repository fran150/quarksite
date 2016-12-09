define(['quark', 'knockout', 'text!./module.html'], function($$, ko, template) {
    function LibraryModulePage(params, $scope, $imports) {
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

    return $$.component(LibraryModulePage, template);
});
