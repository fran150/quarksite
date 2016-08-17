define(['quark', 'knockout', '../../data/modules'], function($$, ko, DataModules) {
    return function(route, $imports) {
        var self = this;

        this.dataSource = new DataModules(self.searchMessage);
    }
});
