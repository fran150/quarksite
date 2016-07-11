define(['quark', 'knockout', 'text!./single.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;
    }, template);
});
