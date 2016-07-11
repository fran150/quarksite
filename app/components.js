define(['quark'], function($$) {
    $$.onNamespace('pages')
        .register('navbar', 'pages/navbar');

    $$.onNamespace('pages-library')
        .register('finder', 'pages/library/finder');


    $$.onNamespace('layout')
        .register('single', 'pages/layouts/single');


    $$.onNamespace('library-finder')
        .register('editor', 'components/library/finder/editor')
        .register('results', 'components/library/finder/results')

    $$.registerComponent('test', 'components/test');
    $$.registerComponent('errores', 'components/errores');
});
