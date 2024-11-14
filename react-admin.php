<?php
/*
* Plugin Name:       React Admin Page
* Plugin URI:        https://robertbiswas.com
* Description:       
* Version:           1.0.0
* Requires at least: 6.0.0
* Requires PHP:      7.4
* Author:            Robert Biswas
* Author URI:        https://robertbiswas.com
* License:           GPL v2 or later
* License URI:       https://www.gnu.org/licenses/gpl-2.0.html
* Text Domain:       rap
*/

if ( ! defined( 'ABSPATH' ) ) {
exit;
}

class React_Admin_Page {
	static $instance;
	public static function get_instance() {
		if ( ! self::$instance ) {
			self::$instance = new self();
		}
		return self::$instance;
	}

	private function __construct(){
		add_action( 'admin_menu', array( $this, 'react_admin_page' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'react_admin_scripts' ) );
	}

	public function react_admin_scripts($hook){
		if ( 'toplevel_page_react_admin' != $hook ){
			return;
		}
		$asset_file = include( plugin_dir_path(__FILE__) . 'build/index.asset.php' );

		wp_enqueue_script('react-admin-js', plugin_dir_url(__FILE__) . 'build/index.js', $asset_file['dependencies'], $asset_file['version'], true );
		wp_enqueue_style('react-tailwind-style', plugin_dir_url(__FILE__) . 'assets/css/tailwind.css', array(), $asset_file['version']);


	}

	public function react_admin_page(){
		add_menu_page(
			'React Admin',
			'React Admin Page',
			'manage_options',
			'react_admin',
			array( $this, 'react_admin_page_content' ),
			'dashicons-admin-generic'
		);
	}

	public function react_admin_page_content(){
		echo '<div id="wpbody"><div id="wpbody-content"><div id="react-admin-page"></div></div></div>';
	}
}

React_Admin_Page::get_instance();
