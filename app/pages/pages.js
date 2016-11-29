define(['quark'], function($$) {

    $$.onNamespace('layout')
        .register('main', 'pages/_layout/main');

    $$.onNamespace('navbar')
        .namespace('main')
            .register('left', 'pages/_navbar/main/left')
            .register('right', 'pages/_navbar/main/right')
        .endNamespace();

    $$.onNamespace('sidebar')
        .register('docs', 'pages/_sidebar/docs')
        .register('module', 'pages/_sidebar/module');

    $$.onNamespace('container')
        .register('simple', 'pages/_container/simple')
        .register('sidebar', 'pages/_container/sidebar');

    $$.onNamespace('pages')
        .register('home', 'pages/home')
        .namespace('library')
            .register('finder', 'pages/library/finder');
});
