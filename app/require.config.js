var require;
require = requireConfigure(QuarkRequireConf(), {
    paths: {
        'config': 'app/config',
        'data': 'data',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
        'qk-bootstrap': 'bower_components/qk-bootstrap',
        'qk-alchemy': 'bower_components/qk-alchemy'
    },
    shim: {
        bootstrap: ['jquery']
    }
});
