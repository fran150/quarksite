define(['quark', 'knockout', 'text!./test.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;

        $imports.initComponent = function() {
            debugger;
            var test = $$.routing.link("route:/#main/components/library/module|{ bowerId: 'test' }");
            self.componentErrors.add('Error de prueba');

        }
    }, template);
});
