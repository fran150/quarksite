define(['quark', 'knockout'], function($$, ko) {
    var pages = {
        'main':                                 {
                                                    'layout': 'layout-main',
                                                    'navbar-left': 'navbar-main-left',
                                                    'navbar-right': 'navbar-main-right',
                                                    'container': 'container-simple'
                                                },
        'main/home':                            { 'main': 'pages-home' },
        'main/library/finder':                  { 'main': 'pages-library-finder'},

        'main/docs':                            {
                                                    'sidebar': 'sidebar-docs',
                                                    'container': 'container-sidebar'
                                                },
        'main/docs/home':                       { 'main': 'pages-docs-home' },
        'main/docs/installing':                 { 'main': 'pages-docs-installing' },
        'main/docs/basics-intro':               { 'main': 'pages-docs-basics-intro' },
        'main/docs/basics-web-modules':         { 'main': 'pages-docs-basics-web-modules' },
        'main/docs/basics-web-components':      { 'main': 'pages-docs-basics-web-components' },
        'main/docs/basics-bindings':            { 'main': 'pages-docs-basics-bindings' },
        'main/docs/basics-observables':         { 'main': 'pages-docs-basics-observables' },
        'main/docs/basics-component-params':    { 'main': 'pages-docs-basics-component-params' },
        'main/docs/basics-scope':               { 'main': 'pages-docs-basics-scope' },
        'main/docs/basics-imports':             { 'main': 'pages-docs-basics-imports' },
        'main/docs/basics-pages':               { 'main': 'pages-docs-basics-pages' },
        'main/docs/basics-routes':              { 'main': 'pages-docs-basics-routes' },
        'main/docs/basics-controllers':         { 'main': 'pages-docs-basics-controllers' },
        'main/docs/basics-sync':                { 'main': 'pages-docs-basics-sync' },
        'main/docs/basics-behaviours':          { 'main': 'pages-docs-basics-behaviours' },
        'main/docs/basics-namespaces':          { 'main': 'pages-docs-basics-namespaces' },
        'main/docs/basics-content':             { 'main': 'pages-docs-basics-content' },
        'main/docs/basics-virtual':             { 'main': 'pages-docs-basics-virtual' },
        'main/docs/basics-ajax':                { 'main': 'pages-docs-basics-ajax' },
        'main/docs/basics-modules':             { 'main': 'pages-docs-basics-modules' },
        'main/docs/basics-validation':          { 'main': 'pages-docs-basics-validation' },


        'main/docs/refs-ajax':                  { 'main': 'pages-docs-refs-ajax' },
        'main/docs/refs-ajaxConfig':            { 'main': 'pages-docs-refs-ajaxConfig' },
        'main/docs/refs-ajaxErrorHandlers':     { 'main': 'pages-docs-refs-ajaxErrorHandlers' },

        'main/docs/refs-format':                { 'main': 'pages-docs-refs-format' },
        'main/docs/refs-formatters':            { 'main': 'pages-docs-refs-formatters' },

        'main/docs/refs-lock':                  { 'main': 'pages-docs-refs-lock' },
        'main/docs/refs-wait':                  { 'main': 'pages-docs-refs-wait' },
        'main/docs/refs-synclock':              { 'main': 'pages-docs-refs-synclock' },
        'main/docs/refs-synclock-lock':         { 'main': 'pages-docs-refs-synclock-lock' },
        'main/docs/refs-synclock-unlock':       { 'main': 'pages-docs-refs-synclock-unlock' },
        'main/docs/refs-synclock-islocked':     { 'main': 'pages-docs-refs-synclock-islocked' },
        'main/docs/refs-synclock-force':        { 'main': 'pages-docs-refs-synclock-force' },
        'main/docs/refs-synclock-dispose':      { 'main': 'pages-docs-refs-synclock-dispose' },
        'main/docs/refs-signal':                { 'main': 'pages-docs-refs-signal' },
        'main/docs/refs-signalclear':           { 'main': 'pages-docs-refs-signalclear' },

        'main/docs/refs-routing-href':          { 'main': 'pages-docs-refs-routing-href' },
        'main/docs/refs-routing-redirecthash':  { 'main': 'pages-docs-refs-routing-redirecthash' },

        'main/docs/refs-bindings-onbind':       { 'main': 'pages-docs-refs-bindings-onbind' },

        'main/docs/refs-tracking-waitready':    { 'main': 'pages-docs-refs-tracking-waitready' },

        'main/docs/refs-associative':           { 'main': 'pages-docs-refs-associative' },
        'main/docs/refs-associative-add':       { 'main': 'pages-docs-refs-associative-add' },
        'main/docs/refs-associative-get':       { 'main': 'pages-docs-refs-associative-get' },
        'main/docs/refs-associative-update':    { 'main': 'pages-docs-refs-associative-update' },
        'main/docs/refs-associative-remove':    { 'main': 'pages-docs-refs-associative-remove' },
        'main/docs/refs-associative-array':     { 'main': 'pages-docs-refs-associative-array' },
        'main/docs/refs-associative-each':      { 'main': 'pages-docs-refs-associative-each' },
        'main/docs/refs-associative-subscribe': { 'main': 'pages-docs-refs-associative-subscribe' },

        'main/docs/refs-knockout-refresh':              { 'main': 'pages-docs-refs-knockout-refresh' },
        'main/docs/refs-knockout-isobservablearray':    { 'main': 'pages-docs-refs-knockout-isobservablearray' },
        'main/docs/refs-knockout-iscomputed':           { 'main': 'pages-docs-refs-knockout-iscomputed' },
        'main/docs/refs-knockout-maptojs':              { 'main': 'pages-docs-refs-knockout-maptojs' },
        'main/docs/refs-knockout-mapfromjs':            { 'main': 'pages-docs-refs-knockout-mapfromjs' },

        'main/docs/refs-utils-isdefined':               { 'main': 'pages-docs-refs-utils-isdefined' },
        'main/docs/refs-utils-isstring':                { 'main': 'pages-docs-refs-utils-isstring' },
        'main/docs/refs-utils-isint':                   { 'main': 'pages-docs-refs-utils-isint' },
        'main/docs/refs-utils-canbeint':                { 'main': 'pages-docs-refs-utils-canbeint' },
        'main/docs/refs-utils-isnumeric':               { 'main': 'pages-docs-refs-utils-isnumeric' },
        'main/docs/refs-utils-isdecimal':               { 'main': 'pages-docs-refs-utils-isdecimal' },
        'main/docs/refs-utils-isarray':                 { 'main': 'pages-docs-refs-utils-isarray' },
        'main/docs/refs-utils-isobject':                { 'main': 'pages-docs-refs-utils-isobject' },
        'main/docs/refs-utils-isfunction':              { 'main': 'pages-docs-refs-utils-isfunction' },
        'main/docs/refs-utils-isdate':                  { 'main': 'pages-docs-refs-utils-isdate' },
        'main/docs/refs-utils-isvaliddate':             { 'main': 'pages-docs-refs-utils-isvaliddate' },
        'main/docs/refs-utils-clone':                   { 'main': 'pages-docs-refs-utils-clone' },
        'main/docs/refs-utils-cloneobservable':         { 'main': 'pages-docs-refs-utils-cloneobservable' },
        'main/docs/refs-utils-clonemixed':              { 'main': 'pages-docs-refs-utils-clonemixed' },
        'main/docs/refs-utils-call':                    { 'main': 'pages-docs-refs-utils-call' },
        'main/docs/refs-utils-makedate':                { 'main': 'pages-docs-refs-utils-makedate' },
        'main/docs/refs-utils-toshortiso':              { 'main': 'pages-docs-refs-utils-toshortiso' },
        'main/docs/refs-utils-clear':                   { 'main': 'pages-docs-refs-utils-clear' },
        'main/docs/refs-utils-undefine':                { 'main': 'pages-docs-refs-utils-undefine' },
        'main/docs/refs-utils-formatstring':            { 'main': 'pages-docs-refs-utils-formatstring' },

        'main/docs/refs-validation-validators':                     { 'main': 'pages-docs-refs-validation-validators' },
        'main/docs/refs-validation-validate':                       { 'main': 'pages-docs-refs-validation-validate' },
        'main/docs/refs-validation-unsubscribevalidation':          { 'main': 'pages-docs-refs-validation-unsubscribevalidation' },
        'main/docs/refs-validation-validationreset':                { 'main': 'pages-docs-refs-validation-validationreset' },
        'main/docs/refs-validation-observable-validation':          { 'main': 'pages-docs-refs-validation-observable-validation' },
        'main/docs/refs-validation-observable-validationreset':     { 'main': 'pages-docs-refs-validation-observable-validationreset' },
        'main/docs/refs-validation-observable-validate':            { 'main': 'pages-docs-refs-validation-observable-validate' },
        'main/docs/refs-validation-observable-haserror':            { 'main': 'pages-docs-refs-validation-observable-haserror' },
        'main/docs/refs-validation-observable-validationmessage':   { 'main': 'pages-docs-refs-validation-observable-validationmessage' },
        'main/docs/refs-validation-formgrouperror':                 { 'main': 'pages-docs-refs-validation-formgrouperror' },
        'main/docs/refs-validation-fielderror':                     { 'main': 'pages-docs-refs-validation-fielderror' },

        'main/docs/refs-web-redirect':                 { 'main': 'pages-docs-refs-web-redirect' },
        'main/docs/refs-web-getparam':                 { 'main': 'pages-docs-refs-web-getparam' },
        'main/docs/refs-web-replaceandbind':           { 'main': 'pages-docs-refs-web-replaceandbind' },
        'main/docs/refs-web-htmlencode':               { 'main': 'pages-docs-refs-web-htmlencode' },
        'main/docs/refs-web-htmldecode':               { 'main': 'pages-docs-refs-web-htmldecode' },
        'main/docs/refs-web-limittext':                { 'main': 'pages-docs-refs-web-limittext' },
        'main/docs/refs-web-setcookie':                { 'main': 'pages-docs-refs-web-setcookie' },
        'main/docs/refs-web-getcookie':                { 'main': 'pages-docs-refs-web-getcookie' },
        'main/docs/refs-web-clearcookie':              { 'main': 'pages-docs-refs-web-clearcookie' },
        'main/docs/refs-web-loadcss':                  { 'main': 'pages-docs-refs-web-loadcss' },

        'main/docs/refs-behaviours-define':            { 'main': 'pages-docs-refs-behaviours-define' },
        'main/docs/refs-behaviours-apply':             { 'main': 'pages-docs-refs-behaviours-apply' },
        'main/docs/refs-behaviours-has':               { 'main': 'pages-docs-refs-behaviours-has' },
        'main/docs/refs-behaviours-dispose':           { 'main': 'pages-docs-refs-behaviours-dispose' },

        'main/docs/refs-content-content':              { 'main': 'pages-docs-refs-content-content' },
        'main/docs/refs-content-hascontent':           { 'main': 'pages-docs-refs-content-hascontent' },
        'main/docs/refs-content-hasnotcontent':        { 'main': 'pages-docs-refs-content-hasnotcontent' },

        'main/docs/refs-core-modules':                 { 'main': 'pages-docs-refs-core-modules' },
        'main/docs/refs-core-module':                 { 'main': 'pages-docs-refs-core-module' },
        'main/docs/refs-core-start':                   { 'main': 'pages-docs-refs-core-start' },
        'main/docs/refs-core-modulemain':              { 'main': 'pages-docs-refs-core-modulemain' },
        'main/docs/refs-core-component':               { 'main': 'pages-docs-refs-core-component' },
        'main/docs/refs-core-parameters':              { 'main': 'pages-docs-refs-core-parameters' },
        'main/docs/refs-core-inject':                  { 'main': 'pages-docs-refs-core-inject' },
        'main/docs/refs-core-emptytemplate':           { 'main': 'pages-docs-refs-core-emptytemplate' },
        'main/docs/refs-core-registercomponent':       { 'main': 'pages-docs-refs-core-registercomponent' },
        'main/docs/refs-core-onnamespace':             { 'main': 'pages-docs-refs-core-onnamespace' }
    }

    var routes = {
        'main/home':                            '',
        'main/library/finder':                  'component/finder',

        'main/docs/home':                       'docs',
        'main/docs/installing':                 'docs/installing',
        'main/docs/basics-intro':               'docs/basics',
        'main/docs/basics-web-modules':         'docs/basics/webmodules',
        'main/docs/basics-web-components':      'docs/basics/webcomponents',
        'main/docs/basics-bindings':            'docs/basics/bindings',
        'main/docs/basics-observables':         'docs/basics/observables',
        'main/docs/basics-component-params':    'docs/basics/component-params',
        'main/docs/basics-scope':               'docs/basics/scope',
        'main/docs/basics-imports':             'docs/basics/imports',
        'main/docs/basics-pages':               'docs/basics/pages',
        'main/docs/basics-routes':              'docs/basics/routes',
        'main/docs/basics-controllers':         'docs/basics/controllers',
        'main/docs/basics-sync':                'docs/basics/sync',
        'main/docs/basics-behaviours':          'docs/basics/behaviours',
        'main/docs/basics-namespaces':          'docs/basics/namespaces',
        'main/docs/basics-content':             'docs/basics/content',
        'main/docs/basics-virtual':             'docs/basics/virtual',
        'main/docs/basics-ajax':                'docs/basics/ajax',
        'main/docs/basics-modules':             'docs/basics/modules',
        'main/docs/basics-validation':          'docs/basics/validation',


        'main/docs/refs-ajax':                  'docs/refs/ajax',
        'main/docs/refs-ajaxConfig':            'docs/refs/ajaxConfig',
        'main/docs/refs-ajaxErrorHandlers':     'docs/refs/ajaxErrorHandlers',
        'main/docs/refs-ajaxErrorHandlers':     'docs/refs/ajaxErrorHandlers',

        'main/docs/refs-format':                'docs/refs/format',
        'main/docs/refs-formatters':            'docs/refs/formatters',

        'main/docs/refs-lock':                  'docs/refs/lock',
        'main/docs/refs-wait':                  'docs/refs/wait',
        'main/docs/refs-synclock':              'docs/refs/synclock',
        'main/docs/refs-synclock-lock':         'docs/refs/synclock/lock',
        'main/docs/refs-synclock-unlock':       'docs/refs/synclock/unlock',
        'main/docs/refs-synclock-islocked':     'docs/refs/synclock/islocked',
        'main/docs/refs-synclock-force':        'docs/refs/synclock/force',
        'main/docs/refs-synclock-dispose':      'docs/refs/synclock/dispose',
        'main/docs/refs-signal':                'docs/refs/signal',
        'main/docs/refs-signalclear':           'docs/refs/signalclear',

        'main/docs/refs-routing-href':          'docs/refs/href',
        'main/docs/refs-routing-redirecthash':  'docs/refs/redirecthash',

        'main/docs/refs-bindings-onbind':       'docs/refs/onbind',

        'main/docs/refs-tracking-waitready':    'docs/refs/waitready',

        'main/docs/refs-associative':           'docs/refs/associative',
        'main/docs/refs-associative-add':       'docs/refs/associative/add',
        'main/docs/refs-associative-get':       'docs/refs/associative/get',
        'main/docs/refs-associative-update':    'docs/refs/associative/update',
        'main/docs/refs-associative-remove':    'docs/refs/associative/remove',
        'main/docs/refs-associative-array':     'docs/refs/associative/array',
        'main/docs/refs-associative-each':      'docs/refs/associative/each',
        'main/docs/refs-associative-subscribe': 'docs/refs/associative/subscribe',

        'main/docs/refs-knockout-refresh':              'docs/refs/knockout/refresh',
        'main/docs/refs-knockout-isobservablearray':    'docs/refs/knockout/isobservablearray',
        'main/docs/refs-knockout-iscomputed':           'docs/refs/knockout/iscomputed',
        'main/docs/refs-knockout-maptojs':              'docs/refs/knockout/maptojs',
        'main/docs/refs-knockout-mapfromjs':            'docs/refs/knockout/mapfromjs',

        'main/docs/refs-utils-isdefined':               'docs/refs/utils/isdefined',
        'main/docs/refs-utils-isstring':                'docs/refs/utils/isstring',
        'main/docs/refs-utils-isint':                   'docs/refs/utils/isint',
        'main/docs/refs-utils-canbeint':                'docs/refs/utils/canbeint',
        'main/docs/refs-utils-isnumeric':               'docs/refs/utils/isnumeric',
        'main/docs/refs-utils-isdecimal':               'docs/refs/utils/isdecimal',
        'main/docs/refs-utils-isarray':                 'docs/refs/utils/isarray',
        'main/docs/refs-utils-isobject':                'docs/refs/utils/isobject',
        'main/docs/refs-utils-isfunction':              'docs/refs/utils/isfunction',
        'main/docs/refs-utils-isdate':                  'docs/refs/utils/isdate',
        'main/docs/refs-utils-isvaliddate':             'docs/refs/utils/isvaliddate',
        'main/docs/refs-utils-clone':                   'docs/refs/utils/clone',
        'main/docs/refs-utils-cloneobservable':         'docs/refs/utils/cloneobservable',
        'main/docs/refs-utils-clonemixed':              'docs/refs/utils/clonemixed',
        'main/docs/refs-utils-call':                    'docs/refs/utils/call',
        'main/docs/refs-utils-makedate':                'docs/refs/utils/makedate',
        'main/docs/refs-utils-toshortiso':              'docs/refs/utils/toshortiso',
        'main/docs/refs-utils-clear':                   'docs/refs/utils/clear',
        'main/docs/refs-utils-undefine':                'docs/refs/utils/undefine',
        'main/docs/refs-utils-formatstring':            'docs/refs/utils/formatstring',

        'main/docs/refs-validation-validators':                     'docs/refs/validation/validators',
        'main/docs/refs-validation-validate':                       'docs/refs/validation/validate',
        'main/docs/refs-validation-unsubscribevalidation':          'docs/refs/validation/unsubscribevalidation',
        'main/docs/refs-validation-validationreset':                'docs/refs/validation/validationreset',
        'main/docs/refs-validation-observable-validation':          'docs/refs/validation/observable/validation',
        'main/docs/refs-validation-observable-validationreset':     'docs/refs/validation/observable/validationreset',
        'main/docs/refs-validation-observable-validate':            'docs/refs/validation/observable/validate',
        'main/docs/refs-validation-observable-haserror':            'docs/refs/validation/observable/haserror',
        'main/docs/refs-validation-observable-validationmessage':   'docs/refs/validation/observable/validationmessage',
        'main/docs/refs-validation-formgrouperror':                 'docs/refs/validation/formgrouperror',
        'main/docs/refs-validation-fielderror':                     'docs/refs/validation/fielderror',

        'main/docs/refs-web-redirect':                 'docs/refs/web/redirect',
        'main/docs/refs-web-getparam':                 'docs/refs/web/getparam',
        'main/docs/refs-web-replaceandbind':           'docs/refs/web/replaceandbind',
        'main/docs/refs-web-htmlencode':               'docs/refs/web/htmlencode',
        'main/docs/refs-web-htmldecode':               'docs/refs/web/htmldecode',
        'main/docs/refs-web-limittext':                'docs/refs/web/limittext',
        'main/docs/refs-web-getcookie':                'docs/refs/web/getcookie',
        'main/docs/refs-web-setcookie':                'docs/refs/web/setcookie',
        'main/docs/refs-web-clearcookie':              'docs/refs/web/clearcookie',
        'main/docs/refs-web-loadcss':                  'docs/refs/web/loadcss',

        'main/docs/refs-behaviours-define':            'docs/refs/behaviour/define',
        'main/docs/refs-behaviours-apply':             'docs/refs/behaviour/apply',
        'main/docs/refs-behaviours-has':               'docs/refs/behaviour/has',
        'main/docs/refs-behaviours-dispose':           'docs/refs/behaviour/dispose',

        'main/docs/refs-content-content':              'docs/refs/content/content',
        'main/docs/refs-content-hascontent':           'docs/refs/content/hascontent',
        'main/docs/refs-content-hasnotcontent':        'docs/refs/content/hasnotcontent',

        'main/docs/refs-core-modules':                 'docs/refs/core/modules',
        'main/docs/refs-core-module':                  'docs/refs/core/module',
        'main/docs/refs-core-start':                   'docs/refs/core/start',
        'main/docs/refs-core-modulemain':              'docs/refs/core/modulemain',
        'main/docs/refs-core-component':               'docs/refs/core/component',
        'main/docs/refs-core-parameters':              'docs/refs/core/parameters',
        'main/docs/refs-core-inject':                  'docs/refs/core/inject',
        'main/docs/refs-core-emptytemplate':           'docs/refs/core/emptytemplate',
        'main/docs/refs-core-registercomponent':       'docs/refs/core/registercomponent',
        'main/docs/refs-core-onnamespace':             'docs/refs/core/onnamespace',

        'main/sidebar/module':                  'components/library/{id}'
    }

    $$.routing.pages(pages);
    $$.routing.mapRoute(routes);
});
