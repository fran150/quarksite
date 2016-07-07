define(['quark', './components', './routes'], function($$) {
    $$.routing.activateHasher();
    $$.wait($$.routing.firstRouting, function() {
        $$.start();
    });

});
