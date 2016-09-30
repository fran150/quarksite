define(['quark', 'knockout', 'text!./sidebar.html', 'text!./navbar.html'], function($$, ko, template, navbarHTML) {
    function LayoutSidebarPage(params, $scope, $imports) {
        var self = this;

        $scope.navbarHtml = ko.observable(navbarHTML);
    }

    return $$.component(LayoutSidebarPage, template);
});
