define(['quark', 'knockout', 'text!./main.html'], function($$, ko, template) {
    function MainLayout(params, $scope, $imports) {
        var self = this;
    }

    return $$.component(MainLayout, template);
});
