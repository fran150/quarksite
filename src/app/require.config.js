var require;
require = requireConfigure(QuarkRequireConf());
require = requireConfigure(require, {
    paths: {
        'config':                       'app/config',
        'data':                         'data',
        'bootstrap':                    'bower_modules/bootstrap/dist/js/bootstrap.min',
        'bootstrap/css':                'bower_modules/bootstrap/dist/css/bootstrap.min',
        'bootstrap-switch':             'bower_modules/bootstrap-switch/dist/js/bootstrap-switch.min',
        'bootstrap-switch/bt3/css':     'bower_modules/bootstrap-switch/dist/css/bootstrap3/bootstrap-switch.min',
        'font-awesome/css':             'bower_modules/font-awesome/css/font-awesome.min',
        'qk-alchemy':                   'bower_modules/qk-alchemy/dist',
        'prism':                        'bower_modules/prism/prism',
        'prism/themes':                 'bower_modules/prism/themes'
    },
    shim: {
        "bootstrap": {
            "deps": ['jquery']
        },
        "bootstrap-switch": {
            "deps": ['boostrap']
        }
    }
});
