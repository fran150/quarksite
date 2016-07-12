define(['quark', 'knockout'], function($$, ko) {
    $$.routing.configure({
        'main': {
            config: {
                path: '/'
            },
            defaults: {
                navbar: '!pages-navbar',
            },
            routes: {
                'main': {
                    hash: '',
                    controller: 'controllers/main',
                    components: {
                        layout: 'layout-single',
                        main: 'test'
                    }
                },
                'components/library': {
                    hash: 'components/library',
                    controller: 'controllers/library/finder',
                    components: {
                        layout: 'layout-single',
                        main: 'pages-library-finder'
                    }
                },
                'components/library/module': {
                    hash: 'components/library/module/{bowerId}',
                    controller: 'controllers/library/module',
                    components: {
                        layout: 'layout-single',
                        main: 'test'
                    }
                }
            }
        }
    });
});
