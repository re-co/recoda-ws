!(function (j) {
jQuery(document).ready(function () {

	let tbf_rp_resizer = '<div id="resizer-rp">';
	j(tbf_rp_resizer).prependTo("#ct-controller-ui");

	dragElement(document.getElementById("resizer-rp"));
	let root = document.documentElement;
	var wnd = j("#ct-controller-ui");
	var w = wnd.width();
	var min_w = 1;
	var max_w = 0.6 * w;
	var widthFromLeft;

	function dragElement(elmnt) {
		/* otherwise, move the DIV from anywhere inside the DIV:*/
		elmnt.onmousedown = dragMouseDown;

		function dragMouseDown(e) {
			e = e || wnd.event;
			e.preventDefault();
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
			j(" #resizer-lp-drawer ").toggleClass("tbf-drag-overaly");
		}

		function elementDrag(e) {
			e = e || wnd.event;
			e.preventDefault();
			// calculate the new cursor position:
			pos1 = pos3 - e.clientX;
			pos3 = e.clientX;
			widthFromLeft = w - e.clientX;

			//++ MAGNETIC GESTURE> HIDE: sidebar, SET big safe-area
			if (widthFromLeft < 250) {
				root.style.setProperty("--sidepanel-width", min_w + "px");
				root.style.setProperty("--resizer-r-safe-area", 300 + "px");
				return;
			}

			//++ LOCK dragging to max-w logic algortihm
			else if (widthFromLeft > max_w) {
				root.style.setProperty("--sidepanel-width", max_w + "px");
				return;
			} 
      else {
				// NORMAL MODE
				root.style.setProperty("--sidepanel-width", widthFromLeft + "px");

				// SHOW left sidebar, SET smaller safer area
				if (widthFromLeft > 250) {
					root.style.setProperty("--resizer-r-safe-area", 100 + "px");
				}

			}
		}

		function closeDragElement() {
			/* stop moving when mouse button is released:*/
			document.onmouseup = null;
			document.onmousemove = null;
			j(" #resizer-lp-drawer ").toggleClass("tbf-drag-overaly");
		}
	}

	jQuery("#resizer-rp").dblclick(function () {
		let r = document.documentElement;
		var a = jQuery("#resizer-rp").css("right");
		var b = parseInt(a, 10);
		
    if (b > 500) {
			r.style.setProperty("--sidepanel-width", "350px");
		}
		
    if (b < 501) {
			
      if (b < 100) {
				r.style.setProperty("--sidepanel-width", "350px");
			} 
      else {
				r.style.setProperty("--sidepanel-width", "0px");
			}

		}

	});
	
});
})(jQuery);
