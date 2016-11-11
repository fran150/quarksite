define(['quark'], function($$) {
    $$.onNamespace('layout')
        .register('main', 'pages/_layout/main');

    $$.onNamespace('navbar')
        .namespace('main')
            .register('left', 'pages/_navbar/main/left')
            .register('right', 'pages/_navbar/main/right')
        .endNamespace();

    $$.onNamespace('container')
        .register('simple', 'pages/_container/simple')
        .register('sidebar', 'pages/_container/sidebar');

    $$.onNamespace('sidebar')
        .register('component', 'pages/_sidebar/component')
        .register('docs', 'pages/_sidebar/docs');

    $$.onNamespace('pages')
        .register('home', 'pages/home')
        .namespace('library')
            .register('finder', 'pages/library/finder')
        .endNamespace()
        .namespace('docs')
            .register('home', 'pages/docs/home')
            .register('installing', 'pages/docs/installing')
            .namespace('basics')
                .register('intro', 'pages/docs/basics/intro')
                .register('web-modules', 'pages/docs/basics/web-modules')
                .register('web-components', 'pages/docs/basics/web-components')
                .register('bindings', 'pages/docs/basics/bindings')
                .register('observables', 'pages/docs/basics/observables')
                .register('component-params', 'pages/docs/basics/component-params')
                .register('scope', 'pages/docs/basics/scope')
                .register('imports', 'pages/docs/basics/imports')
                .register('pages', 'pages/docs/basics/pages')
                .register('routes', 'pages/docs/basics/routes')
                .register('controllers', 'pages/docs/basics/controllers')
                .register('sync', 'pages/docs/basics/sync')
                .register('behaviours', 'pages/docs/basics/behaviours')
                .register('namespaces', 'pages/docs/basics/namespaces')
                .register('content', 'pages/docs/basics/content')
                .register('virtual', 'pages/docs/basics/virtual')
                .register('ajax', 'pages/docs/basics/ajax')
                .register('modules', 'pages/docs/basics/modules')
                .register('validation', 'pages/docs/basics/validation')
            .endNamespace()
            .namespace('refs')
                .register('ajax', 'pages/docs/refs/ajax/ajax')
                .register('ajaxConfig', 'pages/docs/refs/ajax/ajaxConfig')
                .register('ajaxErrorHandlers', 'pages/docs/refs/ajax/ajaxErrorHandlers')

                .register('format', 'pages/docs/refs/formatter/format')
                .register('formatters', 'pages/docs/refs/formatter/formatters')

                .register('lock', 'pages/docs/refs/sync/lock')
                .register('wait', 'pages/docs/refs/sync/wait')
                .register('synclock', 'pages/docs/refs/sync/synclock')
                .namespace('synclock')
                    .register('lock', 'pages/docs/refs/sync/lock/lock')
                    .register('unlock', 'pages/docs/refs/sync/lock/unlock')
                    .register('force', 'pages/docs/refs/sync/lock/force')
                    .register('islocked', 'pages/docs/refs/sync/lock/islocked')
                    .register('dispose', 'pages/docs/refs/sync/lock/dispose')
                .endNamespace()
                .register('signal', 'pages/docs/refs/sync/signal')
                .register('signalclear', 'pages/docs/refs/sync/signalClear')

                .namespace('routing')
                    .register('href', 'pages/docs/refs/routing/href')
                .endNamespace()

                .namespace('bindings')
                    .register('onbind', 'pages/docs/refs/bindings/onbind')
                .endNamespace()

                .namespace('tracking')
                    .register('waitready', 'pages/docs/refs/tracking/waitready')
                .endNamespace()

                .register('associative', 'pages/docs/refs/associative/associative')
                .namespace('associative')
                    .register('add', 'pages/docs/refs/associative/observable/add')
                    .register('get', 'pages/docs/refs/associative/observable/get')
                    .register('update', 'pages/docs/refs/associative/observable/update')
                    .register('remove', 'pages/docs/refs/associative/observable/remove')
                    .register('array', 'pages/docs/refs/associative/observable/array')
                    .register('each', 'pages/docs/refs/associative/observable/each')
                    .register('subscribe', 'pages/docs/refs/associative/observable/subscribe')
                .endNamespace()

                .namespace('knockout')
                    .register('refresh', 'pages/docs/refs/knockout/refresh')
                    .register('isobservablearray', 'pages/docs/refs/knockout/isobservablearray')
                    .register('iscomputed', 'pages/docs/refs/knockout/iscomputed')
                    .register('maptojs', 'pages/docs/refs/knockout/maptojs')
                    .register('mapfromjs', 'pages/docs/refs/knockout/mapfromjs')
                .endNamespace()

                .namespace('utils')
                    .register('isdefined', 'pages/docs/refs/utils/isdefined')
                    .register('isstring', 'pages/docs/refs/utils/isstring')
                    .register('isint', 'pages/docs/refs/utils/isint')
                    .register('canbeint', 'pages/docs/refs/utils/canbeint')
                    .register('isnumeric', 'pages/docs/refs/utils/isnumeric')
                    .register('isdecimal', 'pages/docs/refs/utils/isdecimal')
                    .register('isarray', 'pages/docs/refs/utils/isarray')
                    .register('isobject', 'pages/docs/refs/utils/isobject')
                    .register('isfunction', 'pages/docs/refs/utils/isfunction')
                    .register('isdate', 'pages/docs/refs/utils/isdate')
                    .register('isvaliddate', 'pages/docs/refs/utils/isvaliddate')
                    .register('clone', 'pages/docs/refs/utils/clone')
                    .register('cloneobservable', 'pages/docs/refs/utils/cloneobservable')
                    .register('clonemixed', 'pages/docs/refs/utils/clonemixed')
                    .register('call', 'pages/docs/refs/utils/call')
                    .register('makedate', 'pages/docs/refs/utils/makedate')
                    .register('toshortiso', 'pages/docs/refs/utils/toshortiso')
                    .register('clear', 'pages/docs/refs/utils/clear')
                    .register('undefine', 'pages/docs/refs/utils/undefine')
                    .register('formatstring', 'pages/docs/refs/utils/formatstring')
                .endNamespace()

            .endNamespace();

    $$.onNamespace('library')
        .register('finder', 'components/library/finder');

    $$.onNamespace('code')
        .register('highlight', 'components/code/highlight');

    $$.onNamespace('nav')
        .register('next-prev', 'components/nav/next-prev');

    $$.registerComponent('component-example', 'components/example/component');
    $$.registerComponent('other-example', 'components/example/other');
    $$.registerComponent('scope-example', 'components/example/scope');
    $$.registerComponent('validation-example', 'components/example/validation');

    $$.onNamespace('example')
        .register('content-no-params', 'components/example/content-no-params')
        .register('content-params', 'components/example/content-params');

});
