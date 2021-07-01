<?php
/*
Plugin Name: Recoda Workspace for Oxygen Builder
Author: Renato Corluka
Author URI: https://kreator.agency
Description: Hack your theme building process
Version: 1.0.0
License: GNU General Public License v2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html
Text Domain: recoda_ws
*/

// General direct file access security
if ( ! defined( 'WPINC' ) ) die;

// Only load styles and scripts if 1) user is currently logged in, 2) Oxygen editor is loaded, and 3) builder is set to "true".
add_action( 'init', 'tbf_EnqueueStylesAndScripts' );
function tbf_EnqueueStylesAndScripts() {
	// User MUST BE LOGGED IN!!
	if( ! is_user_logged_in() ) return;

	// Check builder is available and editable before loading styles and scripts
	if ( isset( $_GET['ct_builder'] ) && $_GET['ct_builder'] == true ) :
		// Enqueue styles
		add_action( 'wp_footer', 'tbf_EnqueueCSS' );
		function tbf_EnqueueCSS() {
			wp_enqueue_style( 'tbf_styles', plugin_dir_url(__FILE__) . 'css/recoda_ux.min.css' );
		}
		// Enqueue scripts
		add_action( 'oxygen_enqueue_ui_scripts', 'tbf_EnqueueJS' );
		function tbf_EnqueueJS() {
			wp_enqueue_script( 'tbf-advantor-scripts', plugin_dir_url(__FILE__) . 'js/advantor.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-panelator-scripts', plugin_dir_url(__FILE__) . 'js/panelator.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-commander-scripts', plugin_dir_url(__FILE__) . 'js/commander.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-overview-scripts', plugin_dir_url(__FILE__) . 'js/overview.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-rpresizer-scripts', plugin_dir_url(__FILE__) . 'js/rpresizer.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-lpresizer-scripts', plugin_dir_url(__FILE__) . 'js/lpresizer.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-viewporthandles-scripts', plugin_dir_url(__FILE__) . 'js/viewporthandles.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-shortcutter-scripts', plugin_dir_url(__FILE__) . 'js/shortcutter.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-shortcutterframe-scripts', plugin_dir_url(__FILE__) . 'js/shortcutterframe.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-shortcutterctrl-scripts', plugin_dir_url(__FILE__) . 'js/shortcutterctrl.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-shortcuttershift-scripts', plugin_dir_url(__FILE__) . 'js/shortcuttershift.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-shortcutterdom-scripts', plugin_dir_url(__FILE__) . 'js/shortcutterdom.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-quicikadd-scripts', plugin_dir_url(__FILE__) . 'js/quicikadd.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-altclick-scripts', plugin_dir_url(__FILE__) . 'js/altclick.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-themer-scripts', plugin_dir_url(__FILE__) . 'js/themer.js', '', '1.0.0', true );
			wp_enqueue_script( 'tbf-main-scripts', plugin_dir_url(__FILE__) . 'js/main.min.js', array(), '1.0.0', true );
			$is_template = ( isset( $_GET['ct_template'] ) && $_GET['ct_template'] ) ? 1 : 0;
			wp_localize_script( 'tbf-main-scripts', 'tbfLocalVars', array( 'siteURL' => get_site_url(), 'istemplate' => $is_template ) );
		}
		
	endif;
}