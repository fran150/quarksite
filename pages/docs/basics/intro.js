define(['quark', 'knockout', 'text!./intro.html'], function($$, ko, template) {
    function DocsBasicsIntroPage(params, $scope, $imports) {
        var self = this;
    }

    return $$.component(DocsBasicsIntroPage, template);
});
