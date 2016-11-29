define(['quark'], function($$) {
    $$.onNamespace('pages')
        .namespace('docs')
            .register('home', 'pages/docs/home')
            .register('installing', 'pages/docs/installing');
});
