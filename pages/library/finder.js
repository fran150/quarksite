define(['quark', 'knockout', 'text!./finder.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            onSearch: function(text) {},
            results: ko.observableArray()
        }, params, this);

    }, template);
});
