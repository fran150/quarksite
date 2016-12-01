define(['quark', 'knockout'], function($$, ko) {
    function MainLibraryModulesController() {
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

    return MainLibraryModulesController;
})
