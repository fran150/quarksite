define(['quark', 'knockout', 'config'], function($$, ko, config) {
    function ModulesData(text) {
        var self = this;

        this.ajaxMessage = ko.observable();

        this.search = function(search, callback) {
            self.ajaxMessage('Searching...');

            var filter = {
                "name": { "$regex": "[" + search + "]" }
            }

            $$.ajax(config.urls.api.modules, 'GET', JSON.stringify(filter), {
                onSuccess: function(data) {
                    callback(data);
                },
                onComplete: function() {
                    self.ajaxMessage('');
                }
            }, false, { cache: true });
        }

        this.read = function(name, callback) {
            self.ajaxMessage('Loading...');

            var query = config.urls.api.modules + "?name=" + name;

            $$.ajax(query, 'GET', {}, {
                onSuccess: function(data) {
                    callback(data);
                },
                onComplete: function() {
                    self.ajaxMessage('');
                }
            }, false, { cache: true });
        }


        this.list = function(callback) {
            self.ajaxMessage('Loading...');

            $$.ajax(config.urls.api.modules, 'GET', {}, {
                onSuccess: function(data) {
                    callback(data);
                },
                onComplete: function() {
                    self.ajaxMessage('');
                }
            });
        }
    }

    return ModulesData;
});
