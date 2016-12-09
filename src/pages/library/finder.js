define(['quark', 'knockout', 'text!./finder.html'], function($$, ko, template) {
    function LibraryFinderPage(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            text: ko.observable(),
            onSearch: function(text) { },
            ajaxMessage: ko.observable(),
            data: ko.observableArray()
        }, params, this);
    }

    return $$.component(LibraryFinderPage, template);
});
