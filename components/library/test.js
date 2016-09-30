define(['quark', 'knockout', 'text!./test.html'], function($$, ko, template) {
    function LibraryTest(params, $scope, $imports) {
        var self = this;

        this.parameter = $$.routing.current().params.parameter;
    }

    return $$.component(LibraryTest, template);
});
