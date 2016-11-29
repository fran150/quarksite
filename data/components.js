define(['quark', 'knockout', 'config'], function($$, ko, config) {
    function ComponentsData() {
        var self = this;

        this.ajaxMessage = ko.observable();

        this.list = function(moduleId, callback) {
            self.ajaxMessage('Loading...');

            var query = config.urls.api.components + '?moduleId=' + moduleId;

            $$.ajax(query, 'GET', {}, {
                onSuccess: function(data) {
                    callback(data);
                },
                onComplete: function() {
                    self.ajaxMessage('');
                }
            }, false, { cache: true });
        }

        this.read = function(id, callback) {
            self.ajaxMessage('Loading...');

            var query = config.urls.api.components + '?id=' + id;

            $$.ajax(query, 'GET', {}, {
                onSuccess: function(data) {
                    callback(data);
                },
                onComplete: function() {
                    self.ajaxMessage('');
                }
            }, false, { cache: true });
        }

    }

    return ComponentsData;
});
