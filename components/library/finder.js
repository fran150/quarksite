define(['quark', 'knockout', 'text!./finder.html', '../../data/modules'], function($$, ko, template, DataModules) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            text: ko.observable(),
            searchMessage: ko.observable(),
            routeName: ko.observable('main/components/library/module'),
            results: ko.observableArray(),
            onSearch: function(text) { return true; }
        }, params, this);

        var dataModules = new DataModules(self.searchMessage);

        this.search = function() {
            var text = self.text();

            if ($$.call(self.onSearch, text)) {
                dataModules.search(text, function(data) {
                    self.results(data);
                });
            }
        }

        $scope.getLink = function(item) {
            return $$.routing.link(self.routeName(), { bowerId: item.bowerId });
        }

    }, template);
});
