define(['quark', 'knockout'], function($$, ko) {
    var pages = {
        'main':                                 {
                                                    'layout': 'layout-main',
                                                    'navbar-left': 'navbar-main-left',
                                                    'navbar-right': 'navbar-main-right',
                                                    'container': 'container-simple'
                                                },
        'main/home':                            { 'main': 'pages-home' },
        'main/library/finder':                  { 'main': 'pages-library-finder'},

        'main/docs':                            {
                                                    'sidebar': 'sidebar-docs',
                                                    'container': 'container-sidebar'
                                                },
        'main/docs/home':                       { 'main': 'pages-docs-home' },
        'main/docs/installing':                 { 'main': 'pages-docs-installing' },
        'main/docs/basics-intro':               { 'main': 'pages-docs-basics-intro' },
        'main/docs/basics-web-modules':         { 'main': 'pages-docs-basics-web-modules' },
        'main/docs/basics-web-components':      { 'main': 'pages-docs-basics-web-components' },
        'main/docs/basics-bindings':            { 'main': 'pages-docs-basics-bindings' },
        'main/docs/basics-observables':         { 'main': 'pages-docs-basics-observables' },
        'main/docs/basics-component-params':    { 'main': 'pages-docs-basics-component-params' },
        'main/docs/basics-scope':               { 'main': 'pages-docs-basics-scope' },
        'main/docs/basics-imports':             { 'main': 'pages-docs-basics-imports' },
        'main/docs/basics-pages':               { 'main': 'pages-docs-basics-pages' },
        'main/docs/basics-routes':              { 'main': 'pages-docs-basics-routes' },
        'main/docs/basics-controllers':         { 'main': 'pages-docs-basics-controllers' },
        'main/docs/basics-sync':                { 'main': 'pages-docs-basics-sync' },
        'main/docs/basics-behaviours':          { 'main': 'pages-docs-basics-behaviours' },
        'main/docs/basics-namespaces':          { 'main': 'pages-docs-basics-namespaces' },
        'main/docs/basics-content':             { 'main': 'pages-docs-basics-content' },
        'main/docs/basics-virtual':             { 'main': 'pages-docs-basics-virtual' },
        'main/docs/basics-ajax':                { 'main': 'pages-docs-basics-ajax' },
        'main/docs/basics-modules':             { 'main': 'pages-docs-basics-modules' },
        'main/docs/basics-validation':          { 'main': 'pages-docs-basics-validation' },


        'main/docs/refs-ajax':                  { 'main': 'pages-docs-refs-ajax' },
        'main/docs/refs-ajaxConfig':            { 'main': 'pages-docs-refs-ajaxConfig' },
        'main/docs/refs-ajaxErrorHandlers':     { 'main': 'pages-docs-refs-ajaxErrorHandlers' },

        'main/docs/refs-format':                { 'main': 'pages-docs-refs-format' },
        'main/docs/refs-formatters':            { 'main': 'pages-docs-refs-formatters' },

        'main/docs/refs-lock':                  { 'main': 'pages-docs-refs-lock' },
        'main/docs/refs-wait':                  { 'main': 'pages-docs-refs-wait' },
        'main/docs/refs-synclock':              { 'main': 'pages-docs-refs-synclock' },
        'main/docs/refs-synclock-lock':         { 'main': 'pages-docs-refs-synclock-lock' },
        'main/docs/refs-synclock-unlock':       { 'main': 'pages-docs-refs-synclock-unlock' },
        'main/docs/refs-synclock-islocked':     { 'main': 'pages-docs-refs-synclock-islocked' },
        'main/docs/refs-synclock-force':        { 'main': 'pages-docs-refs-synclock-force' },
        'main/docs/refs-synclock-dispose':      { 'main': 'pages-docs-refs-synclock-dispose' },
        'main/docs/refs-signal':                { 'main': 'pages-docs-refs-signal' },
        'main/docs/refs-signalclear':           { 'main': 'pages-docs-refs-signalclear' },

        'main/docs/refs-routing-href':          { 'main': 'pages-docs-refs-routing-href' },

        'main/docs/refs-bindings-onbind':       { 'main': 'pages-docs-refs-bindings-onbind' },

        'main/docs/refs-tracking-waitready':    { 'main': 'pages-docs-refs-tracking-waitready' },

        'main/docs/refs-associative':           { 'main': 'pages-docs-refs-associative' },
        'main/docs/refs-associative-add':       { 'main': 'pages-docs-refs-associative-add' },
        'main/docs/refs-associative-get':       { 'main': 'pages-docs-refs-associative-get' },
        'main/docs/refs-associative-update':    { 'main': 'pages-docs-refs-associative-update' },
        'main/docs/refs-associative-remove':    { 'main': 'pages-docs-refs-associative-remove' },
        'main/docs/refs-associative-array':     { 'main': 'pages-docs-refs-associative-array' },
        'main/docs/refs-associative-each':      { 'main': 'pages-docs-refs-associative-each' },
        'main/docs/refs-associative-subscribe': { 'main': 'pages-docs-refs-associative-subscribe' },

        'main/docs/refs-knockout-refresh':              { 'main': 'pages-docs-refs-knockout-refresh' },
        'main/docs/refs-knockout-isobservablearray':    { 'main': 'pages-docs-refs-knockout-isobservablearray' },
        'main/docs/refs-knockout-iscomputed':           { 'main': 'pages-docs-refs-knockout-iscomputed' },
        'main/docs/refs-knockout-maptojs':              { 'main': 'pages-docs-refs-knockout-maptojs' },
        'main/docs/refs-knockout-mapfromjs':            { 'main': 'pages-docs-refs-knockout-mapfromjs' }
    }

    var routes = {
        'main/home':                            '',
        'main/library/finder':                  'component/finder',

        'main/docs/home':                       'docs',
        'main/docs/installing':                 'docs/installing',
        'main/docs/basics-intro':               'docs/basics',
        'main/docs/basics-web-modules':         'docs/basics/webmodules',
        'main/docs/basics-web-components':      'docs/basics/webcomponents',
        'main/docs/basics-bindings':            'docs/basics/bindings',
        'main/docs/basics-observables':         'docs/basics/observables',
        'main/docs/basics-component-params':    'docs/basics/component-params',
        'main/docs/basics-scope':               'docs/basics/scope',
        'main/docs/basics-imports':             'docs/basics/imports',
        'main/docs/basics-pages':               'docs/basics/pages',
        'main/docs/basics-routes':              'docs/basics/routes',
        'main/docs/basics-controllers':         'docs/basics/controllers',
        'main/docs/basics-sync':                'docs/basics/sync',
        'main/docs/basics-behaviours':          'docs/basics/behaviours',
        'main/docs/basics-namespaces':          'docs/basics/namespaces',
        'main/docs/basics-content':             'docs/basics/content',
        'main/docs/basics-virtual':             'docs/basics/virtual',
        'main/docs/basics-ajax':                'docs/basics/ajax',
        'main/docs/basics-modules':             'docs/basics/modules',
        'main/docs/basics-validation':          'docs/basics/validation',


        'main/docs/refs-ajax':                  'docs/refs/ajax',
        'main/docs/refs-ajaxConfig':            'docs/refs/ajaxConfig',
        'main/docs/refs-ajaxErrorHandlers':     'docs/refs/ajaxErrorHandlers',
        'main/docs/refs-ajaxErrorHandlers':     'docs/refs/ajaxErrorHandlers',

        'main/docs/refs-format':                'docs/refs/format',
        'main/docs/refs-formatters':            'docs/refs/formatters',

        'main/docs/refs-lock':                  'docs/refs/lock',
        'main/docs/refs-wait':                  'docs/refs/wait',
        'main/docs/refs-synclock':              'docs/refs/synclock',
        'main/docs/refs-synclock-lock':         'docs/refs/synclock/lock',
        'main/docs/refs-synclock-unlock':       'docs/refs/synclock/unlock',
        'main/docs/refs-synclock-islocked':     'docs/refs/synclock/islocked',
        'main/docs/refs-synclock-force':        'docs/refs/synclock/force',
        'main/docs/refs-synclock-dispose':      'docs/refs/synclock/dispose',
        'main/docs/refs-signal':                'docs/refs/signal',
        'main/docs/refs-signalclear':           'docs/refs/signalclear',

        'main/docs/refs-routing-href':          'docs/refs/href',

        'main/docs/refs-bindings-onbind':       'docs/refs/onbind',

        'main/docs/refs-tracking-waitready':    'docs/refs/waitready',

        'main/docs/refs-associative':           'docs/refs/associative',
        'main/docs/refs-associative-add':       'docs/refs/associative/add',
        'main/docs/refs-associative-get':       'docs/refs/associative/get',
        'main/docs/refs-associative-update':    'docs/refs/associative/update',
        'main/docs/refs-associative-remove':    'docs/refs/associative/remove',
        'main/docs/refs-associative-array':     'docs/refs/associative/array',
        'main/docs/refs-associative-each':      'docs/refs/associative/each',
        'main/docs/refs-associative-subscribe': 'docs/refs/associative/subscribe',

        'main/docs/refs-knockout-refresh':              'docs/refs/knockout/refresh',
        'main/docs/refs-knockout-isobservablearray':    'docs/refs/knockout/isobservablearray',
        'main/docs/refs-knockout-iscomputed':           'docs/refs/knockout/iscomputed',
        'main/docs/refs-knockout-maptojs':              'docs/refs/knockout/maptojs',
        'main/docs/refs-knockout-mapfromjs':            'docs/refs/knockout/mapfromjs',

        'main/sidebar/module':                  'components/library/{id}'
    }

    $$.routing.pages(pages);
    $$.routing.mapRoute(routes);
});
