define(['quark', 'knockout'], function() {
    return function(route, $imports) {
        $imports.configPage = function(name) {
            switch (name) {
                case 'navbar':
                    return {
                        html: 'Quark.js'
                    }
                    break;
                default:

            }
        }
    }
});
