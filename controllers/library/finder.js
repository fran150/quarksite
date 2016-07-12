define(['quark', 'knockout', 'data/modules'], function($$, ko, DataModules) {
    return function(route, $imports) {
        var self = this;

        this.message = ko.observable();
        var dataModules = new DataModules(self.message);

        this.search = function(search) {
            dataModules.search(search, function(data) {
                self.results(data);
            });
        }

        this.results = ko.observableArray();

        $imports.configPage = function(name) {
            switch (name) {
                case 'main':
                    return {
                        ajaxMessage: self.message,
                        onSearch: self.search,
                        results: self.results
                    }
                    break;
            }
        }
    }
});
