define(['quark', 'knockout', 'data/modules'], function($$, ko, DataModules) {
    function MainLibraryFinderController() {
        var self = this;

        this.dataSource = new DataModules();

        this.data = ko.observable();

        this.search = function(text) {
            if ($$.isDefined(self.dataSource)) {
                self.dataSource.search(text, function(data) {
                    self.data(data);
                });
            }
        }

        this.sendParameters = function(name) {
            switch(name) {
                case "main":
                    return {
                        onSearch: self.search,
                        ajaxMessage: self.dataSource.searchMessage,
                        data: self.data
                    }
            }
        }
    }

    return MainLibraryFinderController;
})
