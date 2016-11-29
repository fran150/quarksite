define(['quark', 'knockout'], function($$, ko) {
    var pages = {
        'main/library/finder':                  { 'main': 'pages-library-finder' },

        'main/library/modules':                 {
                                                    'sidebar': 'sidebar-module',
                                                    'container': 'container-sidebar'
                                                },
        'main/library/modules/module':          { 'main': 'empty' }
    }

    var routes = {
        'main/library/finder':                  'lib/finder',
        'main/library/modules/module':          'lib/module/{id}'
    }

    var params = {
        'main/library/modules/module':          { id: '' }
    }

    $$.routing.pages(pages, params);
    $$.routing.mapRoute(routes);
});
