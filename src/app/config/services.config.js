define([

], function() {

    var server = {
        api: 'http://localhost:2403'
    }

    return {
        urls: {
            api: {
                modules: server.api + '/modules',
                components: server.api + '/components'
            }
        }
    }
});
