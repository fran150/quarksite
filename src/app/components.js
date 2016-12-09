define(['quark',
    'json!./registration/components.json',
    'json!./registration/pages.json',
    ], function($$, components, pages) {

    $$.registerComponents(components);
    $$.registerComponents(pages);
});
