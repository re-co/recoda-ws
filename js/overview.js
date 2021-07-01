!(function (j) {
jQuery(document).ready(function () {
	//prepand to sidebar tabs!
	let code = ' <div class="editorContainer"><textarea id="tbf-overview-txt"></textarea></div>';
	j(code).prependTo("#oxygen-ui");
  
	let myTextArea = document.querySelector("#tbf-overview-txt");
	let myCodeMirror = CodeMirror(
		function (elt) {
			myTextArea.parentNode.replaceChild(elt, myTextArea);
		},
		{ value: myTextArea.value, 
      mode: "css", readOnly: true, 
      theme: "dracula" }
	);

	let tbf_id;
	let zx, xc, ar;

	j(document).ready(function () {

		j("#tbf-s3").click(function () {
			j(".editorContainer").toggleClass("tbf-overview-active");
		});

		/* Overview JS end */

		j("#oxygen-sidebar").click(function () {
			
      if (document.getElementById("tbf-s3").checked) {
				
        if (angular.element("#ct-controller-ui").scope().iframeScope.isEditing("id") == true) {
					tbf_id = angular.element("#ct-controller-ui").scope().iframeScope.component.active.id;
					zx = angular.element("#ct-controller-ui").scope().iframeScope.component.options[tbf_id];
					xc = angular.element("#ct-controller-ui").scope().iframeScope.getSingleComponentCSS(zx);
					ar = xc.replace(/;/g, ";\n").replace(/{/g, "{\n").replace(/}/g, "}\n").replace(/:/g, ": ");
					myCodeMirror.doc.setValue(ar);
				}

				if (angular.element("#ct-controller-ui").scope().iframeScope.isEditing("class") == true) {
					xc = angular.element("#ct-controller-ui").scope().iframeScope.getSingleClassCSS(angular.element("#ct-controller-ui").scope().iframeScope.currentClass);
					ar = xc.replace(/;/g, ";\n").replace(/{/g, "{\n").replace(/}/g, "}\n").replace(/:/g, ": ");
					myCodeMirror.doc.setValue(ar);
				}

			}

		});

	});

});
})(jQuery);
