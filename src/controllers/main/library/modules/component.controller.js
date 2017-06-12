define([
    'quark',
    'knockout'
], function($$, ko) {

    function MainLibraryModulesComponentController($parent) {
        var self = this;

        var context = $parent.context;

        this.sendParameters = function(name) {
            switch (name) {
                case "main":
                    return {
                        context: context,
                        moduleName: self.parent.module,
                        componentName: self.params.component
                    }
                    break;
            }
        }
    }

    return MainLibraryModulesComponentController;
})
