define([

], function() {

    var server = {
        api: 'http://localhost:2403'
    }

    return {
        urls: {
            api: {
                docs: server.api + '/docs'
            }
        }
    }
});
