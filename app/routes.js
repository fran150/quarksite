define(['quark', 'knockout'], function($$, ko) {
    var pages = {
        'main':                            {
                                             'layout': 'layout-main',
                                             'navbar-left': 'navbar-main-left',
                                             'navbar-right': 'navbar-main-right',
                                             'container': 'container-simple'
                                           },
        'main/home':                       { 'main': 'pages-home' },
        'main/library/finder':             { 'main': 'pages-library-finder'},

        'main/docs':                       {
                                             'sidebar': 'sidebar-docs',
                                             'container': 'container-sidebar'
                                           },
        'main/docs/home':                  { 'main': 'pages-docs-home' },
        'main/docs/instalando':            { 'main': 'pages-docs-instalando' }
    }

    var routes = {
        'main/home':                       '',
        'main/library/finder':             'component/finder',
        'main/docs/home':                  'docs',
        'main/docs/instalando':            'docs/instalando',
        'main/sidebar/module':             'components/library/{id}'
    }

    $$.routing.pages(pages);
    $$.routing.mapRoute(routes);
});
