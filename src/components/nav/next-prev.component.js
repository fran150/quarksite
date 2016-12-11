define([
    'quark',
    'knockout',
    'text!./next-prev.component.html'
], function($$, ko, template) {

    function NavNextPrevComponent(params, $scope, $imports) {
        var self = this;

        $$.parameters({
            previousText: ko.observable(),
            previousPage: ko.observable(),
            previousParams: ko.observable(),
            nextText: ko.observable(),
            nextPage: ko.observable(),
            nextParams: ko.observable()
        }, params, this);
    }

    return $$.component(NavNextPrevComponent, template);
})
