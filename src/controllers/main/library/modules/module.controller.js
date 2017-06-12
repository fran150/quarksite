define([
    'quark',
    'knockout'
], function($$, ko) {

    function MainLibraryModulesModuleController($parent) {
        var self = this;

        var context = $parent.context;

        this.sendParameters = function(name) {
            switch (name) {
                case "main":
                    return {
                        context: context,
                        name: $parent.params.id
                    }
                    break;
            }
        }
    }

    return MainLibraryModulesModuleController;
})
