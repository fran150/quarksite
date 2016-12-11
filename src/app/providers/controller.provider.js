define([
    'quark'
], function($$) {

    // Get the default provider
    var defaultProvider = $$.controllerProvider;

    // Overwrite default controller provider
    $$.controllerProvider = function(page, success, error) {
        // If the page is a subpage of main/docs use the StaticController, if not use the default provider
        if (page.startsWith('main/docs/')) {
            require(['controllers/main/docs/static.controller'], function(StaticController) {
                success(StaticController);
            }, error);
        } else {
            defaultProvider(page, success, error);
        }
    }
});
