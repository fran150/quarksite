define([
    'quark',
    'knockout'
], function($$, ko) {

    function MainLibraryModulesController() {
        var self = this;

        this.context = $$.serviceContext();

        this.sendParameters = function(name) {
            switch (name) {
                case "sidebar":
                    return {
                        context: self.context,
                        name: self.params.id
                    }
            }
        }
    }

    return MainLibraryModulesController;
})
