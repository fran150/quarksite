define(['quark', 'knockout', 'text!./content-no-params.html'], function($$, ko, template) {
    function ExampleContentNoParams(params) {
        var self = this;
    }

    return $$.component(ExampleContentNoParams, template);
});
