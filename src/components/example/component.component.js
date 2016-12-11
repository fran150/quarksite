define([
    'quark',
    'knockout',
    'text!./component.component.html'
], function($$, ko, template) {

    function ExampleComponentComponent(params) {
        var self = this;

        $$.parameters({
            obs: ko.observable('Hola'),
            str: 'Mundo',
            num: 2016
        }, params, this);
    }

    return $$.component(ExampleComponentComponent, template);
});
