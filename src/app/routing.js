define(['quark',
    'json!./routing/pages.json',
    'json!./routing/params.json',
    'json!./routing/routes.json'
    ], function($$, pages, params, routes) {

    $$.routing.pages(pages, params);
    $$.routing.mapRoute(routes);
});
