define(['quark', 'knockout', 'text!./other.html'], function($$, ko, template) {
    function OtherExample(params) {
        var self = this;

        this.nombre = ko.observable('Juan');
    }

    return $$.component(OtherExample, template);
});
