define([
    'quark',
    'knockout',
    'services/modules.service'
], function($$, ko, ModulesService) {

    function MainLibraryModulesController() {
        var self = this;

        var dataSource = new ModulesService();

        this.ajaxMessage = ko.observable();
        this.module = ko.observable();

        var subscriptions;

        function read(moduleId) {
            dataSource.read(moduleId, function(data) {
                self.module(data);
            })
        }

        this.init = function() {
            read(self.params.id());

            subscriptions = {
                moduleId: self.params.id.subscribe(read)
            }
        }

        this.sendParameters = function(name) {
            switch (name) {
                case "sidebar":
                    return {
                        module: self.module,
                        ajaxMessage: dataSource.ajaxMessage
                    }
                    break;
            }
        }

        this.dispose = function() {
            subscriptions.moduleId.dispose();
        }
    }

    return MainLibraryModulesController;
})
