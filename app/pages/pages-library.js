define(['quark'], function($$) {
    $$.onNamespace('pages')
        .namespace('library')
            .register('finder', 'pages/library/finder')
            .register('module', 'pages/library/module')
            .register('component', 'pages/library/component');
});
