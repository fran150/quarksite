var require;
require = requireConfigure(QuarkRequireConf());
require = requireConfigure(require, {
    paths: {
        'config':           'app/config',
        'data':             'data',
        'bootstrap':        'bower_components/bootstrap/dist/js/bootstrap.min',
        'qk-bootstrap':     'bower_components/qk-bootstrap',
        'qk-alchemy':       'bower_components/qk-alchemy',
        'prism':            'bower_components/prism/prism'
    },
    shim: {
        bootstrap: ['jquery']
    }
});
