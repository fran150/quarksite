define(['quark', 'knockout'], function($$, ko) {
    function MainDocsController() {
        var self = this;

        this.view = ko.observable();

        this.sendParameters = function(name) {
            switch(name) {
                case 'main':
                    return {
                        view: self.view
                    }
                    break;
            }
        }
    }

    return MainDocsController;
})
