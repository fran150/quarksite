define(['quark', 'knockout'], function($$, ko) {
    function MainLibraryModulesComponentController() {
        var self = this;

        this.sendParameters = function(name) {
            switch (name) {
                case "main":
                    return {
                        module: self.parent.module,
                        componentName: self.params.component
                    }
                    break;
            }
        }
    }

    return MainLibraryModulesComponentController;
})
