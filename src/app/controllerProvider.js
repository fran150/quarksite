define(['quark'], function($$) {
    var defaultProvider = $$.controllerProvider;

    $$.controllerProvider = function(page, success, error) {
        if (page.startsWith('main/docs/')) {
            require(['../controllers/static'], function(StaticController) {
                success(StaticController);
            }, error);
        } else {
            defaultProvider(page, success, error);
        }
    }
});
