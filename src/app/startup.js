define(['quark',
    'bootstrap',
    'css!bootstrap/css',
    'css!font-awesome/css',
    'qk-alchemy/main',
    './controllerProvider',
    './components',
    './routing',
    './validator'],
    function($$) {

    $$.loadCss('css/main.css');

    $$.routing.activateHasher();
    $$.routing.routed.add($$.start);
});
