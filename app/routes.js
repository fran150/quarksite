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
                'home': {
                    hash: '',
                    controller: 'controllers/home',
                    components: {
                        layout: '!layout-single',
                        main: 'pages-home'
                    }
                },
                'docs/home': {
                    hash: 'docs',
                    controller: 'controllers/docs/home',
                    components: {
                        layout: '!layout-docs',
                        main: 'pages-docs-home'
                    }
                },
                'components/library': {
                    hash: 'components/library',
                    controller: 'controllers/library/finder',
                    components: {
                        layout: '!layout-single',
                        main: 'pages-library-finder'
                    }
                },
                'components/library/module': {
                    hash: 'components/library/module/{bowerId}',
                    controller: 'controllers/library/module',
                    components: {
                        layout: 'layout-sidebar',
                        main: 'pages-library-module'
                    }
                }
            }
        }
    });
});
