define(['quark', 'knockout', 'text!./results.html'], function($$, ko, template) {
    return $$.component(function(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            results: ko.observableArray()
        }, params, this);        
    }, template);
});
