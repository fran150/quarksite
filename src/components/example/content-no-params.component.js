define([
    'quark',
    'knockout',
    'text!./content-no-params.component.html'
], function($$, ko, template) {

    function ExampleContentNoParamsComponent(params) {
        var self = this;
    }

    return $$.component(ExampleContentNoParamsComponent, template);
});
