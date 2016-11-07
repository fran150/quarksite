define(['knockout', 'quark', 'text!./validation.html'], function(ko, $$, template) {
    function ValidationExample(params, $scope, $imports) {
        var self = this;

        this.item = {
            codigo: ko.observable().validation('Código', {
                required: {}
            }),
            nombre: ko.observable().validation('Nombre Completo', {
                required: {}
            }),
            descripcion: ko.observable().validation('Descripción', {
                required: { message: 'Debe especificar una descripción' }
            })
        };

        this.save = function() {
            if (ko.validate(self.item, true)) {
                alert('Saved');
            };
        }

        this.reset = function() {
            ko.validationReset(self.item);
        }

        this.dispose = function() {
            ko.unsubscribeValidation(self.item);
        }
    }

    return $$.component(ValidationExample, template);
});
