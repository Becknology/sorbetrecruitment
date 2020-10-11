<?php
/**
 * Jetpack Compatibility File
 * See: https://jetpack.me/
 *
 * @package Focus Magazine
 */

/**
 * Add theme support for Infinite Scroll.
 * See: https://jetpack.me/support/infinite-scroll/
 */
function gumt_focus_theme_jetpack_setup() {
	add_theme_support( 'infinite-scroll', array(
		'container' => 'main',
		'render'    => 'gumt_focus_theme_infinite_scroll_render',
		'footer'    => 'page',
	) );
} // end function Theme_jetpack_setup
add_action( 'after_setup_theme', 'gumt_focus_theme_jetpack_setup' );

/**
 * Custom render function for Infinite Scroll.
 */
function gumt_focus_theme_infinite_scroll_render() {
	while ( have_posts() ) {
		the_post();
		get_template_part( 'template-parts/content', get_post_format() );
	}
} // end function Theme_infinite_scroll_render
