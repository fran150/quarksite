define(['quark', 'knockout', 'config'], function($$, ko, config) {
    return function(text) {
        var self = this;

        this.search = function(search, callback) {
            text('Searching...');

            var filter = {
                "name": { "$regex": "[" + search + "]" }
            }

            $$.ajax(config.urls.api.modules, 'GET', JSON.stringify(filter), {
                onSuccess: function(data) {
                    callback(data);
                },
                onComplete: function() {
                    text('');
                }
            }, false, { cache: true });
        }

        this.list = function(callback) {
            text('Loading...');
            $$.ajax(config.urls.api.modules, 'GET', {}, {
                onSuccess: function(data) {
                    callback(data);
                },
                onComplete: function() {
                    text('');
                }
            });
        }
    }
});
