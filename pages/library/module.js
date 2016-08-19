define(['quark', 'knockout', 'text!./module.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;

        $imports.ready = function() {
            $imports.modal.show();
        }

        $scope.show = function() {
            $imports.modal.show();
        }
    }, template);
});
