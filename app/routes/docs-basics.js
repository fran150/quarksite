define(['quark', 'knockout'], function($$, ko) {
    var pages = {
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
        'main/docs/basics-bootstraping':        { 'main': 'pages-docs-basics-bootstraping' },
        'main/docs/basics-sync':                { 'main': 'pages-docs-basics-sync' },
        'main/docs/basics-behaviours':          { 'main': 'pages-docs-basics-behaviours' },
        'main/docs/basics-namespaces':          { 'main': 'pages-docs-basics-namespaces' },
        'main/docs/basics-content':             { 'main': 'pages-docs-basics-content' },
        'main/docs/basics-virtual':             { 'main': 'pages-docs-basics-virtual' },
        'main/docs/basics-ajax':                { 'main': 'pages-docs-basics-ajax' },
        'main/docs/basics-modules':             { 'main': 'pages-docs-basics-modules' },
        'main/docs/basics-validation':          { 'main': 'pages-docs-basics-validation' }
    }

    var routes = {
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
        'main/docs/basics-bootstraping':        'docs/basics/bootstraping',
        'main/docs/basics-sync':                'docs/basics/sync',
        'main/docs/basics-behaviours':          'docs/basics/behaviours',
        'main/docs/basics-namespaces':          'docs/basics/namespaces',
        'main/docs/basics-content':             'docs/basics/content',
        'main/docs/basics-virtual':             'docs/basics/virtual',
        'main/docs/basics-ajax':                'docs/basics/ajax',
        'main/docs/basics-modules':             'docs/basics/modules',
        'main/docs/basics-validation':          'docs/basics/validation'
    }

    $$.routing.pages(pages);
    $$.routing.mapRoute(routes);
});
