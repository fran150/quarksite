define(['quark'], function($$) {
    $$.onNamespace('layout')
        .register('main', 'pages/_layout/main');

    $$.onNamespace('navbar')
        .namespace('main')
            .register('left', 'pages/_navbar/main/left')
            .register('right', 'pages/_navbar/main/right')
        .endNamespace();

    $$.onNamespace('container')
        .register('simple', 'pages/_container/simple')
        .register('sidebar', 'pages/_container/sidebar');

    $$.onNamespace('sidebar')
        .register('component', 'pages/_sidebar/component')
        .register('docs', 'pages/_sidebar/docs');

    $$.onNamespace('pages')
        .register('home', 'pages/home')
        .namespace('library')
            .register('finder', 'pages/library/finder')
        .endNamespace()
        .namespace('docs')
            .register('home', 'pages/docs/home')
            .register('installing', 'pages/docs/installing')
            .namespace('basics')
                .register('intro', 'pages/docs/basics/intro')
                .register('web-modules', 'pages/docs/basics/web-modules')
                .register('web-components', 'pages/docs/basics/web-components')
                .register('bindings', 'pages/docs/basics/bindings')
                .register('observables', 'pages/docs/basics/observables')
                .register('component-params', 'pages/docs/basics/component-params')
                .register('scope', 'pages/docs/basics/scope')
                .register('imports', 'pages/docs/basics/imports')
                .register('pages', 'pages/docs/basics/pages')
                .register('routes', 'pages/docs/basics/routes')
                .register('controllers', 'pages/docs/basics/controllers')
                .register('sync', 'pages/docs/basics/sync')
                .register('behaviours', 'pages/docs/basics/behaviours')
                .register('namespaces', 'pages/docs/basics/namespaces')
                .register('content', 'pages/docs/basics/content')
                .register('virtual', 'pages/docs/basics/virtual')
                .register('ajax', 'pages/docs/basics/ajax')
                .register('modules', 'pages/docs/basics/modules')
                .register('validation', 'pages/docs/basics/validation')
            .endNamespace();

    $$.onNamespace('library')
        .register('finder', 'components/library/finder');

    $$.onNamespace('code')
        .register('highlight', 'components/code/highlight');

    $$.onNamespace('nav')
        .register('next-prev', 'components/nav/next-prev');

    $$.registerComponent('component-example', 'components/example/component');
    $$.registerComponent('other-example', 'components/example/other');
    $$.registerComponent('scope-example', 'components/example/scope');
    $$.registerComponent('validation-example', 'components/example/validation');

    $$.onNamespace('example')
        .register('content-no-params', 'components/example/content-no-params')
        .register('content-params', 'components/example/content-params');

});
