define(['quark', 'knockout', 'text!./test2.html'], function($$, ko, template) {
    function LibraryTest2(params, $scope, $imports) {
        var self = this;
    }

    return $$.component(LibraryTest2, template);
});
