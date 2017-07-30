define([
    'quark',
    'knockout'
], function($$, ko) {

    function MainLibraryModulesBehaviourController($parent) {
        var self = this;

        var context = $parent.context;

        this.sendParameters = function(name) {
            switch (name) {
                case "main":
                    return {
                        context: context,
                        moduleName: self.parent.module,
                        behaviourName: self.params.behaviour
                    }
                    break;
            }
        }
    }

    return MainLibraryModulesBehaviourController;
})
