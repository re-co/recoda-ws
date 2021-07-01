! function(j) {
jQuery(document).ready(function () {
    
    j(document.getElementById('ct-artificial-viewport').contentWindow.document).keydown(function(event){
        let a;
        let b;

        if (o.metaKey || o.altKey || o.shiftKey) {
            return;
        }
        if (document.activeElement.tagName === "INPUT"){
            return;
        }
        if (document.activeElement.tagName === "TEXTAREA"){return;}
        if (document.activeElement.hasAttribute("contenteditable", "true") == true){return;}
       
        if (angular.element("#ct-controller-ui").scope().isActiveActionTab('contentEditing')) {
            return;
        }

        if (!event.ctrlKey){
            //ARROW L
            if(event.keyCode == 37){
                event.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.activateComponent(angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.id, angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.name);
            }
            //ARROW UP
            if(event.keyCode == 38){
                event.preventDefault(); 
                a=jQuery("#ct-dom-tree").contents().find(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name.ct-dom-tree-node-selected").parent().prev();
                b = a.children(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name");
                b.click(); 
            }
            //ARROW R
            if(event.keyCode == 39){
                event.preventDefault(); 
                a=jQuery("#ct-dom-tree").contents().find(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name.ct-dom-tree-node-selected").next();
                b = a.children(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name");
                b.click();
            }
            //ARROW DOWN
            if(event.keyCode == 40){
                event.preventDefault(); 
                a=jQuery("#ct-dom-tree").contents().find(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name.ct-dom-tree-node-selected").parent().next();
                b = a.children(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name");
                b.click(); 
            }
        }

        if (event.ctrlKey){
            //ARROW L
            if(event.keyCode == 37){
                event.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.activateComponent(angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.id, angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.name);
            }
            //ARROW UP
            if(event.keyCode == 38){
                event.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.collapseAllNodes();
            }
            //ARROW R
            if(event.keyCode == 39){
                event.preventDefault(); 
                jQuery("#ct-dom-tree").contents().find(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name.ct-dom-tree-node-selected .ct-expand-butt").click();
            
            }
            //ARROW DOWN
            if(event.keyCode == 40){
                event.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.expandAllNodes();
            }

        }
    });

    j(window).keydown(function(event){  
        let a;
        let b;
        if (angular.element("#ct-controller-ui").scope().isActiveActionTab('contentEditing')) {
            return;
        }
        if (o.metaKey || o.altKey || o.shiftKey) {
            return;
        }
        if (document.activeElement.tagName === "INPUT"){
            return;
        }
        if (document.activeElement.tagName === "TEXTAREA"){return;}
        if (document.activeElement.hasAttribute("contenteditable", "true") == true){return;}
        
        if (!event.ctrlKey){
            //ARROW L
            if(event.keyCode == 37){
                event.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.activateComponent(angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.id, angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.name);
            }
            //ARROW UP
            if(event.keyCode == 38){
                event.preventDefault(); 
                a=jQuery("#ct-dom-tree").contents().find(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name.ct-dom-tree-node-selected").parent().prev();
                b = a.children(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name");
                b.click(); 
            }
            //ARROW R
            if(event.keyCode == 39){
                event.preventDefault(); 
                a=jQuery("#ct-dom-tree").contents().find(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name.ct-dom-tree-node-selected").next();
                b = a.children(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name");
                b.click();
            }
            //ARROW DOWN
            if(event.keyCode == 40){
                event.preventDefault(); 
                a=jQuery("#ct-dom-tree").contents().find(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name.ct-dom-tree-node-selected").parent().next();
                b = a.children(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name");
                b.click(); 
            }
        
        }

        if (event.ctrlKey){
            //ARROW L
            if(event.keyCode == 37){
                event.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.activateComponent(angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.id, angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.name);
            }
            //ARROW UP
            if(event.keyCode == 38){
                event.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.collapseAllNodes();
            }
            //ARROW R
            if(event.keyCode == 39){
                event.preventDefault(); 
                jQuery("#ct-dom-tree").contents().find(".ct-dom-tree-node-anchor.ct-dom-tree-node-type-general.ct-dom-tree-name.ct-dom-tree-node-selected .ct-expand-butt").click();
            
            }
            //ARROW DOWN
            if(event.keyCode == 40){
                event.preventDefault(); 
                angular.element("#ct-controller-ui").scope().iframeScope.expandAllNodes();
            }
   
        }

    });

    
});

}(jQuery);





