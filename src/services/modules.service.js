define([
    'quark', 
    'knockout', 
    'config/services.config'
], function($$, ko, config) {
    
    function ModulesService() {
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

        this.read = function(bowerId, callback) {
            self.ajaxMessage('Loading...');

            var query = config.urls.api.modules + "?bowerId=" + bowerId;

            $$.ajax(query, 'GET', {}, {
                onSuccess: function(data) {
                    if ($$.isArray(data)) {
                        callback(data[0]);
                    } else {
                        callback();
                    }
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

    return ModulesService;
});
