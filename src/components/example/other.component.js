define([
    'quark',
    'knockout',
    'text!./other.component.html'
], function($$, ko, template) {

    function ExampleOtherComponent(params) {
        var self = this;

        this.nombre = ko.observable('Pedro');
    }

    return $$.component(ExampleOtherComponent, template);
});
