define([
    'quark',
    'knockout',
    'text!./content-params.component.html'
], function($$, ko, template) {

    function ExampleContentParamsComponent(params) {
        var self = this;
    }

    return $$.component(ExampleContentParamsComponent, template);
});
