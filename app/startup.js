define(['quark', 'bootstrap',
    'qk-bootstrap/main',
    'qk-alchemy/main',
    './components',
    './routes'],
    function($$) {

    $$.loadCss('bower_components/bootstrap/dist/css/bootstrap.min.css');
    $$.loadCss('bower_components/font-awesome/css/font-awesome.min.css');
    $$.loadCss('css/main.css');

    $$.routing.activateHasher();
    $$.wait($$.routing.firstRouting, function() {
        $$.start();
    });
});
