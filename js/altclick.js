
jQuery( document ).ready(function() {
 
    jQuery('#oxygen-topbar').bind('click', function(event){
  
    if(event.altKey){
      
        var a = jQuery('#oxygen-topbar').css( "height" );
        var h = parseInt(a,10);
        
        if (h > 50)    {document.documentElement.style.setProperty('--topbar-height', (40 + "px"));}
        if (h < 50)    {document.documentElement.style.setProperty('--topbar-height', (58 + "px"));}
   }
  
  });
  
    jQuery('.oxygen-classes-dropdown.ng-scope').bind('click', function(e){ 
        
      if(e.altKey)  { jQuery(".oxygen-classes-dropdown.ng-scope").toggleClass("rcd-selector-options"); }

    });

});