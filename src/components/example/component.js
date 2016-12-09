define(['quark', 'knockout', 'text!./component.html'], function($$, ko, template) {
    function ComponentExample(params) {
        var self = this;

        $$.parameters({
            obs: ko.observable('Hola'),
            str: 'Mundo',
            num: 2016
        }, params, this);
    }

    return $$.component(ComponentExample, template);
});
