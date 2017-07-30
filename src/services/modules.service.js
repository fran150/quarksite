define([
    'quark', 
    'knockout', 
    'app/config/services.config'
], function($$, ko, config) {
    
    function ModulesService() {
        var self = this;

        this.ajaxMessage = ko.observable();

        this.modules = ko.observableArray();
        this.module = ko.observable();

        this.search = function(search, callback) {
            self.ajaxMessage('Searching...');

            var filter = {
                "name": { "$regex": "(" + search + "*)" }
            }

            $$.ajax(config.urls.api.docs, 'GET', JSON.stringify(filter), {
                onSuccess: function(data) {
                    self.modules(data);
                    $$.call(callback);
                },
                onComplete: function() {
                    self.ajaxMessage('');
                }
            }, false, { cache: true });
        }

        this.read = function(name, callback) {
            self.ajaxMessage('Loading...');

            var query = config.urls.api.docs + "?name=" + name;

            $$.ajax(query, 'GET', {}, {
                onSuccess: function(data) {
                    if ($$.isArray(data)) {
                        self.module(data[0]);
                        $$.call(callback);
                    } else {
                        $$.undefine(self.module);
                        $$.call(callback);
                    }
                },
                onComplete: function() {
                    self.ajaxMessage('');
                }
            }, false, { cache: true });
        }


        this.list = function(callback) {
            self.ajaxMessage('Loading...');

            $$.ajax(config.urls.api.docs, 'GET', {}, {
                onSuccess: function(data) {
                    self.modules(data);
                    $$.call(callback);
                },
                onComplete: function() {
                    self.ajaxMessage('');
                }
            });
        }
    }

    return ModulesService;
});
