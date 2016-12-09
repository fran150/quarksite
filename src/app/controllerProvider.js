define(['quark'], function($$) {
    var defaultProvider = $$.controllerProvider;

    $$.controllerProvider = function(page, success, error) {
        if (page.startsWith('main/docs/')) {
            success(function() {});
        } else {
            defaultProvider(page, success, error);
        }
    }
});
