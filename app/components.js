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
                .register('observables', 'pages/docs/basics/observables')
                .register('component-params', 'pages/docs/basics/component-params')
                .register('bindings', 'pages/docs/basics/bindings')
                .register('pages', 'pages/docs/basics/pages')
                .register('controllers', 'pages/docs/basics/controllers')
                .register('routes', 'pages/docs/basics/routes')
            .endNamespace();


    $$.onNamespace('library')
        .register('finder', 'components/library/finder');

    $$.onNamespace('code')
        .register('highlight', 'components/code/highlight');

    $$.onNamespace('nav')
        .register('next-prev', 'components/nav/next-prev');
});
