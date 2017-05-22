define([
    'quark',
    'knockout',
    'text!./results.component.html'
], function($$, ko, template) {

    function LibraryFinderResultsComponent(params, $scope, $imports, $context) {
        var self = this;

        $$.parameters({
            data: ko.observableArray(),
            ajaxMessage: ko.observable(),
            pageName: ko.observable()
        }, params, this);
    }

    return $$.component(LibraryFinderResultsComponent, template);
});
