define(['quark', 'knockout'], function($$, ko) {
    function StaticController() {
        var self = this;

        this.init = function() {
            self.parent.view(self.params.view())
        }

    }

    return StaticController;
})
