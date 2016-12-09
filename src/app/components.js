define(['quark',
       './pages/pages',
       './pages/pages-docs',
       './pages/pages-docs-basics',
       './pages/pages-docs-refs',
       './pages/pages-library'
       ], function($$) {

    $$.onNamespace('library')
        .namespace('finder')
            .register('form', 'components/library/finder/form')
            .register('results', 'components/library/finder/results');

    $$.onNamespace('code')
        .register('highlight', 'components/code/highlight');

    $$.onNamespace('nav')
        .register('next-prev', 'components/nav/next-prev');

    $$.onNamespace('example')
        .register('component', 'components/example/component')
        .register('other', 'components/example/other')
        .register('scope', 'components/example/scope')
        .register('validation', 'components/example/validation')
        .register('content-no-params', 'components/example/content-no-params')
        .register('content-params', 'components/example/content-params');

});
