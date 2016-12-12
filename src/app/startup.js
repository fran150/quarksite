define([
    'knockout',
    'quark',
    'json!./config/components/components.config.json',
    'json!./config/components/screens.config.json',
    'json!./config/routing/pages.config.json',
    'json!./config/routing/params.config.json',
    'json!./config/routing/routes.config.json',
    './providers/controller.provider',
    './validators/required.validator',
    'bootstrap',
    'qk-alchemy/main',
    'loadCss!font-awesome/css',
    'loadCss!bootstrap/css',
    'loadCss!../css/main'
], function(ko, $$, components, screens, pages, params, routes) {
    // Register all components and screens
    $$.registerComponents(components);
    $$.registerComponents(screens);

    // Configure the routing system
    $$.routing.pages(pages, params);
    $$.routing.mapRoute(routes);

    // Start Quark Application
    $$.routing.activateHasher();
    $$.start();
});
