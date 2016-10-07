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
        'main/docs/installing':            { 'main': 'pages-docs-installing' },
        'main/docs/basics-intro':          { 'main': 'pages-docs-basics-intro' },
        'main/docs/basics-web-modules':    { 'main': 'pages-docs-basics-web-modules' },
        'main/docs/basics-web-components': { 'main': 'pages-docs-basics-web-components' },
        'main/docs/basics-observables':    { 'main': 'pages-docs-basics-observables' },
        'main/docs/basics-bindings':       { 'main': 'pages-docs-basics-bindings' },
        'main/docs/basics-pages':          { 'main': 'pages-docs-basics-pages' },
        'main/docs/basics-controllers':    { 'main': 'pages-docs-basics-controllers' },
        'main/docs/basics-routes':         { 'main': 'pages-docs-basics-routes' }
    }

    var routes = {
        'main/home':                       '',
        'main/library/finder':             'component/finder',
        'main/docs/home':                  'docs',
        'main/docs/installing':            'docs/installing',
        'main/docs/basics-intro':          'docs/basics',
        'main/docs/basics-web-modules':    'docs/basics/webmodules',
        'main/docs/basics-web-components': 'docs/basics/webcomponents',
        'main/docs/basics-observables':    'docs/basics/observables',
        'main/docs/basics-bindings':       'docs/basics/bindings',
        'main/docs/basics-pages':          'docs/basics/pages',
        'main/docs/basics-controllers':    'docs/basics/controllers',
        'main/docs/basics-routes':         'docs/basics/routes',
        'main/sidebar/module':             'components/library/{id}'
    }

    $$.routing.pages(pages);
    $$.routing.mapRoute(routes);
});
