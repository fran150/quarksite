define(['quark', 'knockout', 'text!./home.html'], function($$, ko, template) {
    function HomePage(params, $scope, $imports) {
        var self = this;
    }

    return $$.component(HomePage, template);
});
