define(['quark', 'knockout', 'text!./scope.html'], function($$, ko, template) {
    function ScopeExample(params, $scope) {
        var self = this;

        $$.parameters({
            texto: ko.observable(''),
            largoMaximo: ko.observable(20)
        }, params, this);

        $scope.clase = ko.pureComputed(function() {
            var texto = self.texto();
            var max = self.largoMaximo();

            if ($$.isString(texto)) {
                if (texto.length > max) {
                    return "text-danger";
                }
            }

            return "";
        });
    }

    return $$.component(ScopeExample, template);
});
