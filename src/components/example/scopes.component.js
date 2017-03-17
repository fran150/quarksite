define([
    'quark',
    'knockout',
    'text!./scopes.component.html'
], function($$, ko, template) {

    function ExampleScopesComponent(params, $scope) {
        var self = this;

        $scope.someObservable = ko.observable();
    }

    return $$.component(ExampleScopesComponent, template);
});
