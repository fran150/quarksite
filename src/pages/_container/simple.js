define(['quark', 'knockout', 'text!./simple.html'], function($$, ko, template) {
    function SimpleContainer(params, $scope, $imports) {
        var self = this;
    }

    return $$.component(SimpleContainer, template);
});
