var require;
require = requireConfigure(QuarkRequireConf(), {
    paths: {
        'config': 'app/config',
        'data': 'data',
        'bootstrap': 'bower_components/bootstrap/dist/js/bootstrap.min',
        'qk-bootstrap': 'bower_components/qk-bootstrap'
    },
    shim: {
        bootstrap: ['jquery']
    }
});
