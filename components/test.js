define(['quark', 'knockout', 'text!./test.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;

        this.initComponent = function() {
            self.componentErrors.add('Error de prueba');
        }
    }, template);
});
