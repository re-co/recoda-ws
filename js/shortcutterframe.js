!(function (j) {
jQuery(document).ready(function () {
	
	j(document.getElementById("ct-artificial-viewport").contentWindow.document).keydown(function (event) {
		if (angular.element("#ct-controller-ui").scope().isActiveActionTab("contentEditing")) {
			return;
		}

		if (event.keyCode == 71) {
			event.preventDefault();
			document.getElementById("tbf-cli").focus();
		}
	});
	
});
})(jQuery);
