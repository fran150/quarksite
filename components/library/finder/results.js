define(['quark', 'knockout', 'text!./results.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            routeName: ko.observable(),
            results: ko.observableArray()
        }, params, this);

        $scope.getLink = function(item) {
            return "#" + $$.routing.hash('main/components/library/module', { bowerId: item.bowerId });
        }
    }, template);
});
