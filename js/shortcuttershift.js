
! function(e) {
jQuery(document).ready(function () {    

        function o(o) {

            // Stop event processing if it is repeating
            if (o.originalEvent.repeat) {
                return;
            }

            // Stop event processing if Control or Command keys are inactive
            if (o.ctrlKey) {
                return;
            }
            if (o.metaKey) {
                return;
            }
            if (o.altKey) {
                return;
            }
            if (!o.shiftKey){
                return;
            }

            // Stop event processing if it's target is not the body element
            if (document.activeElement.tagName === "TEXTAREA"){return;}
            if (document.activeElement.tagName === "INPUT"){
                return;
            }
            // Stop event processing if content editor is active
            if (document.activeElement.hasAttribute("contenteditable", "true") == true){return;}
            if (angular.element("#ct-controller-ui").scope().isActiveActionTab('contentEditing')) {return;}
            
            var component_id = angular.element("#ct-controller-ui").scope().iframeScope.component.active.id;
            var parent_id = angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.id;
            var processed = false;
        
            switch (String.fromCharCode(o.which).toLowerCase()) {
            
                case "a":
                    o.preventDefault(); 
                    if( angular.element("#ct-controller-ui").scope().isActiveActionTab('componentBrowser') == false ){
                        angular.element("#ct-controller-ui").scope().switchActionTab('componentBrowser');
                    }
                    processed = true;
                    break;
                case "w":
                    o.preventDefault(); 
                    if( angular.element("#ct-controller-ui").scope().isActiveActionTab('componentBrowser') == false ){
                        angular.element("#ct-controller-ui").scope().switchActionTab('componentBrowser');
                    }
                    angular.element("#ct-controller-ui").scope().switchTab('components', 'wordpress-');
                    processed = true;
                    break;
                case "s":
                    o.preventDefault(); 
                    if( angular.element("#ct-controller-ui").scope().isActiveActionTab('componentBrowser') == false ){
                        angular.element("#ct-controller-ui").scope().switchActionTab('componentBrowser');
                    }
                    angular.element("#ct-controller-ui").scope().switchTab('components', 'smart');
                    processed = true;
                    break;
                case "d":
                    o.preventDefault(); 
                    if( angular.element("#ct-controller-ui").scope().isActiveActionTab('componentBrowser') == false ){
                        angular.element("#ct-controller-ui").scope().switchActionTab('componentBrowser');
                    }
                    angular.element("#ct-controller-ui").scope().switchTab('components', 'library-');
                    processed = true;
                    break;
                case "r":
                    o.preventDefault(); 
                    if( angular.element("#ct-controller-ui").scope().isActiveActionTab('componentBrowser') == false ){
                        angular.element("#ct-controller-ui").scope().switchActionTab('componentBrowser');
                    }
                    angular.element("#ct-controller-ui").scope().switchTab('components', 'reusable_parts');
                    processed = true;
                    break;
                case "t":
                    o.preventDefault(); 
                    angular.element("#ct-controller-ui").scope().iframeScope.saveReusable(component_id);
                    processed = true;
                    break;
                case "q":
                    o.preventDefault(); 
                    angular.element("#ct-controller-ui").scope().iframeScope.wrapComponentWith('ct_div_block', component_id, parent_id);
                    processed = true;
                    break; 
                                                    
                case "e":
                    o.preventDefault(); 
                    angular.element("#ct-controller-ui").scope().processLink();
                    processed = true;
                    break;
                
                case "x":
                    o.preventDefault(); 
                    jQuery("#tbf-s4").click();
                    processed = true;
                    break;
                case "n":
                    o.preventDefault(); 
                    jQuery("#tbf-s1").click();
                    processed = true;
                    break;
                case "g":
                    o.preventDefault(); 
                    jQuery("#tbf-s5").click();
                    processed = true;
                    break;                       
                case "f":
                    o.preventDefault(); 
                    jQuery("#ct-artificial-viewport").toggleClass("tbf-fullscreen");
                    break;

            }

        if (processed) {
            o.stopImmediatePropagation();
        }

        
    }


    e(window).bind("keydown", function(e) {
        e.shiftKey  && o(e)
    }), e(document).ready(function() {
        e("#ct-artificial-viewport").load(function() {
            e(this).contents().bind("keydown", function(e) {
                e.shiftKey  && o(e)
            })
        })
    });

});
}(jQuery);