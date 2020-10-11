<?php
/**
 *
 * @author  Gumtheme
 * @package focus-magazine
 * @since   1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'GumFocusLite_Admin' ) ) :

	/**
	 * GumFocusLite_Admin Class.
	 */
	class GumFocusLite_Admin {

		/**
		 *  Constructor
		*/
		public function __construct() {
			add_action( 'admin_menu', array( $this, 'admin_menu' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_styles' ) );
		}

		/**
		 *  Add admin menu.
		*/
		public function admin_menu() {
			$theme = wp_get_theme( get_template() );

			$page = add_theme_page( esc_html__( 'About', 'focus-magazine' ) . ' ' . $theme->display( 'Name' ), esc_html__( 'About', 'focus-magazine' ) . ' ' . $theme->display( 'Name' ), 'activate_plugins', 'focus-magazine-site', array(
				$this,
				'focus_magazine_dashboard',
			) );

		}

		/**
		 * Enqueue styles.
		 */
		public function enqueue_styles($hook) {

			if($hook != 'appearance_page_focus-magazine-site') {
                return;
        	}
			wp_enqueue_style( 'focus-magazine-admin', get_template_directory_uri() . '/inc/admin/css/admin.css', array(), GUMT_FOCUS_THEMEVER );
		}

		/**
		 * Dashboard
		 */
		public function focus_magazine_dashboard(){

			Gum_focus_html::dashboard();
		}

    }


endif;

return new GumFocusLite_Admin();
