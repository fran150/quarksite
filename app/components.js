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
            .endNamespace();


    $$.onNamespace('library')
        .register('finder', 'components/library/finder');

    $$.onNamespace('code')
        .register('highlight', 'components/code/highlight')


/*    $$.onNamespace('pages')
        .register('home', 'pages/home')
        .namespace('library')
            .register('finder', 'pages/library/finder')
            .register('module', 'pages/library/module')
        .endNamespace()
        .namespace('docs')
            .register("home", 'pages/docs/home');

    $$.onNamespace('navbar')
        .namespace('main')
            .register('left', 'pages/navbar/main-left')
            .register('right', 'pages/navbar/main-right');

    $$.onNamespace('layout')
        .register('single', 'pages/layouts/single')
        .register('docs', 'pages/layouts/docs')
        .register('sidebar', 'pages/layouts/sidebar');

    $$.onNamespace('library')
        .register('finder', 'components/library/finder')
        .register('test', 'components/library/test')
        .register('test2', 'components/library/test2')*/
});
