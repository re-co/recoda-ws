
! function(j) {
jQuery(document).ready(function () {

    let tbf_commander ='<div><input id="rcd-cmd-s1" type="checkbox" class="tbf-input"/> <label for="rcd-cmd-s1" class="rcd-label"><div class="rcd-circle"></div></label><div id="tbf-main-wrapp" class="tbf-row"> <div title="Launch New Live Server Instance" id="tbf-live-server" class="tbf-item cmd"> <input id="tbf-s1" type="checkbox" class="tbf-input"/> <label for="tbf-s1" class="tbf-label"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 280" style="height: 18px; enable-background:new 0 0 280 280;" xml:space="preserve"> <g> <path d="M140,74.584c-17.391,0-31.539,14.148-31.539,31.539c0,13.896,9.037,25.712,21.539,29.905v132.69c0,5.523,4.477,10,10,10 s10-4.477,10-10v-132.69c12.502-4.192,21.539-16.009,21.539-29.905C171.539,88.732,157.391,74.584,140,74.584z"/> <path d="M194.458,36.066c-4.705-2.888-10.863-1.416-13.754,3.29c-2.89,4.707-1.416,10.865,3.291,13.754 c18.594,11.415,29.694,31.232,29.694,53.013c0.002,21.778-11.1,41.595-29.694,53.011c-4.707,2.89-6.181,9.047-3.291,13.754 c1.888,3.075,5.17,4.77,8.532,4.77c1.783,0,3.59-0.477,5.222-1.479c24.567-15.082,39.233-41.271,39.232-70.057 C233.689,77.336,219.023,51.147,194.458,36.066z"/> <path d="M228.532,3.283c-4.418-3.314-10.686-2.416-14,2.001c-3.313,4.418-2.417,10.686,2.002,14 C244.157,39.996,260,71.648,260,106.123c0,34.474-15.843,66.126-43.466,86.839c-4.419,3.313-5.314,9.581-2.002,13.999 c1.965,2.62,4.968,4.001,8.009,4.001c2.087,0,4.192-0.651,5.991-2C261.241,184.437,280,146.953,280,106.123 C280,65.292,261.24,27.808,228.532,3.283z"/> <path d="M96.005,53.111c4.707-2.89,6.181-9.047,3.291-13.754c-2.889-4.705-9.044-6.18-13.754-3.29 c-24.565,15.081-39.231,41.27-39.231,70.056c-0.002,28.786,14.664,54.976,39.231,70.058c1.632,1.001,3.438,1.479,5.222,1.479 c3.361,0,6.645-1.695,8.532-4.77c2.89-4.707,1.416-10.865-3.291-13.754c-18.595-11.416-29.696-31.233-29.694-53.012 C66.311,84.343,77.411,64.526,96.005,53.111z"/> <path d="M63.468,192.962C35.845,172.251,20.002,140.599,20,106.124c0.002-34.477,15.845-66.129,43.466-86.84 c4.419-3.313,5.314-9.581,2.002-14c-3.314-4.419-9.581-5.316-14-2.001C18.762,27.806,0.002,65.29,0,106.124 c0.002,40.832,18.762,78.316,51.47,102.84c1.799,1.349,3.903,1.999,5.991,1.999c3.041,0,6.044-1.382,8.009-4.001 C68.782,202.543,67.887,196.275,63.468,192.962z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> </label> </div><div title="Refresh Live Server Instance" id="tbf-refresh" class="tbf-item cmd"> <input id="tbf-s2" type="checkbox" class="tbf-input"/> <label for="tbf-s2" class="tbf-label"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="20px" height="20px" viewBox="0 0 414.853 414.853" style="enable-background:new 0 0 414.853 414.853;" xml:space="preserve"> <g> <g> <polygon style="fill:white;" points="351.921,219.763 310.677,178.524 302.402,186.804 357.775,242.177 414.853,185.094 406.573,176.815 363.631,219.763 363.631,103.619 56.225,103.619 56.225,115.329 351.921,115.329 "></polygon> <polygon style="fill:white;" points="62.938,195.089 104.176,236.333 112.453,228.048 57.083,172.675 0,229.751 8.276,238.038 51.228,195.089 51.228,311.234 358.622,311.234 358.622,299.523 62.938,299.523 "></polygon> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> </label> </div><div title="Toggle Style Inspector"id="tbf-padding-inspect" class="tbf-item c cmd"> <input id="tbf-s3" type="checkbox" class="tbf-input"/> <label for="tbf-s3" class="tbf-label"> <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"> <g> <g> <path d="M255.999,217.472c-21.245,0-38.528,17.284-38.528,38.528s17.285,38.528,38.528,38.528 c21.245,0,38.528-17.284,38.528-38.528S277.244,217.472,255.999,217.472z M255.999,277.583c-11.9,0-21.581-9.681-21.581-21.581 c0-11.9,9.682-21.581,21.581-21.581c11.9,0,21.581,9.681,21.581,21.581C277.581,267.901,267.9,277.583,255.999,277.583z"/> </g> </g> <g> <g> <path d="M503.527,247.527H474.1c-4.361-113.634-95.992-205.265-209.626-209.626V8.474c0-4.68-3.794-8.474-8.474-8.474 c-4.68,0-8.473,3.794-8.473,8.474v29.427C133.892,42.262,42.262,133.894,37.901,247.527H8.473C3.794,247.527,0,251.32,0,256 c0,4.68,3.794,8.473,8.474,8.473h29.428c4.361,113.634,95.992,205.265,209.626,209.626v29.427c0,4.68,3.794,8.474,8.473,8.474 c4.68,0,8.474-3.794,8.474-8.474v-29.427c113.634-4.361,205.265-95.992,209.626-209.626h29.427c4.68,0,8.473-3.794,8.473-8.474 C512,251.32,508.206,247.527,503.527,247.527z M428.084,264.473h29.056C452.8,368.762,368.76,452.8,264.473,457.141v-29.056 c0-4.681-3.794-8.473-8.473-8.473c-4.68,0-8.473,3.793-8.473,8.473v29.056C143.239,452.8,59.199,368.76,54.858,264.473h29.056 c4.68,0,8.474-3.794,8.474-8.473c0-4.68-3.793-8.473-8.474-8.473H54.858C59.199,143.238,143.239,59.2,247.526,54.859v29.056 c0,4.681,3.794,8.474,8.473,8.474c4.68,0,8.473-3.793,8.473-8.474V54.859C368.761,59.2,452.8,143.24,457.141,247.527h-29.056 c-4.68,0-8.473,3.794-8.473,8.473C419.611,260.68,423.405,264.473,428.084,264.473z"/> </g> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg> </label> </div><div title="Toggle X-ray Mode" id="tbf-xray" class="tbf-item c cmd"> <input id="tbf-s4" type="checkbox" class="tbf-input"/> <label for="tbf-s4" class="tbf-label"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="31.773px" height="31.773px" viewBox="0 0 31.773 31.773" style="enable-background:new 0 0 31.773 31.773;" xml:space="preserve"> <g xmlns="http://www.w3.org/2000/svg"> <path xmlns="http://www.w3.org/2000/svg" d="M15.383,18.945l7.761,12.506h-5.398l-3.48-5.825c-0.533-0.9-1.041-1.812-1.527-2.736l-0.498-0.959l-0.515-0.941h-0.07 l-0.515,0.959c-0.617,1.162-1.315,2.389-2.099,3.68l-3.498,5.826H0l7.959-12.508L0.57,7.206h5.489l3.23,5.399 c0.512,0.854,0.989,1.693,1.438,2.521l0.445,0.852l0.442,0.855h0.07c0.201-0.379,0.35-0.663,0.445-0.855l0.442-0.834 c0.379-0.733,0.854-1.574,1.422-2.521l3.231-5.418h5.436L15.383,18.945z M25.164,10.014c0-0.82,0.111-1.316,0.334-1.49 c0.223-0.176,1.02-0.387 "/> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg> </label> </div><div title="Toggle Grid System Guide" id="tbf-guide" class="tbf-item c cmd"> <input id="tbf-s5" type="checkbox" class="tbf-input"/> <label for="tbf-s5" class="tbf-label"> <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"> <link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/> <path d="M6.23694 3.0004C7.20344 3.0004 7.98694 3.7839 7.98694 4.7504V19.2504C7.98694 20.2169 7.20344 21.0004 6.23694 21.0004H3.73694C2.77044 21.0004 1.98694 20.2169 1.98694 19.2504V4.7504C1.98694 3.83223 2.69405 3.07921 3.59341 3.0062L3.73694 3.0004H6.23694ZM20.263 3.0004C21.2295 3.0004 22.013 3.7839 22.013 4.7504V19.2504C22.013 20.2169 21.2295 21.0004 20.263 21.0004H17.763C16.7965 21.0004 16.013 20.2169 16.013 19.2504V4.7504C16.013 3.7839 16.7965 3.0004 17.763 3.0004H20.263ZM13.2369 2.99957C14.2034 2.99957 14.9869 3.78307 14.9869 4.74957V19.2496C14.9869 20.2161 14.2034 20.9996 13.2369 20.9996H10.7369C9.77044 20.9996 8.98694 20.2161 8.98694 19.2496V4.74957C8.98694 3.78307 9.77044 2.99957 10.7369 2.99957H13.2369ZM6.23694 4.5004H3.73694L3.67962 4.50701C3.56917 4.53292 3.48694 4.63206 3.48694 4.7504V19.2504C3.48694 19.3885 3.59887 19.5004 3.73694 19.5004H6.23694C6.37501 19.5004 6.48694 19.3885 6.48694 19.2504V4.7504C6.48694 4.61233 6.37501 4.5004 6.23694 4.5004ZM20.263 4.5004H17.763C17.6249 4.5004 17.513 4.61233 17.513 4.7504V19.2504C17.513 19.3885 17.6249 19.5004 17.763 19.5004H20.263C20.4011 19.5004 20.513 19.3885 20.513 19.2504V4.7504C20.513 4.61233 20.4011 4.5004 20.263 4.5004ZM13.2369 4.49957H10.7369C10.5989 4.49957 10.4869 4.6115 10.4869 4.74957V19.2496C10.4869 19.3876 10.5989 19.4996 10.7369 19.4996H13.2369C13.375 19.4996 13.4869 19.3876 13.4869 19.2496V4.74957C13.4869 4.6115 13.375 4.49957 13.2369 4.49957Z"/> </svg> </label> </div><div title="Toggle Help Panel" id="tbf-guide" class="tbf-item cmd"> <input id="tbf-s6" type="checkbox" class="tbf-input"/> <label for="tbf-s6" class="tbf-label"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 431.855 431.855" style="enable-background:new 0 0 431.855 431.855;" xml:space="preserve"> <g> <path d="M215.936,0C96.722,0,0.008,96.592,0.008,215.814c0,119.336,96.714,216.041,215.927,216.041 c119.279,0,215.911-96.706,215.911-216.041C431.847,96.592,335.214,0,215.936,0z M231.323,335.962 c-5.015,4.463-10.827,6.706-17.411,6.706c-6.812,0-12.754-2.203-17.826-6.617c-5.08-4.406-7.625-10.575-7.625-18.501 c0-7.031,2.463-12.949,7.373-17.745c4.91-4.796,10.933-7.194,18.078-7.194c7.031,0,12.949,2.398,17.753,7.194 c4.796,4.796,7.202,10.713,7.202,17.745C238.858,325.362,236.346,331.5,231.323,335.962z M293.856,180.934 c-3.853,7.145-8.429,13.306-13.737,18.501c-5.292,5.194-14.81,13.924-28.548,26.198c-3.788,3.463-6.836,6.503-9.12,9.12 c-2.284,2.626-3.991,5.023-5.105,7.202c-1.122,2.178-1.983,4.357-2.593,6.535c-0.61,2.17-1.528,5.999-2.772,11.469 c-2.113,11.608-8.754,17.411-19.915,17.411c-5.804,0-10.681-1.894-14.656-5.69c-3.959-3.796-5.934-9.429-5.934-16.907 c0-9.372,1.455-17.493,4.357-24.361c2.886-6.869,6.747-12.892,11.543-18.086c4.804-5.194,11.274-11.356,19.427-18.501 c7.145-6.251,12.307-10.965,15.485-14.144c3.186-3.186,5.861-6.73,8.031-10.632c2.187-3.91,3.26-8.145,3.26-12.721 c0-8.933-3.308-16.46-9.957-22.597c-6.641-6.137-15.209-9.21-25.703-9.21c-12.282,0-21.321,3.097-27.125,9.291 c-5.804,6.194-10.705,15.314-14.729,27.369c-3.804,12.616-11.006,18.923-21.598,18.923c-6.251,0-11.526-2.203-15.826-6.609 c-4.292-4.406-6.438-9.177-6.438-14.314c0-10.6,3.406-21.346,10.21-32.23c6.812-10.884,16.745-19.899,29.807-27.036 c13.054-7.145,28.296-10.722,45.699-10.722c16.184,0,30.466,2.991,42.854,8.966c12.388,5.966,21.963,14.087,28.718,24.361 c6.747,10.266,10.128,21.427,10.128,33.482C299.635,165.473,297.709,173.789,293.856,180.934z"/> </g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> <g></g> </svg> </label> </div><div id="tbf-cl" class="tbf-main tbf-row tbf-c-c"> <label id="label-for-cli" class="tbf-cmd-label tbf-row tbf-c-c" for="tbf-cli"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 28 27.269" style="enable-background:new 0 0 27.269 27.269; fill: white; height: 20px;" xml:space="preserve" <g> <path d="M25.322,1.947H1.949C0.869,1.947,0,2.818,0,3.898v19.477c0,1.074,0.869,1.947,1.949,1.947h23.373 c1.07,0,1.947-0.873,1.947-1.947V3.898C27.27,2.818,26.393,1.947,25.322,1.947z M9.312,3.41c0.537,0,0.973,0.436,0.973,0.975 c0,0.537-0.436,0.973-0.973,0.973c-0.539,0-0.975-0.436-0.975-0.973C8.338,3.845,8.773,3.41,9.312,3.41z M6.33,3.41 c0.537,0,0.975,0.436,0.975,0.975c0,0.537-0.438,0.973-0.975,0.973c-0.539,0-0.975-0.436-0.975-0.973 C5.355,3.845,5.791,3.41,6.33,3.41z M3.406,3.41c0.541,0,0.975,0.436,0.975,0.975c0,0.537-0.434,0.973-0.975,0.973 c-0.535,0-0.971-0.436-0.971-0.973C2.436,3.845,2.871,3.41,3.406,3.41z M25.322,23.375H1.949V6.838h23.373 C25.322,6.838,25.322,23.375,25.322,23.375z"/> <path d="M14.797,15.566L5.844,20.16v-1.332l7.602-3.781v-0.039l-7.602-3.782V9.894l8.953,4.572V15.566z"/> <path d="M21.422,14.334v1.232h-4.764v-1.232H21.422z"/> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> </label> <input type="text" id="tbf-cli" placeholder=">type>command.buddy..."/> </div></div>';
    
    j(tbf_commander).prependTo("#ct-controller-ui");

   /*
	* Commander start CLI
	*/
	j("#tbf-cli").on("keyup", function (e) {
		if (e.key === "Enter" || e.keyCode === 13 || e.keyCode === 32) {
			let command = j("#tbf-cli").val();
			let tbf_id;

			if (command[0] === ">" || command[0] === "." || command[0] === "+" || command[0] === "^" || command[0] === "#" || command[0] === "*") {
				var s = command
					.match(/[^\*]+|\*/g)
					.join(",")
					.match(/[^>]+|>/g)
					.join(",")
					.match(/[^\+]+|\+/g)
					.join(",")
					.match(/[^\.]+|\./g)
					.join(",")
					.match(/[^\(]+|\(/g)
					.join(",")
					.match(/[^\)]+|\)/g)
					.join(",")
					.split(",");
			
				var commandArray = s.filter(function (el) {	return el;  });
				var c = commandArray;
				var g = 0;
				var passed = 1;
			
		for (var i = 0; i < c.length; i++) {
					
					if (c[i] === c[c.lenght - 1]) {
						s = c[i];
						
			if (/[a-z]/.test(s)) {
						} else return 0;
					}

					if (c[i - 1] === ".") {
						s = c[i];
						tbf_id = angular.element("#ct-controller-ui").scope().iframeScope.component.active.id;
						angular.element("#ct-controller-ui").scope().iframeScope.newcomponentclass.name = c[i];
						angular.element("#ct-controller-ui").scope().iframeScope.tryAddClassToComponent(tbf_id);

						console.log("." + c[i]);
					}

					if (c[i - 1] === ">") {
						s = c[i];
						if (/[a-z]/.test(s)) {
							angular.element("#ct-controller-ui").scope().iframeScope.addComponent("ct_div_block");
							angular.element("#ct-controller-ui").scope().iframeScope.setOptionModel("tag", s);
							angular.element("#ct-controller-ui").scope().iframeScope.changeTag();

							console.log("just add");
						}
					}

					if (c[i - 1] === "+") {
						s = c[i];
						
			if (/[a-z]/.test(s)) {
							angular.element("#ct-controller-ui").scope().iframeScope.activateComponent(angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.id, angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.name);
							angular.element("#ct-controller-ui").scope().iframeScope.addComponent("ct_div_block");
							angular.element("#ct-controller-ui").scope().iframeScope.setOptionModel("tag", s);
							angular.element("#ct-controller-ui").scope().iframeScope.changeTag();

							console.log("up one");
						}
					}
					if (c[i - 1] === "^") {
						s = c[i];
						
			if (/[a-z]/.test(s)) {
							angular.element("#ct-controller-ui").scope().iframeScope.activateComponent(angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.id, angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.name);
							angular.element("#ct-controller-ui").scope().iframeScope.activateComponent(angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.id, angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.name);
							angular.element("#ct-controller-ui").scope().iframeScope.addComponent("ct_div_block");
							angular.element("#ct-controller-ui").scope().iframeScope.setOptionModel("tag", s);
							angular.element("#ct-controller-ui").scope().iframeScope.changeTag();
							console.log("up two");
						}
					}

					if (c[i - 1] === "(") {
						s = c[i];
						
			if (/[a-z]/.test(s)) {
							angular.element("#ct-controller-ui").scope().iframeScope.addComponent("ct_div_block");
							angular.element("#ct-controller-ui").scope().iframeScope.setOptionModel("tag", s);
							angular.element("#ct-controller-ui").scope().iframeScope.changeTag();

						}
					}

			//grouping index
					if (c[i] === "(") {
						g = i;
					}

					//grouping end
					if (i != c.length - 1) {

			if (c[i] === ")") {

				if (c[i + 1] === "*" && passed < c[i + 2]) {
								grouping = c[i + 2];
								passed = passed + 1;
								console.log("-----mul---" + c[i + 2]);
								i = g;
								angular.element("#ct-controller-ui").scope().iframeScope.activateComponent(angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.id, angular.element("#ct-controller-ui").scope().iframeScope.component.active.parent.name);
								console.log("-----passed---" + passed);
								console.log("-----xxxxx---" + c[9]);
							}
					
				if (passed == c[i + 2]) {
								passed = 1;
							}
					
			}
					}

		} /* end of for-loop */
		
			}
		}
	}); /* Commander JS end */
		
	
	/* Guide */
		j("#tbf-s5").click(function() {
			j("iframe").contents().find("html").toggleClass('tf-filled');
		
		})

	/* X-Ray */
		j("#tbf-s4").click(function() {
			j("iframe").contents().find("html").toggleClass('wf-xray-on');
			j("iframe").contents().find("#ct-builder").toggleClass('xray-mode');
		
		})

});
}(jQuery);

