
! function(e) {
jQuery(document).ready(function () {   

        function o(o) {

            // Stop event processing if it is repeating
            if (o.originalEvent.repeat) {
                return;
            }

            // Stop event processing if Control or Command, Shift and Alt keys are active
            if (o.ctrlKey || o.metaKey || o.altKey || o.shiftKey) {
                return;
            }

            if (document.activeElement.tagName === "INPUT"){
                return;
            }

            if (document.activeElement.tagName === "TEXTAREA"){return;}
            
            if (document.activeElement.hasAttribute("contenteditable", "true") == true){return;}
           
            // Stop event processing if content editor is active
            
            if (angular.element("#ct-controller-ui").scope().isActiveActionTab('contentEditing')) {
                return;
            }

            var processed = false;
        switch (String.fromCharCode(o.which).toLowerCase()) {
            case "¸":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().switchActionTab('componentBrowser');
                processed = true;
                break;
            case "1":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.setCurrentMedia('default',true,angular.element("#ct-controller-ui").scope().iframeScope.isEditing('class'));
                processed = true;
                break;
            case "2":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.setCurrentMedia('page-width',true,angular.element("#ct-controller-ui").scope().iframeScope.isEditing('class'));
                processed = true;
                break;
            case "3":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.setCurrentMedia('tablet',true,angular.element("#ct-controller-ui").scope().iframeScope.isEditing('class'));
                processed = true;
                break;
            case "4":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.setCurrentMedia('phone-landscape',true,angular.element("#ct-controller-ui").scope().iframeScope.isEditing('class'));
                processed = true;
                break;
            case "5":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.setCurrentMedia('phone-portrait',true,angular.element("#ct-controller-ui").scope().iframeScope.isEditing('class'));
                processed = true;
                break;
            // panelator controls START :: q = structure panel, w = selectors panel, e = stylesheet panel, r = settings panel          
            case "q":
                o.preventDefault(); 
                jQuery('[for="tbf-side-structure"]').click();
                processed = true;
                break;
            case "w":
                o.preventDefault(); 
                jQuery('[for="tbf-side-selectors"]').click();
                processed = true;
                break;
            case "e":
                o.preventDefault(); 
                jQuery('[for="tbf-side-stylesheets"]').click();
                processed = true;
                break;
            case "r":
                o.preventDefault(); 
                jQuery('[for="tbf-side-settings"]').click();
                processed = true;
                break;
                // advanced option 1-4 shortcuts a=background, s = position, d= layout, f = typography              
            case "a":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().showAllStylesFunc();angular.element("#ct-controller-ui").scope().styleTabAdvance=true;
                angular.element("#ct-controller-ui").scope().switchTab('advanced', 'background');  
                break;
            case "s":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().showAllStylesFunc();angular.element("#ct-controller-ui").scope().styleTabAdvance=true;
                angular.element("#ct-controller-ui").scope().switchTab('advanced', 'position');
                break;
            case "d":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().showAllStylesFunc();angular.element("#ct-controller-ui").scope().styleTabAdvance=true;
                angular.element("#ct-controller-ui").scope().switchTab('advanced', 'layout');
                break;
            case "f":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().showAllStylesFunc();angular.element("#ct-controller-ui").scope().styleTabAdvance=true;
                angular.element("#ct-controller-ui").scope().switchTab('advanced', 'typography');
                break;
  
                // advanced option 5-9 shortcuts, y = borders x = effects, c = css, v = js, b = attributes              
            case "y":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().showAllStylesFunc();angular.element("#ct-controller-ui").scope().styleTabAdvance=true;
                angular.element("#ct-controller-ui").scope().switchTab('advanced', 'borders');
                break;
            case "x":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().showAllStylesFunc();angular.element("#ct-controller-ui").scope().styleTabAdvance=true;
                angular.element("#ct-controller-ui").scope().switchTab('advanced', 'effects');
                break;
            case "c":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().showAllStylesFunc();angular.element("#ct-controller-ui").scope().styleTabAdvance=true;
                angular.element("#ct-controller-ui").scope().switchTab('advanced', 'custom-css');
                break;
            case "v":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().showAllStylesFunc();angular.element("#ct-controller-ui").scope().styleTabAdvance=true;
                angular.element("#ct-controller-ui").scope().switchTab('advanced', 'custom-js');
                break;
            case "b":
                o.preventDefault(); 
                angular.element("#ct-controller-ui").scope().showAllStylesFunc();angular.element("#ct-controller-ui").scope().styleTabAdvance=true;
                angular.element("#ct-controller-ui").scope().switchTab('advanced', 'custom-attributes');
                break;
           
                //command focus
            case "g":
                o.preventDefault();   
                window.parent.document.getElementById('tbf-cli').focus();
                processed = true;
                break;
            	// 
        }

        if (processed) {
            o.stopImmediatePropagation();
        }
    }
    e(window).bind("keydown", function(e) {
       o(e)
    }), e(document).ready(function() {
        e("#ct-artificial-viewport").load(function() {
            e(this).contents().bind("keydown", function(e) {
              o(e)
            })
        })
    });

});
}(jQuery);