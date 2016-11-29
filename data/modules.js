define(['quark', 'knockout', 'config'], function($$, ko, config) {
    function ModulesData(text) {
        var self = this;

        this.message = ko.observable();

        this.search = function(search, callback) {
            self.message('Searching...');

            var filter = {
                "name": { "$regex": "[" + search + "]" }
            }

            $$.ajax(config.urls.api.modules, 'GET', JSON.stringify(filter), {
                onSuccess: function(data) {
                    callback(data);
                },
                onComplete: function() {
                    self.message('');
                }
            }, false, { cache: true });
        }

        this.read = function(name, callback) {
            self.message('Loading...');

            var query = config.urls.api.modules + "?name=" + name;

            $$.ajax(query, 'GET', {}, {
                onSuccess: function(data) {
                    callback(data);
                },
                onComplete: function() {
                    self.message('');
                }
            }, false, { cache: true });
        }


        this.list = function(callback) {
            self.message('Loading...');

            $$.ajax(config.urls.api.modules, 'GET', {}, {
                onSuccess: function(data) {
                    callback(data);
                },
                onComplete: function() {
                    self.message('');
                }
            });
        }
    }

    return ModulesData;
});
