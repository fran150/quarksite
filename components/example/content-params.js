define(['quark', 'knockout', 'text!./content-params.html'], function($$, ko, template) {
    function ExampleContentParams(params) {
        var self = this;
    }

    return $$.component(ExampleContentParams, template);
});
