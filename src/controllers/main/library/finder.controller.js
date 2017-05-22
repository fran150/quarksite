define([
    'quark',
    'knockout',
    'services/modules.service'
], function($$, ko, ModulesService) {

    function MainLibraryFinderController() {
        var self = this;

        var context = $$.serviceContext();

        this.sendParameters = function(name) {
            switch(name) {
                case "main":
                    return {
                        context: context
                    }
            }
        }
    }

    return MainLibraryFinderController;
})
