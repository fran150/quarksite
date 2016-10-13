define(['quark', 'knockout', 'text!./other.html'], function($$, ko, template) {
    function OtherExample(params) {
        var self = this;

        this.nombre = ko.observable('Pedro');
    }

    return $$.component(OtherExample, template);
});
