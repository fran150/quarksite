define(['quark', 'knockout'], function($$, ko) {
    var pages = {
        'main/library/finder':                  { 'main': 'pages-library-finder' },

        'main/library/modules':                 {
                                                    'sidebar': 'sidebar-module',
                                                    'container': 'container-sidebar'
                                                },
        'main/library/modules/module':          { 'main': 'pages-library-module' },
        'main/library/modules/component':       { 'main': 'pages-library-component' }
    }

    var routes = {
        'main/library/finder':                  'lib/finder',
        'main/library/modules/module':          'lib/module/{id}',
        'main/library/modules/component':       'lib/module/{id}/{component}'
    }

    var params = {
        'main/library/modules':                    { id: '' },
        'main/library/modules/component':          { component: '' }
    }

    $$.routing.pages(pages, params);
    $$.routing.mapRoute(routes);
});
