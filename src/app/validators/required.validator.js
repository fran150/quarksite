define([
    'quark',
    'knockout'
], function($$, ko) {

    // Check if the fields has value
    ko.validators.required = function (observable, config) {
        var self = this;

        // Validate
        this.validate = function (newValue) {
            observable.validationReset();

            // If it's "falsy" then generate the error
            if (!newValue) {
                observable.hasError(true);
                observable.validationMessage((config['message'] || 'El campo {0} es obligatorio').replace('{0}', observable.validatable));

                return false;
            }

            return true;
        };

        return this;
    }
});
