define([
    'quark', 
    'knockout', 
    'text!./finder.screen.html'
], function($$, ko, template) {
    
    function LibraryFinderScreen(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            text: ko.observable(),
            onSearch: function(text) { },
            ajaxMessage: ko.observable(),
            data: ko.observableArray()
        }, params, this);
    }

    return $$.component(LibraryFinderScreen, template);
});
