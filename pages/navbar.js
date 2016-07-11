define(['quark', 'knockout', 'text!./navbar.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;
    }, template);
});
