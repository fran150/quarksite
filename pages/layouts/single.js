define(['quark', 'knockout', 'text!./single.html', 'text!./navbar.html'], function($$, ko, template, navbarHTML) {
    function LayoutSinglePage(params, $scope, $imports) {
        var self = this;
    }

    return $$.component(LayoutSinglePage, template);
});
