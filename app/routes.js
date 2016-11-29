define(['quark', 'knockout',
        './routes/docs',
        './routes/docs-basics',
        './routes/docs-refs',
        './routes/library'
        ], function($$, ko) {
    var pages = {
        'main':                                 {
                                                    'layout': 'layout-main',
                                                    'navbar-left': 'navbar-main-left',
                                                    'navbar-right': 'navbar-main-right',
                                                    'container': 'container-simple'
                                                },

        'main/home':                            { 'main': 'pages-home' }
    }

    var routes = {
        'main/home':                            '',
    }

    $$.routing.pages(pages);
    $$.routing.mapRoute(routes);
});
