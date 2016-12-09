define(['quark', 'knockout', 'text!./form.html'], function($$, ko, template) {
    function LibraryFinderFormComponent(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            text: ko.observable(),
            onSearch: function(text) { }
        }, params, this);

        this.search = function() {
            $$.call(self.onSearch, self.text());
        }

    }

    return $$.component(LibraryFinderFormComponent, template);
});
