define([
    'quark',
    'knockout'
], function($$, ko) {

    function MainLibraryModulesModuleController() {
        var self = this;

        this.sendParameters = function(name) {
            switch (name) {
                case "main":
                    return {
                        module: self.parent.module
                    }
                    break;
            }
        }
    }

    return MainLibraryModulesModuleController;
})
