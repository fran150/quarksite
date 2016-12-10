define(['quark', 'knockout', 'jquery', 'text!./content.html'], function($$, ko, $, template) {
    function StaticContentComponent(params, $scope, $imports) {
        var self = this;

        var element;

        $$.parameters({
            view: ko.observable()
        }, params, this);

        function loadView(view) {
            require(["text!" + view + ".html"], function(content) {
                $$.replaceAndBind(".staticContainer", content, {});
                window.scrollTo(0, 0);
            });
        }

        var subscription = self.view.subscribe(function(newValue) {
            loadView(newValue);
        });

        $imports.initComponent = function() {
            loadView(self.view());
        }

        this.dispose = function() {
            subscription.dispose();
        }
    }

    return $$.component(StaticContentComponent, template);
});
