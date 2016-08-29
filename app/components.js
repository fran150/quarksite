define(['quark'], function($$) {
    $$.onNamespace('pages')
        .register('home', 'pages/home')
        .namespace('library')
            .register('finder', 'pages/library/finder')
            .register('module', 'pages/library/module')
        .endNamespace()
        .namespace('docs')
            .register("home", 'pages/docs/home');

    $$.onNamespace('layout')
        .register('single', 'pages/layouts/single')
        .register('docs', 'pages/layouts/docs')
        .register('sidebar', 'pages/layouts/sidebar');

    $$.onNamespace('library')
        .register('finder', 'components/library/finder')
});
