define(['quark', 'knockout', 'text!./module.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;
    }, template);
});
