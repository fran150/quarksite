define(['quark', 'knockout', 'text!./single.html', 'text!./navbar.html'], function($$, ko, template, navbarHTML) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;

        $scope.navbarHtml = ko.observable(navbarHTML);
    }, template);
});
