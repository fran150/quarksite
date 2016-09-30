define(['quark', 'knockout', 'text!./finder.html'], function($$, ko, template) {
    function LibraryFinder(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            text: ko.observable(),
            dataSource: undefined,
            routeName: ko.observable('main/components/library/module'),
            results: ko.observableArray(),
            onSearch: function(text) { return true; }
        }, params, this);

        this.search = function() {
            var text = self.text();

            if ($$.call(self.onSearch, text)) {
                self.dataSource.search(text, function(data) {
                    self.results(data);
                });
            }
        }

        $scope.getLink = function(item) {
            return $$.routing.link(self.routeName(), { bowerId: item.bowerId });
        }

    }

    return $$.component(LibraryFinder, template);
});
