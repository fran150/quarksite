define(['quark',
    'bootstrap',
    'css!bootstrap/css',
    'css!font-awesome/css',
    'qk-alchemy/main',
    './components',
    './routes',
    './validator'],
    function($$) {

    $$.loadCss('css/main.css');

    $$.routing.activateHasher();
    $$.start();
});
