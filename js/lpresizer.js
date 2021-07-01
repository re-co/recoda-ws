!(function (j) {
jQuery(document).ready(function () {

	let tbf_lp_resizer = '<div id="resizer-lp"></div><div id="resizer-lp-drawer"></div>';
	j(tbf_lp_resizer).prependTo("#ct-controller-ui");

	dragElement(document.getElementById("resizer-lp"));
	let root = document.documentElement;
	var w = window.innerWidth;
	var min_w = 50;
	var max_w;

	function dragElement(elmnt) {
		/* otherwise, move the DIV from anywhere inside the DIV:*/
		elmnt.onmousedown = dragMouseDown;

		function dragMouseDown(e) {
			e = e || window.event;
			e.preventDefault();
			// get the mouse cursor position at startup:
			pos3 = e.clientX;
			//delete start-x
			j(" #resizer-lp-drawer ").toggleClass("tbf-drag-overaly");

			max_w = w * 0.4;

			document.onmouseup = closeDragElement;
			// call a function whenever the cursor moves:
			document.onmousemove = elementDrag;
		}

		function elementDrag(e) {
			e = e || window.event;
			e.preventDefault();
			// calculate the new cursor position:

			pos1 = pos3 - e.clientX;
			pos3 = e.clientX;

			// MAGNETIC GESTURE> HIDE: sidebar, SET big safe-area
			if (pos3 < 250) {
				root.style.setProperty("--sidebar-width", min_w + "px");
				angular.element("#ct-controller-ui").scope().doHideLeftSidebar(true);
				root.style.setProperty("--resizer-safe-area", 300 + "px");
				return;
			}

			// LOCK dragging to max-w logic algortihm
			else if (pos3 > max_w) {
				root.style.setProperty("--sidebar-width", max_w + "px");
				return;
			} 
      
      else {
				// NORMAL MODE
				root.style.setProperty("--sidebar-width", e.clientX + "px");

				// SHOW left sidebar, SET smaller safer area
				if (pos3 > 250 && angular.element("#ct-controller-ui").scope().showLeftSidebar == false) {
					angular.element("#ct-controller-ui").scope().doShowLeftSidebar(true);
					root.style.setProperty("--resizer-safe-area", 100 + "px");
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

	jQuery("#resizer-lp").dblclick(function () {
		let r = document.documentElement;
		var a = jQuery("#resizer-lp").css("left");
		var b = parseInt(a, 10);

		if (b > 500) {
			r.style.setProperty("--sidebar-width", "350px");
		}

		if (b < 501) {

			if (b < 100) {
				r.style.setProperty("--sidebar-width", "350px");
				
        if (angular.element("#ct-controller-ui").scope().showLeftSidebar == false) {
					angular.element("#ct-controller-ui").scope().doShowLeftSidebar(true);
				}
			} 
      else {
				angular.element("#ct-controller-ui").scope().doHideLeftSidebar(true);
				r.style.setProperty("--sidebar-width", "50px");
			}
		}
	});

});
})(jQuery);
