define(['quark', 'knockout'], function($$, ko) {
    var pages = {
        'main/single':                     { layout: 'layout-single', navbar: 'al-layout-navbar' },
        'main/single/home':                { main: 'pages-home' },
        'main/single/finder':              { main: 'pages-library-finder' },
        'main/docs':                       { layout: 'layout-docs'},
        'main/docs/home':                  { main: 'pages-docs-home' },
        'main/sidebar':                    { layout: 'layout-sidebar' },
        'main/sidebar/module':             { main: 'pages-library-module' }
    }

    var routes = {
        'main/single/home':                '',
        'main/single/finder':              'components/library',
        'main/docs/home':                  'docs',
        'main/sidebar/module':             'components/library/{id}'
    }

    $$.routing.pages(pages);
    $$.routing.mapRoute(routes);
});
