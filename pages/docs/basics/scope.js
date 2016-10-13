define(['quark', 'knockout', 'text!./scope.html'], function($$, ko, template) {
    function DocsBasicsScopePage(params, $scope, $imports) {
        var self = this;

        $scope.someObservable = ko.observable();
    }

    return $$.component(DocsBasicsScopePage, template);
});
