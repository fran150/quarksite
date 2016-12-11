define([
    'quark',
    'knockout',
    'jquery',
    'text!./highlight.component.html',
    'prism',
    'css!prism/themes/prism'
], function($$, ko, $, template) {

    function CodeHighlightComponent(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            language: ko.observable('javascript')
        }, params, this);

        $scope.languageClass = ko.pureComputed(function() {
            return 'language-' + self.language();
        });

        $scope.init = function(element) {
            Prism.highlightElement(element);
            delete Prism;
        }

    }

    return $$.component(CodeHighlightComponent, template);
});
