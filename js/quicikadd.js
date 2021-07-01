
! function(j) {
jQuery(document).ready(function () {

    let tbf_quickadd ='<div id="rcd-add2-pane" class="column"> <div title="Show/Hide Quick Add Panel" class="column" id="rcd-add2-cntrl"> <input id="rcd-add-s1" type="checkbox" class="tbf-input"/> <label for="rcd-add-s1" class="rcd-label"><div class="rcd-circle"></div>ADD</label> <div title="Wordpress" class="rcd-item column rcd-hide" id="rcd-add2-wordpress"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 96.24 96.24" style="enable-background:new 0 0 96.24 96.24;" xml:space="preserve"><g><path d="M48.122,0C21.587,0,0.001,21.585,0.001,48.118c0,26.535,21.587,48.122,48.12,48.122c26.532,0,48.117-21.587,48.117-48.122 C96.239,21.586,74.654,0,48.122,0z M4.857,48.118c0-6.271,1.345-12.227,3.746-17.606l20.638,56.544 C14.81,80.042,4.857,65.243,4.857,48.118z M48.122,91.385c-4.247,0-8.346-0.623-12.222-1.763L48.88,51.903l13.301,36.433 c0.086,0.215,0.191,0.411,0.308,0.596C57.992,90.514,53.16,91.385,48.122,91.385z M54.083,27.834 c2.604-0.137,4.953-0.412,4.953-0.412c2.33-0.276,2.057-3.701-0.277-3.564c0,0-7.007,0.549-11.532,0.549 c-4.25,0-11.396-0.549-11.396-0.549c-2.332-0.137-2.604,3.427-0.273,3.564c0,0,2.208,0.275,4.537,0.412l6.74,18.469l-9.468,28.395 L21.615,27.835c2.608-0.136,4.952-0.412,4.952-0.412c2.33-0.275,2.055-3.702-0.278-3.562c0,0-7.004,0.549-11.53,0.549 c-0.813,0-1.77-0.021-2.784-0.052C19.709,12.611,33.008,4.856,48.122,4.856c11.265,0,21.519,4.306,29.215,11.357 c-0.187-0.01-0.368-0.035-0.562-0.035c-4.248,0-7.264,3.702-7.264,7.679c0,3.564,2.055,6.582,4.248,10.146 c1.647,2.882,3.567,6.585,3.567,11.932c0,3.704-1.422,8-3.293,13.986l-4.315,14.421L54.083,27.834z M69.871,85.516l13.215-38.208 c2.471-6.171,3.29-11.106,3.29-15.497c0-1.591-0.104-3.07-0.292-4.449c3.38,6.163,5.303,13.236,5.301,20.758 C91.384,64.08,82.732,78.016,69.871,85.516z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div><div title="Helpers"class="rcd-item column rcd-hide" id="rcd-add2-helpers"> <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"> <path d="M414.39,97.61A224,224,0,1,0,97.61,414.39,224,224,0,1,0,414.39,97.61ZM192.13,260.18a64,64,0,1,1,59.69,59.69A64.07,64.07,0,0,1,192.13,260.18Zm240-66.64-96.37,5.84a4.06,4.06,0,0,1-3.44-1.59,96,96,0,0,0-18.07-18.07,4.06,4.06,0,0,1-1.59-3.44l5.84-96.37a4,4,0,0,1,5.42-3.51A193,193,0,0,1,435.6,188.12,4,4,0,0,1,432.09,193.54ZM193.54,79.91l5.84,96.37a4.06,4.06,0,0,1-1.59,3.44,96,96,0,0,0-18.07,18.07,4.06,4.06,0,0,1-3.44,1.59l-96.37-5.84a4,4,0,0,1-3.51-5.42A193,193,0,0,1,188.12,76.4,4,4,0,0,1,193.54,79.91ZM79.91,318.46l96.37-5.84a4.06,4.06,0,0,1,3.44,1.59,96,96,0,0,0,18.07,18.07,4.06,4.06,0,0,1,1.59,3.44l-5.84,96.37a4,4,0,0,1-5.42,3.51A193,193,0,0,1,76.4,323.88,4,4,0,0,1,79.91,318.46ZM318.46,432.09l-5.84-96.37a4.06,4.06,0,0,1,1.59-3.44,96,96,0,0,0,18.07-18.07,4.06,4.06,0,0,1,3.44-1.59l96.37,5.84a4,4,0,0,1,3.51,5.42A193,193,0,0,1,323.88,435.6,4,4,0,0,1,318.46,432.09Z"/></svg></div><div title="Wordpress >Dynamic data"class="rcd-hide rcd-item column subitem" id="rcd-add2-dynamic"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 95.103 95.103" style="enable-background:new 0 0 95.103 95.103;" xml:space="preserve"><g><g id="Layer_1_14_"><g><g><g><path d="M47.561,0C25.928,0,8.39,6.393,8.39,14.283v11.72c0,7.891,17.538,14.282,39.171,14.282 c21.632,0,39.17-6.392,39.17-14.282v-11.72C86.731,6.393,69.193,0,47.561,0z"/></g></g><g><g><path d="M47.561,47.115c-20.654,0-37.682-5.832-39.171-13.227c-0.071,0.353,0,19.355,0,19.355 c0,7.892,17.538,14.283,39.171,14.283c21.632,0,39.17-6.393,39.17-14.283c0,0,0.044-19.003-0.026-19.355 C85.214,41.284,68.214,47.115,47.561,47.115z"/></g></g><path d="M86.694,61.464c-1.488,7.391-18.479,13.226-39.133,13.226S9.875,68.854,8.386,61.464L8.39,80.82 c0,7.891,17.538,14.282,39.171,14.282c21.632,0,39.17-6.393,39.17-14.282L86.694,61.464z"/></g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div><div title="Wordpress > Widgets"class="rcd-hide rcd-item column subitem" id="rcd-add2-widgets"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 35 35" style="enable-background:new 0 0 35 35;" xml:space="preserve"><g><g><path d="M0,0v35h35V0H0z M2,2h31v31H2V2z"/><rect x="24.5" y="4.5" width="5" height="26"/><rect x="15" y="4.5" width="7" height="7"/><rect x="15" y="14" width="7" height="7"/><rect x="15" y="23.5" width="7" height="7"/><rect x="5.5" y="4.5" width="7" height="7"/><rect x="5.5" y="14" width="7" height="7"/><rect x="5.5" y="23.5" width="7" height="7"/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg> </div><div title="Library > Design sets"class="rcd-hide rcd-item column" id="rcd-add2-library"> <svg viewBox="0 0 28 28" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><link xmlns="" type="text/css" rel="stylesheet" id="dark-mode-custom-link"/> <g id="Icons" stroke="none" stroke-width="1" fill="none" fill-rule="white"> <g id="ic_fluent_library_28_filled" fill="white" fill-rule="nonzero"> <path d="M5.9897,3 C7.0937,3 7.9897,3.896 7.9897,5 L7.9897,23 C7.9897,24.104 7.0937,25 5.9897,25 L4.0007,25 C2.8957,25 2.0007,24.104 2.0007,23 L2.0007,5 C2.0007,3.896 2.8957,3 4.0007,3 L5.9897,3 Z M12.9897,3 C14.0937,3 14.9897,3.896 14.9897,5 L14.9897,23 C14.9897,24.104 14.0937,25 12.9897,25 L10.9947,25 C9.8897,25 8.9947,24.104 8.9947,23 L8.9947,5 C8.9947,3.896 9.8897,3 10.9947,3 L12.9897,3 Z M22.0701,6.5432 L25.9301,22.0262 C26.1971,23.0972 25.5441,24.1832 24.4731,24.4512 L22.5101,24.9402 C21.4391,25.2072 20.3531,24.5552 20.0861,23.4832 L16.2261,8.0002 C15.9581,6.9282 16.6111,5.8432 17.6821,5.5752 L19.6451,5.0862 C20.7161,4.8182 21.8021,5.4712 22.0701,6.5432 Z" id="Color"/> </g> </g></svg> </div><div title= "Reusable" class="rcd-item column rcd-hide " id="rcd-add2-reusable"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 24.225 24.175" enable-background="new 0 0 24.225 24.175" xml:space="preserve"><g><path d="M7.428,17.653l0.016-3.873L6.14,15.082l-2.277-2.272c0,0-0.649-0.648-0.012-1.286L6.76,8.614L5.504,7.35l-3.59,3.588 c0,0-1.274,1.259,0.025,2.534l2.896,2.896l-1.277,1.284H7.428z"/><path d="M10.568,7.41L9.257,6.096l2.275-2.277c0,0,0.646-0.65,1.283-0.012l2.908,2.91l1.272-1.264L13.401,1.87 c0,0-1.259-1.273-2.533,0.026L7.97,4.792L6.686,3.495l0.009,3.909L10.568,7.41z"/><path d="M22.284,10.703L19.39,7.807l1.276-1.283l-3.87,0l-0.016,3.872l1.305-1.302l2.275,2.273c0,0,0.649,0.648,0.014,1.285 l-2.909,2.909l1.264,1.271l3.582-3.595C22.311,13.24,23.585,11.979,22.284,10.703z"/><path d="M13.657,16.775l1.311,1.305l-2.274,2.277c0,0-0.647,0.648-1.284,0.012l-2.899-2.9l-1.271,1.265l3.586,3.574 c0,0,1.26,1.271,2.533-0.028l2.897-2.895l1.283,1.287l-0.001-3.881L13.657,16.775z"/></g></svg><polygon points="279.8,244.8 258.2,257.3 258.2,482 452.7,369.7 452.7,145 "/><polygon points="315,43.3 240.2,0 40.3,115.4 115.2,158.7 "/><polygon points="440,115.4 353.8,66.3 154,181.7 165.4,187.6 240.2,230.8 314.6,187.9 "/><polygon points="138.9,264.3 103.1,245.9 103.1,188.7 29.3,146.2 29.3,369.3 222.4,480.8 222.4,257.7 138.9,209.6 "/></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg></div></div></div>';
    j(tbf_quickadd).appendTo("#tbf-advancer");

    j('#rcd-add2-wordpress').click(function() {
        angular.element("#ct-controller-ui").scope().switchActionTab('componentBrowser');
        angular.element("#ct-controller-ui").scope().switchTab('components', 'wordpress-');
    })

    j('#rcd-add2-helpers').click(function() {
        angular.element("#ct-controller-ui").scope().switchActionTab('componentBrowser');
        angular.element("#ct-controller-ui").scope().switchTab('components', 'smart');
    })
    j('#rcd-add2-dynamic').click(function() {
        angular.element("#ct-controller-ui").scope().switchActionTab('componentBrowser');
        angular.element("#ct-controller-ui").scope().switchTab('components', 'wordpress-');
        angular.element("#ct-controller-ui").scope(). iframeScope.openFolder('dynamic-data-data')
        angular.element("#ct-controller-ui").scope().tabs['components']=[];
    })
    j('#rcd-add2-widgets').click(function() {
        angular.element("#ct-controller-ui").scope().switchActionTab('componentBrowser');
        angular.element("#ct-controller-ui").scope().switchTab('components', 'wordpress-');
        angular.element("#ct-controller-ui").scope().iframeScope.openFolder('widgets-widgets');
        angular.element("#ct-controller-ui").scope().tabs['components']=[];
    })
    j('#rcd-add2-library').click(function() {
        angular.element("#ct-controller-ui").scope().switchActionTab('componentBrowser');
        angular.element("#ct-controller-ui").scope().switchTab('components', 'library-');
        angular.element("#ct-controller-ui").scope().iframeScope.openFolder('design-sets-experimental');
        angular.element("#ct-controller-ui").scope().tabs['components']=[];
    })
    j('#rcd-add2-reusable').click(function() {
        angular.element("#ct-controller-ui").scope().switchActionTab('componentBrowser');
        angular.element("#ct-controller-ui").scope().switchTab('components', 'reusable_parts');
    })

   
});   
}(jQuery);

