define(['quark', 'knockout', 'text!./component.html'], function($$, ko, template) {
    function LibraryComponentPage(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            module: ko.observable(),
            componentName: ko.observable()
        }, params, this);

        this.component = ko.pureComputed(function() {
            var module = self.module();
            var components;
            var component;

            if (module) {
                components = module.components;

                if (components) {
                    component = components[self.componentName()];
                }
            }

            return component;
        });

        this.properties = ko.pureComputed(function() {
            var component = self.component();
            var result = new Array();

            if (component && component.properties) {
                for (var name in component.properties) {
                    var property = component.properties[name];

                    result.push({
                        name: name,
                        type: property.type,
                        observable: property.observable,
                        description: property.description
                    });
                }
            }

            return result;
        });

        this.parameters = ko.pureComputed(function() {
            var component = self.component();
            var result = new Array();

            if (component && component.parameters) {
                for (var name in component.parameters) {
                    var parameter = component.parameters[name];

                    result.push({
                        name: name,
                        type: parameter.type,
                        observable: parameter.observable,
                        description: parameter.description
                    });
                }
            }

            return result;
        });

        this.methods = ko.pureComputed(function() {
            var component = self.component();
            var result = new Array();

            if (component && component.methods) {
                for (var name in component.methods) {
                    var method = component.methods[name];

                    var methodData = {
                        name: name,
                        signature: method.signature,
                        description: method.description
                    };

                    if (method.parameters) {
                        methodData.parameters = new Array();

                        for (var name in method.parameters) {
                            var parameter = method.parameters[name];

                            methodData.parameters.push({
                                name: name,
                                type: parameter.type,
                                description: parameter.description
                            });
                        }
                    }

                    if (method.returns) {
                        methodData.returns = {
                            type: method.returns.type,
                            description: method.returns.description
                        }
                    }

                    result.push(methodData);
                }
            }

            return result;
        });
    }

    return $$.component(LibraryComponentPage, template);
});
