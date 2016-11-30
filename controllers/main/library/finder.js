define(['quark', 'knockout', 'data/modules'], function($$, ko, ModulesData) {
    function MainLibraryFinderController() {
        var self = this;

        var dataSource = new ModulesData();

        this.text = ko.observable();
        this.data = ko.observableArray();

        this.search = function() {
            dataSource.search(self.text(), function(data) {
                self.data(data);
            });
        }

        this.sendParameters = function(name) {
            switch(name) {
                case 'main':
                    return {
                        text: self.text,
                        data: self.data,
                        onSearch: self.search,
                        ajaxMessage: dataSource.message
                    }
                    break;
            }
        }
    }

    return MainLibraryFinderController;
})
