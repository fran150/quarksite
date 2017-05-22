define([
    'quark', 
    'knockout', 
    'text!./finder.screen.html',
    'service!ModulesService'
], function($$, ko, template) {
    
    function LibraryFinderScreen(params, $scope, $imports, $context) {
        var self = this;

        var service = $context.get('ModulesService');

        $$.parameters({
            text: ko.observable()
        }, params, this);

        $scope.ajaxMessage = service.ajaxMessage;
        $scope.data = service.modules;

        this.search = function() {
            service.search(self.text());
        }
    }

    return $$.component(LibraryFinderScreen, template);
});
