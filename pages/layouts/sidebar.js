define(['quark', 'knockout', 'text!./sidebar.html', 'text!./navbar.html'], function($$, ko, template, navbar) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;
    }, template);
});
