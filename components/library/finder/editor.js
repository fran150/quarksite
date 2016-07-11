define(['quark', 'knockout', 'text!./editor.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            text: ko.observable(),
            onSearch: function(text) { }
        }, params, this);

        $scope.search = function() {
            $$.call(self.onSearch, self.text());
        }
    }, template);
});
