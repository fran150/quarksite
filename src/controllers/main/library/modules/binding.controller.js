define([
    'quark',
    'knockout'
], function($$, ko) {

    function MainLibraryModulesBindingController($parent) {
        var self = this;

        var context = $parent.context;

        this.sendParameters = function(name) {
            switch (name) {
                case "main":
                    return {
                        context: context,
                        moduleName: self.parent.module,
                        bindingName: self.params.binding
                    }
                    break;
            }
        }
    }

    return MainLibraryModulesBindingController;
})
