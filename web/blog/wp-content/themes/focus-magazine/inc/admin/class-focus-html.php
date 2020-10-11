<?php
/**
 * Html for admin side focus theme.
 *
 * @author  Gumtheme
 * @package Focus Magazine
 * @since   1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Gum_focus_html' ) ) :

    
	/**
	 * Gum_focus_html Class.
	 */
	class Gum_focus_html { 

        public static function links(){
            $links =[
                'docs' => 'https://gumtheme.com',
                'customize' => admin_url( "/customize.php" ),
                'support' => "https://gumtheme.com",
                "theme_link" => 'https://gumtheme.com/wp/focus/',
                "theme_demo" => 'https://gumtheme.com/wp/focus/',
                "free_pro_link"  => 'https://gumtheme.com/wp/focus/',
                "leave_review"  => 'https://gumtheme.com/wp/focus/',
                "theme_setting_page" => admin_url( "/themes.php" )."?page=focus-magazine-site",
            ];
    
            return $links;
        }

        public static function dashboard(){
            $theme = wp_get_theme( get_template() );
            $links = self::links();
            
            $tab = "index";
            
            if(!empty($_GET['tab'])){
                $pages = ["recom-plugin", "free-pro"];
                if(in_array($_GET['tab'], $pages))   $tab = $_GET['tab'];
            }
?>  
                <div class="gumtheme-focus-wrapper">
                    <div class="focus-header">
                        <h1><?php _e('Welcome to', 'focus-magazine');?> <span><?php echo $theme->display( 'Name' ); ?> <?php echo $theme->display( 'Version' ); ?></span></h1>
                        <p><?php echo $theme->display( 'Description' ); ?></p>
                        
                        <p class="focus-links">
                            <a href="<?php echo esc_url($links['theme_link']);?>" class="button button-secondary" target="_blank"><?php _e( "Theme Info", 'focus-magazine' );?></a>

                            <a href="<?php echo esc_url($links['theme_demo']);?>" class="button button-secondary docs" target="_blank"><?php _e( "View Demo", 'focus-magazine' );?></a>

                            <a href="<?php echo esc_url($links['free_pro_link']);?>" class="button button-primary docs" target="_blank"><?php _e( "View PRO version", 'focus-magazine' );?></a>
                        </p>
                    </div><!-- .header -->
                
                <div class="focus-content">
                    <ul class="nav nav-tabs" role="tablist">
                        <li class="nav-item">
                        <a class="nav-link<?php echo $tab=="index"? " active":""; ?>" href="<?php echo esc_url($links['theme_setting_page']);?>&tab=index"><?php _e( "Get Started", 'focus-magazine' );?></a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link<?php echo $tab=="recom-plugin"? " active":""; ?>" href="<?php echo esc_url($links['theme_setting_page']);?>&tab=recom-plugin"><?php _e( "Recommended Plugins", 'focus-magazine' );?>	</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link<?php echo $tab=="free-pro"? " active":""; ?>" href="<?php echo esc_url($links['theme_setting_page']);?>&tab=free-pro"><?php _e( "Free Vs Pro" , 'focus-magazine');?></a>
                        </li>
                       
                    </ul>
                    <div class="tab-content">
                        <div class="gum-tab-pane fade active show">
                            <div class="gum-tab-pane-content">
                                <?php if( $tab == "index") self::welcome(); ?>
                                <?php if( $tab == "recom-plugin") self::recom_plugin(); ?>
                                <?php if( $tab == "free-pro") self::free_vs_pro(); ?>
                            </div><!-- .gum-tab-pane-content -->
                            
                        </div><!-- .gum-tab-pane -->
                        <?php /*<div class="gum-tab-pane-sidebar">
                            <?php self::sidebar(); ?>
                        </div><!-- .gum-tab-pane-sidebar --> */ ?>
                        
                  </div>

                </div><!-- .focus-content -->
            </div><!-- .gumtheme-focus-wrapper-->
            <?php
        }

        public static function welcome(){
                $links = self::links();
            ?>
                    <div class="focus-section">
                        <h2><?php _e('Getting Started', 'focus-magazine');?></h2>
                        <div class="focus-section-content">
                            <div class="focus-customizer-opt">
                                <span class="focus-option__icon dashicons dashicons-admin-appearance"></span>
                                <a class="focus-option__label" target="_blank" href="<?php echo esc_url($links['customize']);?>">
	                                <?php _e('Theme Customizer', 'focus-magazine');?>
	                            </a>
                                <p><?php _e('All Theme Options are available via Customize screen.', 'focus-magazine');?> </p>
                                <a href="<?php echo esc_url($links['customize']);?>" class="button button-secondary"><?php _e('Customizer Settings', 'focus-magazine');?></a>
                            </div>
                            <div class="focus-customizer-opt">
                                <span class="focus-option__icon dashicons dashicons-media-text"></span>
                                <a class="focus-option__label" target="_blank" href="<?php echo esc_url($links['docs']);?>" target="_blank">
	                                <?php _e('Documentation', 'focus-magazine');?>
		                        </a>
                                <p><?php _e('How to setup pages. video tutorials.', 'focus-magazine');?> </p>
                                <p>
								<a href="<?php echo esc_url($links['docs']);?>" class="button button-secondary" target="_blank"><?php _e('Documentation', 'focus-magazine');?></a>
							</p>
                            </div><!-- .focus-customizer-opt -->
                            <div class="focus-customizer-opt">
                                <span class="focus-option__icon dashicons dashicons-sos"></span>
                                <a class="focus-option__label" target="_blank" href="<?php echo esc_url($links['support']);?>" target="_blank">
	                                <?php _e('Support', 'focus-magazine');?>
		                        </a>
                                <p><?php _e('We are here to help you build an awesome website.<br/>Please get in touch if you have any questions.', 'focus-magazine');?> </p>
                                <p>
								<a href="<?php echo esc_url($links['support']);?>" class="button button-secondary" target="_blank"><?php _e('Support', 'focus-magazine');?></a>
							</p>
                            </div><!-- .focus-customizer-opt -->
                            <div class="focus-customizer-opt">
                                <span class="focus-option__icon dashicons dashicons-star-filled"></span>
                                <a class="focus-option__label" target="_blank" href="<?php echo esc_url($links['leave_review']);?>" target="_blank">
	                                <?php _e('Leave a Review', 'focus-magazine');?>
	                            </a>
                                <p><?php _e('If you like the theme, please do leave a review.<br/>Review are really helpful for us.', 'focus-magazine');?></p>
                                <p>
								<a href="<?php echo esc_url($links['leave_review']);?>" class="button button-secondary" target="_blank">
									<?php _e('Leave a Review', 'focus-magazine');?>
								</a>
							</p>
                            </div><!-- .focus-customizer-opt -->
                        </div><!-- focus-section-content-->
                    </div><!-- .focus-section -->
            <?php
        }

        public static function sidebar(){

        }

        public static function recom_plugin(){
            ?>
            <div class="focus-section">
             <h2><?php  esc_html_e("We recommend following plugins", 'focus-magazine') ?></h2>
             <ul>

                <li>
                    <a href="<?php echo esc_url( 'https://wordpress.org/plugins/woocommerce/');?>" target="_blank"><?php _e( 'WooCommerce', 'focus-magazine');?></a>
                </li>
                <li>
                    <a href="<?php echo esc_url( 'https://wordpress.org/plugins/wp-pagenavi/');?>" target="_blank"><?php _e( 'WP-PageNavi', 'focus-magazine');?></a>
                </li>
                <li>
                    <a href="<?php echo esc_url( 'https://wordpress.org/plugins/wordpress-seo/');?>" target="_blank"><?php _e( 'Yoast SEO', 'focus-magazine');?></a>
                </li>
             </ul>
            </div><!-- .focus-section -->
            <?php
        }
        public static function free_vs_pro(){
			$features = [
				"Support" => [
					"free" => "Forum",
					"pro" => "Forum + Emails/Support Ticket"
				],
				"Rich snippets" => [
					"free" => "no",
					"pro" => "yes"
				],
				"Page Speed Optimised" => [
					"free" => "no",
					"pro" => "yes"
				],
				"Live Search" => [
					"free" => "no",
					"pro" => "yes"
				],
				"Header Options" => [
					"free" => "1",
					"pro" => "3"
				],
				
				"Custom footer" => [
					"free" => "1",
					"pro" => "3"
				],
				"Advance Mega Menu" => [
					"free" => "no",
					"pro" => "yes"
				],
				
				"Font Size Options" => [
					"free" => "no",
					"pro" => "yes"
				],
				"Google Fonts Options" => [
					"free" => "no",
					"pro" => "yes"
				],
				"Custom Widgets" => [
					"free" => "4",
					"pro" => "8"
				],
				"Social Icons" => [
					"free" => "6",
					"pro" => "20"
				],
				"Social Sharing" => [
					"free" => "no",
					"pro" => "yes"
				],
				"WP5 Gutenberg page blocks" => [
					"free" => "no",
					"pro" => "yes"
				],
				"Grid filter" => [
					"free" => "no",
					"pro" => "yes"
				],
				"Grid pagination" => [
					"free" => "no",
					"pro" => "yes"
				],
				"Related Posts" => [
					"free" => "no",
					"pro" => "yes"
				],
				"Footer Copyright Editor" => [
					"free" => "yes",
					"pro" => "yes"
				],
				"Videos" => [
					"free" => "no",
					"pro" => "yes"
				],
				"Reviews" => [
					"free" => "no",
					"pro" => "yes"
				],
				"1 Click demo install" => [
					"free" => "no",
					"pro" => "yes"
				],
				"Popular posts" => [
					"free" => "no",
					"pro" => "yes"
				],
				"Liked posts" => [
					"free" => "no",
					"pro" => "yes"
				],
				
				
			];
			$icon = [
				"yes" => '<span class="dashicons dashicons-yes"></span>',
				"no" => '<span class="dashicons dashicons-no"></span>',
			]
            ?>
            
            <div class="focus-section">
                <h2><?php _e("Free vs Pro", 'focus-magazine') ?></h2>
                <p><?php _e( 'Upgrade to PRO version for more exciting features.', 'focus-magazine');?></p>
                <table class="gum-table">
                    <thead>
                        <tr>
                            <th class="table-feature-title"><h3><?php _e('Features', 'focus-magazine');?></h3></th>
                            <th><h3><?php _e('Focus Magazine', 'focus-magazine');?></h3></th>
                            <th><h3><?php _e('Focus Magazine Pro', 'focus-magazine');?></h3></th>
                        </tr>
                    </thead>
                    <tbody>
	                    <?php foreach($features as $feature_key => $feature) : ?>
	                    
	                    <tr>
		                    <td><h3><?php echo $feature_key; ?></h3></td>
		                    <td>
			                    <?php if(isset($feature["free"]))
				                    {
					                    if($feature["free"] == "yes" || $feature["free"] == "no") echo $icon[$feature["free"]];
					                    else echo $feature["free"];
				                   	}
				                ?>
		                    </td>
		                    <td>
			                    <?php if(isset($feature["pro"]))
				                    {
					                    if($feature["pro"] == "yes" || $feature["pro"] == "no") echo $icon[$feature["pro"]];
					                    else echo $feature["pro"];
				                   	}
				                ?>
		                    </td>
	                    </tr>
	                    <?php endforeach; ?>
                        
                    </tbody>
                </table>
            </div><!-- .focus-section -->
            
            <?php
            
        }
    }
endif;


