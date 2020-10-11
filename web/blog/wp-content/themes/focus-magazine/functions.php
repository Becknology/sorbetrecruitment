<?php
/**
 * Focus Magazine functions and definitions
 *
 * @package focus-magazine
 */
define('GUMT_FOCUS_THEMEVER', '1.1.8' );
define('GUMT_FOCUS_TEMPLATE_URI', get_template_directory_uri());
define('GUMT_FOCUS_TEMPLATE_URL',get_site_url());

if (!function_exists('gumt_focus_theme_setup')): /**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
    function gumt_focus_theme_setup()
    {
        /*
         * Make theme available for translation.
         * Translations can be filed in the /languages/ directory.
         * If you're building a theme based on Focus Magazine, use a find and replace
         * to change 'focus-magazine' to the name of your theme in all the template files
         */
        load_theme_textdomain('focus-magazine', get_template_directory() . '/languages');

        // Add default posts and comments RSS feed links to head.
        add_theme_support('automatic-feed-links');

        /*
         * Let WordPress manage the document title.
         * By adding theme support, we declare that this theme does not use a
         * hard-coded <title> tag in the document head, and expect WordPress to
         * provide it for us.
         */
        add_theme_support('title-tag');

        /*
         * Enable support for Post Thumbnails on posts and pages.
         *
         * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
         */
        add_theme_support('post-thumbnails');
		
		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support(
			'custom-logo',
			array(
				'height'      => 50,
				'width'       => 185,
				'flex-width'  => false,
				'flex-height' => false,
			)
		);
		
        // This theme uses wp_nav_menu() in one location.
        register_nav_menus(array(
            'primary' => esc_html__('Primary Menu', 'focus-magazine'),
            'slideMenu' => esc_html__('Slide Menu', 'focus-magazine'),
            'footerMenu' => esc_html__('Footer Menu', 'focus-magazine'),
            'mobileMenu' => esc_html__('Mobile Menu', 'focus-magazine')
        ));

        /*
         * Switch default core markup for search form, comment form, and comments
         * to output valid HTML5.
         */
        add_theme_support('html5', array(
            'search-form',
            'comment-form',
            'comment-list',
            'gallery',
            'caption'
        ));

        // Set up the WordPress core custom background feature.
        add_theme_support('custom-background', apply_filters('Theme_custom_background_args', array(
            'default-color' => 'ffffff',
            'default-image' => ''
        )));

        // Add support for editor styles.
		add_theme_support( 'editor-styles' );

		// Enqueue editor styles.
		add_editor_style( 'style-editor.css' );

        add_image_size('gumt_focus_150X90', 150, 90, array( 'center', 'top' ));

        add_image_size('gumt_focus_400X270', 400, 270, array( 'center', 'top' ));

        add_image_size('gumt_focus_730X420', 730, 420, array( 'center', 'top' ));

        add_image_size('gumt_focus_300X240', 300, 240, array( 'center', 'top' ));

    }
endif; // gumt_focus_theme_setup

add_action('after_setup_theme', 'gumt_focus_theme_setup');

function gumt_focus_theme_pagination($gumt_pages = '')
{
    global $wp_query;
    $big = 999999999; // need an unlikely integer
    $gumt_pages = paginate_links( array(
        'base' => str_replace( $big, '%#%', esc_url( get_pagenum_link( $big ) ) ),
        'format' => '?paged=%#%',
        'current' => max( 1, get_query_var('paged') ),
        'total' => $wp_query->max_num_pages,
        'prev_next' => false,
        'type'  => 'array',
        'prev_next'   => true,
        'prev_text'    => __( '&laquo;', 'focus-magazine' ),
        'next_text'    => __( '&raquo;', 'focus-magazine'),
    ) );
    $output = '';

    if ( is_array( $gumt_pages ) ) {

        $output .=  '<ul class="pagination">';
        foreach ( $gumt_pages as $page ) {
            $output .= "<li>$page</li>";
        }
        $output .= '</ul>';

        $gumt_dom = new DOMDocument();

        $gumt_dom->loadHTML( mb_convert_encoding( $output, 'HTML-ENTITIES', 'UTF-8' ) );

        $gumt_xpath = new DOMXpath( $gumt_dom );

        $page_numbers = $gumt_xpath->query( "//*[contains(concat(' ', normalize-space(@class), ' '), ' page-numbers ')]" );

        foreach ( $page_numbers as $page_numbers_item ) {

            $page_numbers_item_classes = explode( ' ', $page_numbers_item->attributes->item(0)->value );
            if ( in_array( 'current', $page_numbers_item_classes ) ) {
                $list_item_attr_class = $gumt_dom->createAttribute( 'class' );
                $list_item_attr_class->value = 'mynewclass';
                $page_numbers_item->parentNode->appendChild( $list_item_attr_class );
            }

            $page_numbers_item->attributes->item(0)->value = str_replace(
                            'current',
                            'active',
                            $page_numbers_item->attributes->item(0)->value );

            $page_numbers_item->attributes->item(0)->value = str_replace(
                            'page-numbers',
                            'page-link',
                            $page_numbers_item->attributes->item(0)->value );
        }
        $output = $gumt_dom->saveHTML();
    }
    echo $output;
}

function gumt_focus_theme_content_width()
{
    $GLOBALS['content_width'] = apply_filters('gumt_focus_theme_content_width', 640);
}
add_action('after_setup_theme', 'gumt_focus_theme_content_width', 0);

if (!isset($content_width)) {
    $content_width = 600;
}


function gumt_focus_theme_widgets_init()
{
    register_sidebar(array(
        'name' => esc_html__('Homepage Header', 'focus-magazine'),
        'id' => 'homepage-header',
        'description' => '',
        'before_widget' => '<div class="homepage_header" id="">',
        'after_widget' => '</div>',
        'before_title' => '<h1 class="widget-title">',
        'after_title' => '</h1>'
    ));

    register_sidebar(array(
        'name' => esc_html__('Homepage Sidebar Left', 'focus-magazine'),
        'id' => 'homepage-sidebar-left',
        'description' => '',
        'before_widget' => '<div class="widget gum_widget gum_home_sidebar_left" id="gum_home_sidebar_left">',
        'after_widget' => '</div>',
        'before_title' => '<div class="gum_post_grid_header"> <div class="gum-grid-block-title"><h3 class="widget-title">',
        'after_title' => '</h3></div></div>'
    ));

    register_sidebar(array(
        'name' => esc_html__('Homepage Main', 'focus-magazine'),
        'id' => 'homepage-main',
        'description' => '',
        'before_widget' => '<div class="homepage_main home_main_widget" id="">',
        'after_widget' => '</div>',
        'before_title' => '<h3>',
        'after_title' => '</h3>'
    ));

    register_sidebar(array(
        'name' => esc_html__('Homepage Sidebar Right', 'focus-magazine'),
        'id' => 'homepage-sidebar-right',
        'description' => '',
        'before_widget' => '<div class="widget gum_widget gum_home_sidebar_right" id="gum_home_sidebar_right">',
        'after_widget' => '</div>',
        'before_title' => '<div class="gum_post_grid_header"> <div class="gum-grid-block-title"><h3 class="widget-title">',
        'after_title' => '</h3></div></div>'
    ));

    register_sidebar(array(
        'name' => esc_html__('Homepage Footer', 'focus-magazine'),
        'id' => 'homepage-footer',
        'description' => '',
        'before_widget' => '<div class="homepage_footer" id="">',
        'after_widget' => '</div>',
        'before_title' => '<h1 class="widget-title">',
        'after_title' => '</h1>'
    ));

    register_sidebar(array(
        'name' => esc_html__('Sidebar', 'focus-magazine'),
        'id' => 'sidebar-1',
        'description' => '',
        'before_widget' => '<aside id="%1$s" class="widget %2$s">',
        'after_widget' => '</aside>',
        'before_title' => '<div class="gum-grid-block-title"><h3 class="widget-title">',
        'after_title' => '</h3></div>'
    ));

    /**** Footer Widgets *****/
    register_sidebar(array(
        'name' => esc_html__('Footer 1', 'focus-magazine'),
        'id' => 'footer-1',
        'description' => '',
        'before_widget' => '<div class="widget gum_footer_widget" id="">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="footer-widget-title">',
        'after_title' => '</h3>'
    ));
    register_sidebar(array(
        'name' => esc_html__('Footer 2', 'focus-magazine'),
        'id' => 'footer-2',
        'description' => '',
        'before_widget' => '<div class="widget gum_footer_widget" id="">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="footer-widget-title">',
        'after_title' => '</h3>'
    ));
    register_sidebar(array(
        'name' => esc_html__('Footer 3', 'focus-magazine'),
        'id' => 'footer-3',
        'description' => '',
        'before_widget' => '<div class="widget gum_footer_widget" id="">',
        'after_widget' => '</div>',
        'before_title' => '<h3 class="footer-widget-title">',
        'after_title' => '</h3>'
    ));


}
add_action('widgets_init', 'gumt_focus_theme_widgets_init');

/**
 * Enqueue scripts and styles.
 */
function gumt_focus_theme_scripts()
{

    wp_enqueue_style('focus-magazine-google-font', '//fonts.googleapis.com/css?family=Montserrat:400,700|Open+Sans:400,700');
    
    wp_enqueue_style('focus-magazine-font-awesome', get_template_directory_uri() . '/assets/font-awesome/css/font-awesome.min.css');
    
    wp_enqueue_style('focus-magazine-superfish', get_template_directory_uri() . '/assets/js/superfish/css/superfish.css');
    
    wp_enqueue_style('focus-magazine-bootstrap', get_template_directory_uri() . '/assets/css/bootstrap.css');
    
    wp_enqueue_style('focus-magazine-style', get_stylesheet_uri());

    wp_enqueue_script('focus-magazine-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20200115', true);

    wp_enqueue_script('focus-magazine-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20200115', true);

    wp_enqueue_script('focus-magazine-modernizr', get_template_directory_uri() . '/assets/js/modernizr.custom.js', array( 'jquery'), '20200115');

    wp_enqueue_script('focus-magazine-easing', get_template_directory_uri() . '/assets/js/jquery.easing.js', array( 'jquery'), '20200115');

    wp_enqueue_script('focus-magazine-hoverIntent', get_template_directory_uri() . '/assets/js/jquery.hoverIntent.js', array(), '20200115');

    wp_enqueue_script('focus-magazine-superfish', get_template_directory_uri() . '/assets/js/superfish/js/superfish.js', array('jquery'), '20200115');

    wp_enqueue_script('focus-bootstrap-script', get_template_directory_uri() . '/assets/js/bootstrap.js', array('jquery'), '20200115');

    wp_enqueue_script('focus-slick', get_template_directory_uri() . '/assets/js/slick.js', array('jquery'), '20200115');

    wp_enqueue_script('focus-magazine-main-javascript',get_template_directory_uri().'/assets/js/main.js');


    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'gumt_focus_theme_scripts');

function gumt_focus_theme_add_editor_styles()
{
    add_editor_style(get_template_directory_uri() . '/assets/css/custom-editor-style.css');
}
add_action('admin_init', 'gumt_focus_theme_add_editor_styles');


/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/inc/jetpack.php';

/**
 * Load custom widgets.
 */
require get_template_directory() . '/inc/theme_widgets.php';

/**
 * Load Admin classes.
 */
require get_template_directory() . '/inc/admin/init.php';



function gumt_focus_theme_skip_link_focus_fix() {
    
    ?>
    <script>
    /(trident|msie)/i.test(navigator.userAgent)&&document.getElementById&&window.addEventListener&&window.addEventListener("hashchange",function(){var t,e=location.hash.substring(1);/^[A-z0-9_-]+$/.test(e)&&(t=document.getElementById(e))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())},!1);
    </script>
    <?php
}
add_action( 'wp_print_footer_scripts', 'gumt_focus_theme_skip_link_focus_fix' );

function gumt_focus_magazine_social_share($post_title, $post_link){
	
	$html = "";
	$html .= '<li class="facebook"><a href="https://www.facebook.com/sharer/sharer.php?u='.urlencode(esc_url($post_link)).'" target="_blank"><i class="fa fa-facebook"></i></a></li>';
	$html .= '<li class="twitter"><a href="https://twitter.com/intent/tweet?url='.urlencode(esc_url($post_link)).'&text='.urlencode(esc_attr($post_title)).'"  target="_blank"><i class="fa fa-twitter"></i></a></li>';
	$html .= '<li class="pinterest"><a href="http://pinterest.com/pin/create/button/?url='.urlencode(esc_url($post_link)).'&media=&description='.urlencode(esc_attr($post_title)).'"  target="_blank"><i class="fa fa-pinterest"></i></a></li>';
	$html .= '<li class="linkedin"><a href="http://www.linkedin.com/shareArticle?mini=true&url='.urlencode(esc_url($post_link)).'&title='.urlencode(esc_attr($post_title)).'"  target="_blank"><i class="fa fa-linkedin"></i></a></li>';
	
	return $html;
}