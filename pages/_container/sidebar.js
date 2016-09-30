define(['quark', 'knockout', 'text!./sidebar.html'], function($$, ko, template) {
    function SidebarContainer(params, $scope, $imports) {
        var self = this;
    }

    return $$.component(SidebarContainer, template);
});
