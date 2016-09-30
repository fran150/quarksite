define(['quark', 'knockout', 'text!./docs.html', 'text!./navbar.html'], function($$, ko, template, navbarHTML) {
    function LayoutDocsPage(params, $scope, $imports) {
        var self = this;

        $scope.navbarHtml = ko.observable(navbarHTML);
    }

    return $$.component(LayoutDocsPage, template);
});
