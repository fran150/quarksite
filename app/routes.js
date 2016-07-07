define(['quark', 'knockout'], function($$, ko) {
    $$.routing.configure({
        'main': {
            config: {
                path: '/'
            },
            routes: {
                'main': {
                    hash: '',
                    controller: 'controllers/main',
                    components: {
                        main: 'test',
                        main2: 'test',
                        main3: 'errores'
                    }
                }
            }
        }
    });
});
