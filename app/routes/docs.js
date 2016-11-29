define(['quark', 'knockout'], function($$, ko) {
    var pages = {
        'main/docs':                            {
                                                    'sidebar': 'sidebar-docs',
                                                    'container': 'container-sidebar'
                                                },
        'main/docs/home':                       { 'main': 'pages-docs-home' },
        'main/docs/installing':                 { 'main': 'pages-docs-installing' }
    }

    var routes = {
        'main/docs/home':                       'docs',
        'main/docs/installing':                 'docs/installing',
    }

    $$.routing.pages(pages);
    $$.routing.mapRoute(routes);
});
