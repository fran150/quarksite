define([
    'quark',
    'knockout',
    'text!./docs.screen.html'
], function($$, ko, template) {

    function SidebarDocsScreen(params, $scope, $imports) {
        var self = this;
    }

    return $$.component(SidebarDocsScreen, template);
});
