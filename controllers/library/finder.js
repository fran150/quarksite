define(['quark', 'knockout', 'data/modules'], function($$, ko, DataModules) {
    return function(route, $imports) {
        var self = this;

        var dataModules = new DataModules(ko.observable());

        this.search = function(search) {
            debugger;
            dataModules.search(search, function(data) {
                self.results(data);
            });
        }

        this.results = ko.observableArray();

        $imports.configPage = function(name) {
            switch (name) {
                case 'main':
                    return {
                        onSearch: self.search,
                        results: self.results
                    }
                    break;
            }
        }
    }
});
