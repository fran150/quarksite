define(['quark', 'knockout', 'text!./module.html'], function($$, ko, template) {
    function LibraryModulePage(params, $scope, $imports) {
        var self = this;

        $imports.ready = function() {
            $imports.modal.show();
        }

        $scope.show = function() {
            $imports.modal.show();
        }
    }

    return $$.component(LibraryModulePage, template);
});
