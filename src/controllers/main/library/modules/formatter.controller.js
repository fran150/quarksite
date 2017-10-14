define([
    'quark',
    'knockout'
], function($$, ko) {

    function MainLibraryModulesFormatterController($parent) {
        var self = this;

        var context = $parent.context;

        this.sendParameters = function(name) {
            switch (name) {
                case "main":
                    return {
                        context: context,
                        moduleName: self.parent.module,
                        formatterName: self.params.formatter
                    }
                    break;
            }
        }
    }

    return MainLibraryModulesFormatterController;
})
