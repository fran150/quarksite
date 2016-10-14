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
});
