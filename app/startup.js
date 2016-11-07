define(['quark', 'bootstrap',
    'qk-bootstrap/main',
    'qk-alchemy/main',
    './components',
    './routes',
    './validator'],
    function($$) {

    $$.loadCss('bower_components/bootstrap/dist/css/bootstrap.min.css');
    $$.loadCss('bower_components/font-awesome/css/font-awesome.min.css');
    $$.loadCss('css/main.css');

    $$.routing.activateHasher();
    $$.start();
});
