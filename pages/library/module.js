define(['quark', 'knockout', 'text!./module.html'], function($$, ko, template) {
    function LibraryModulePage(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            module: ko.observable()
        }, params, this);
    }

    return $$.component(LibraryModulePage, template);
});
