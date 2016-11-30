define(['quark', 'knockout', 'data/modules', 'text!./finder.html'], function($$, ko, ModulesData, template) {
    function LibraryFinderPage(params, $scope, $imports) {
        var self = this;

        var dataSource = new ModulesData();

        $$.parameters({
            text: ko.observable(),
            dataSource: dataSource,
            onSearch: function(text) { return true; },
            ajaxMessage: ko.observable(),
            data: ko.observableArray()
        }, params, this);

        this.search = function() {
            if ($$.isDefined(self.dataSource)) {
                var text = self.text();

                if ($$.call(self.onSearch, text)) {
                    self.dataSource.search(self.text(), function(data) {
                        self.data(data);
                    });
                }
            }
        }
    }

    return $$.component(LibraryFinderPage, template);
});
