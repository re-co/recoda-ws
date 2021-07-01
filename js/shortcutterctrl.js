
! function(e) {
jQuery(document).ready(function () {    
        function o(o) {

            // Stop event processing if it is repeating
            if (o.originalEvent.repeat) {
                return;
            }

            // Stop event processing if Control or Command keys are inactive
            if (!o.ctrlKey) {
                return;
            }
            if (!o.metaKey) {
                return;
            }
            if (o.altKey) {
                return;
            }
            if (o.shiftKey){
                return;
            }

            // Stop event processing if active is textarea or input
            if (document.activeElement.tagName === "TEXTAREA"){return;}
            if (document.activeElement.tagName === "INPUT"){return;}

             // Stop event processing if content editor is active
            if (document.activeElement.hasAttribute("contenteditable", "true") == true){return;}
            if (angular.element("#ct-controller-ui").scope().isActiveActionTab('contentEditing')) {return;}

            var component_id = angular.element("#ct-controller-ui").scope().iframeScope.component.active.id;
            var parent_id = angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.id;
            var processed = false;
        switch (String.fromCharCode(o.which).toLowerCase()) {
          
            case "d":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.duplicateComponent();
                processed = true;
                break;
            case "h":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().switchTab('sidePanel','History')
                processed = true;
                break;
            case "r":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.setEditableFriendlyName(component_id);
                processed = true;
                break;                       
            case "y":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.removeActiveComponent()
                break;
        }

        if (processed) {
            o.stopImmediatePropagation();
        }

    }

    
    e(window).bind("keydown", function(e) {
        (e.ctrlKey || e.metaKey)  && o(e)
    }), e(document).ready(function() {
        e("#ct-artificial-viewport").load(function() {
            e(this).contents().bind("keydown", function(e) {
                (e.ctrlKey || e.metaKey)  && o(e)
            })
        })
    });

});
}(jQuery);