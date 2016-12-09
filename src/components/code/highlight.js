define(['quark', 'knockout', 'text!./highlight.html',
    'prism',
    'css!prism/themes/prism'],
    function($$, ko, template) {

    function CodeHighlight(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            language: ko.observable('javascript')
        }, params, this);

        $scope.languageClass = ko.pureComputed(function() {
            return 'language-' + self.language();
        });

        $scope.init = function(element) {
            Prism.highlightElement(element);
        }

    }

    return $$.component(CodeHighlight, template);
});
