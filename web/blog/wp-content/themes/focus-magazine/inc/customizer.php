<?php
/**
 * Focus Magazine Theme Customizer
 *
 * @package Focus Magazine
 */

/**
 * Add postMessage support for site title and description for the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */

function gumt_focus_theme_customize_preview_js() {
	wp_enqueue_script( 'focus-magazine_customizer', get_template_directory_uri() . '/js/customizer.js', array( 'customize-preview' ), '20130508', true );
}
add_action( 'customize_preview_init', 'gumt_focus_theme_customize_preview_js' );



/**
 * Adds the individual sections, settings, and controls to the theme customizer
 */
function gumt_focus_theme_customizer( $wp_customize ) {
	$wp_customize->add_section(
		'gum_theme',
		array(
			'title' => __( 'Theme Options', 'focus-magazine' ),
			'description' => __( 'This is a settings section.', 'focus-magazine' ),
			'priority' => 35,
			'capability' => 'edit_theme_options',
		)
	);

	$wp_customize->add_setting(
		'theme_color_setting',
		array(
			'default' => '#6c1690',
			'sanitize_callback' => 'sanitize_hex_color',
			'capability' => 'edit_theme_options',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'theme_color_setting',
			array(
				'label' => __( 'Theme Color Scheme', 'focus-magazine' ),
				'section' => 'colors',
				'settings' =>'theme_color_setting',
			)
		)
	);

	$wp_customize->add_setting(
		'theme_cat_color',
		array(
			'default' => '#fff',
			'sanitize_callback' => 'sanitize_hex_color',
			'capability' => 'edit_theme_options',
		)
	);

	$wp_customize->add_control(
		new WP_Customize_Color_Control(
			$wp_customize,
			'theme_cat_color',
			array(
				'label' => __('Category text', 'focus-magazine' ),
				'section' => 'colors',
				'settings' => 'theme_cat_color',
			)
		)
	);

	/**********
	Social Media links

	**********/

	$wp_customize->add_setting(
		'facebook_link',
		array(
			'sanitize_callback' => 'esc_url_raw',
			'capability' => 'edit_theme_options',
			'default' => '',
		)
	);

	$wp_customize->add_control(
		'facebook_link',
		array(
			'label' => __('Facebook Link', 'focus-magazine' ),
			'section' => 'gum_theme',
			'type' => 'url',
		)
	);

	$wp_customize->add_setting(
		'twitter_link',
		array(
			'sanitize_callback' => 'esc_url_raw',
			'capability' => 'edit_theme_options',
			'default' => '',
		)
	);
	$wp_customize->add_control(
		'twitter_link',
		array(
			'label' => __('Twitter Link', 'focus-magazine' ),
			'section' => 'gum_theme',
			'type' => 'url',
		)
	);
	$wp_customize->add_setting(
		'pinterest_link',
		array(
			'sanitize_callback' => 'esc_url_raw',
			'capability' => 'edit_theme_options',
			'default' => '',
		)
	);
	$wp_customize->add_control(
		'pinterest_link',
		array(
			'label' => __('Pinterest Link', 'focus-magazine' ),
			'section' => 'gum_theme',
			'type' => 'url',
		)
	);
	$wp_customize->add_setting(
		'youtube_link',
		array(
			'sanitize_callback' => 'esc_url_raw',
			'capability' => 'edit_theme_options',
			'default' => '',
		)
	);
	$wp_customize->add_control(
		'youtube_link',
		array(
			'label' => __('Youtube Link', 'focus-magazine' ),
			'section' => 'gum_theme',
			'type' => 'url',
		)
	);

	$wp_customize->add_setting(
		'linkedin_link',
		array(
			'sanitize_callback' => 'esc_url_raw',
			'capability' => 'edit_theme_options',
			'default' => '',
		)
	);

	$wp_customize->add_control(
		'linkedin_link',
		array(
			'label' => __('Linkedin Link', 'focus-magazine' ),
			'section' => 'gum_theme',
			'type' => 'url',
		)
	);
	
	$wp_customize->add_setting(
		'social_share_single',
		array(			
			'capability' => 'edit_theme_options',
			'default' => 'show',
			'sanitize_callback' => 'gumt_focus_magazine_sanitize_radio'
		)
	);
	$wp_customize->add_control( 'social_share_single', array(	    
		'label' => __( 'Social Share icons on Single post', 'focus-magazine' ),
		'section' => 'gum_theme',
		'type' => 'radio',
		'choices' => array(
			'show' => __('Show', 'focus-magazine'),
			'hide' => __('Hide', 'focus-magazine')
		)
	));

	/****
	Footer Copyright
	****/
	$wp_customize->add_setting(
		'copyright_textbox',
		array( 
			'sanitize_callback' => 'sanitize_text_field',
			'capability' => 'edit_theme_options',
			'default' => __('&copy; 2020', 'focus-magazine' ),
		)
	);

	$wp_customize->add_control(
		'copyright_textbox',
		array(
			'label' => __('Copyright text', 'focus-magazine' ),
			'section' => 'gum_theme',
			'type' => 'text',
		)
	);


	$wp_customize->get_setting( 'blogname' )->transport         = 'postMessage';
	$wp_customize->get_setting( 'blogdescription' )->transport  = 'postMessage';
	$wp_customize->get_setting( 'header_textcolor' )->transport = 'postMessage';

	$wp_customize->remove_control('header_textcolor');

	$wp_customize->remove_section('header_image');
}
add_action( 'customize_register', 'gumt_focus_theme_customizer' );


//radio box sanitization function
function gumt_focus_magazine_sanitize_radio( $input, $setting ){
  
    // Ensure input is a slug.
  $input = sanitize_key( $input );

  // Get list of choices from the control associated with the setting.
  $choices = $setting->manager->get_control( $setting->id )->choices;

  // If the input is a valid key, return it; otherwise, return the default.
  return ( array_key_exists( $input, $choices ) ? $input : $setting->default );              
      
}


add_action( 'wp_head', 'gumt_focus_theme_styles' );
function gumt_focus_theme_styles() {
	$theme_color = esc_attr(get_theme_mod("theme_color_setting"));
	$theme_cat_color = esc_attr(get_theme_mod("theme_cat_color"));

	?>
	<?php if(!empty($theme_color) || !empty($theme_cat_color)): ?>
	<style type="text/css">
		<?php if(!empty($theme_color)): ?>
			.gum_post_fullgrid.fullgrid_block_1:hover .gum_grid_link_img:before,
			.gum_post_fullgrid.fullgrid_block_3:hover .gum_grid_link_img:before,
			.gum_post_fullgrid.gum_carousel_item:hover .gum_grid_link_img:before,
			.gum-block-wrapper .gum-block a.gum-block-post-img:hover::before,
			.gum-block-wrapper .gum-block a.gum-block-post-img:hover::before{
				background: <?php echo $theme_color;?>;
				opacity: 0.5;
			}
			.main-menu-wrapper .sf-menu>li.current-menu-item,
			.main-menu-wrapper .sf-menu>li.current-menu-parent,
			.gum-post-cat li a,
			.gum-block-1-new .gum-post-cat li a,
			.widget .search-submit,
			body.single.single-post .entry-header .cat-link,
			.comments-area .comment-form .submit, .comments-area .form-submit input[type='submit'],
			ul.pagination li:hover a,
			ul.pagination li .current,
			input.search-submit{
				background: <?php echo $theme_color;?>;
			}
			.gum-block-wrapper .gum-block-post-title a:hover,
			.sidebar .footer-three-wrapper .footer-three-detail .footer-three-dt h5 a:hover,
			.gum-block-wrapper ul li.block-post-author,
			.gum-block-data:hover .gum-block-post-title a,
			.gum-block-data:hover .gum-read_more,
			.search .entry-title a:hover,
			.gum-responsive-header .gum-res-menu-trigger-wrapper .gum-res-menu-trigger,
			.gum-responsive-header .gum-res-search-trigger-wrapper .gum-res-search-trigger,
			.gum-responsive-header .gum-res-logo a
			{	color: <?php echo $theme_color;?>;}
		
		<?php endif; ?>
		<?php if(!empty($theme_cat_color)): ?>
		.gum-block-1-new .gum-post-cat li a,
		.gum-post-cat li a{
			color: <?php echo $theme_cat_color;?>;
		}
		<?php endif; ?>

	</style>
	<?php endif; ?>
	<?php
}
