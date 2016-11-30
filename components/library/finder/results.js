define(['quark', 'knockout', 'text!./results.html'], function($$, ko, template) {
    function LibraryFinderResultsComponent(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            data: ko.observableArray(),
            pageName: ko.observable(),
            ajaxMessage: ko.observable()
        }, params, this);
    }

    return $$.component(LibraryFinderResultsComponent, template);
});
