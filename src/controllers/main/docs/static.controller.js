define([
    'quark',
    'knockout'
], function($$, ko) {

    function MainDocsStaticController() {
        var self = this;

        this.init = function() {
            self.parent.view(self.params.view())
        }

    }

    return MainDocsStaticController;
})
