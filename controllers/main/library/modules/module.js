define(['quark', 'knockout'], function($$, ko) {
    function MainLibraryModulesModuleController() {
        var self = this;

        this.sendParameters = function(name) {
            debugger;
            switch (name) {
                case "main":
                    return {
                        moduleName: self.params.id
                    }
                    break;
            }
        }
    }

    return MainLibraryModulesModuleController;
})
