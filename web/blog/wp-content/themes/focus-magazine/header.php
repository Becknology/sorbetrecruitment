<?php
/**
 * The header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="content">
 *
 * @package focus-magazine
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">

<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<a class="skip-link screen-reader-text" href="#content" id="skipper" tabindex="0"><?php esc_html_e( 'Skip to content', 'focus-magazine' ); ?></a>

<div id="gum-responsive-header" class="gum-responsive-header d-lg-none d-block">
    <div class="gum-res-menu-trigger-wrapper pull-left">
        <a href="#" class="gum-res-menu-trigger"><i class="fa fa-bars" aria-hidden="true"></i></a>
    </div>
    <div id="gum-responsive-sidebar-menu">
         
        <?php
        if ( has_nav_menu( 'mobileMenu' ) ) {
            $arg = array(
            'theme_location'  => 'mobileMenu',
            'container_class' => 'menu-mobile-menu-container',
            'container_id'    => '',
            'menu_class'      => 'sf-menu res-menu',
            'menu_id'         => 'res-menu',
          );

          wp_nav_menu( $arg );
        }
        ?>
        <a class="res-menu-close" href="#"><i class="fa fa-close" aria-hidden="true"></i></a>
    </div>
    <!-- #gum-responsive-sidebar-menu-->
    <!-- gum-res-menu-trigger-wrapper -->
    <div class="gum-res-logo">
        <?php
        
        $logo = get_theme_mod("logo-upload");

        ?>
        <a href="<?php echo  esc_url( home_url( '/' ) ); ?>">
        <?php echo esc_html(get_bloginfo('name')); ?>
        </a>
    </div>
    <!-- gum-res-logo -->

    <div class="gum-res-search pull-right">
        <div class="gum-res-search-trigger-wrapper">
            <a href="#" class="gum-res-search-trigger"><i class="fa fa-search" aria-hidden="true"></i></a>
        </div>
        <!-- gum-res-search-trigger-wrapper -->
        <div id="gum-responsive-sidebar-search" class="gum_res_search_wrapper">
          
            <div class="menu-mobile-search-container">
                <form role="search" method="get" class="search-form" action="<?php echo  esc_url( home_url( '/' ) ); ?>">
                <label class="search-box-wrap">
                <input type="search" class="search-field" placeholder="<?php esc_attr_e('Type &amp; hit enter', 'focus-magazine');?>" value="" name="s">

                </label>
            </form>
            </div>
            <!-- menu-mobile-search-container -->
            <a class="res-search-close" href="#"><i class="fa fa-close" aria-hidden="true"></i></a>
        </div>
        <!-- #gum-responsive-sidebar-search -->
    </div>
    

</div>

  <header class="main-header d-lg-block d-none">
	
	<div class="gum-header-style gum-header-style1 gum-slidein-enabled">
		<div class="header-main-bar ">
			<div class="gum-slidein-menu-icon-wrapper">
				<a class="gum-slidein-menu-toggle top" href=""><i class="fa fa-bars"></i></a>
				
			</div><!-- .gum-slidein-menu-icon-wrapper -->
			
			<!-- slidin-content -->
			<div class="gum-slidein-menu-icon-wrapper">
				<div class="toggle-menu-wrapper">
				<?php if ( has_custom_logo() ) : ?>
					<?php the_custom_logo(); ?>
				
				<?php else: ?>
				<a class="slidein-logo" href="<?php echo  esc_url( home_url( '/' ) ); ?>">
				<?php echo esc_html(get_bloginfo('name')); ?>
				</a>
				<?php endif; ?>
				
				<div class="gum-slidein-social">
					<ul>
				      	<?php
						$facebook_link = get_theme_mod("facebook_link");
						$twitter_link = get_theme_mod("twitter_link");
						$pin_link = get_theme_mod("pinterest_link");
						$youtube_link = get_theme_mod("youtube_link");
						$linkedin_link = get_theme_mod("linkedin_link");
						
						
				         if(!empty($facebook_link)) echo '<li class="facebook"><a href="'.esc_url($facebook_link).'"><i class="fa fa-facebook"></i></a></li>';
				         if(!empty($twitter_link)) echo '<li class="twitter"><a href="'.esc_url($twitter_link).'"><i class="fa fa-twitter"></i></a></li>';
				         if(!empty($pin_link)) echo '<li class="gplus"><a href="'.esc_url($pin_link).'"><i class="fa fa-pinterest"></i></a></li>';
				         if(!empty($youtube_link)) echo '<li class="youtube"><a href="'.esc_url($youtube_link).'"><i class="fa fa-youtube"></i></a></li>';
				         if(!empty($linkedin_link)) echo '<li class="linkedin"><a href="'.esc_url($linkedin_link).'"><i class="fa fa-linkedin"></i></a></li>'; 
				        
				         
				         ?>
				      </ul>
				</div><!-- .gum-slidein-social-->
				
					<?php
					if ( has_nav_menu( 'slideMenu' ) ) {
						$arg = array(
							'theme_location'  => 'slideMenu',
							'container_class' => 'toggle-menu',
							'container_id'    => '',
							'menu_class'      => 'gum-slideMenu',
							'menu_id'         => 'gum-slideMenu',
						);
						wp_nav_menu( $arg );
					}
					?>
					<a class="gum-slidein-menu-close" href="#close"><i class="fa fa-times"></i></a>
				</div><!-- .toggle-menu-wrapper -->
			</div><!-- .gum-slidein-menu-icon-wrapper -->
			<!-- slidein-content-end -->
			<div class="logo-wrapper "> 
				<?php if ( has_custom_logo() ) : ?>
					<?php the_custom_logo(); ?>
				
				<?php else: ?>
				<a href="<?php echo  esc_url( home_url( '/' ) ); ?>">
				<?php echo esc_html(get_bloginfo('name')); ?>
				</a>
				<?php endif; ?>
			</div>

		  	<div class="header-main-menu-wrapper">
				<div class="main-menu-wrapper">

					<div class="main-menu-content inner relative">
						<nav id="site-navigation" class="main-navigation hidden-xs" itemscope="itemscope" itemtype="http://schema.org/SiteNavigationElement">
							<?php
							if ( has_nav_menu( 'primary' ) ) {
								$arg = array(
									'theme_location'  => 'primary',
									'container_class' => 'menu-top-container',
									'container_id'    => '',
									'menu_class'      => 'sf-menu main-menu',
									'menu_id'         => 'primary-menu',
								);
								wp_nav_menu( $arg );
							}
							?>
						</nav><!-- site-navigation -->
					</div><!--main-menu-content-->					
					</div><!-- .main-menu-wrapper -->
				</div><!-- .header-main-menu-wrapper -->
				<div class="gum-top-social">
					<ul>
			          	<?php	
						
						$facebook_link = get_theme_mod("facebook_link");
						$twitter_link = get_theme_mod("twitter_link");
						$pin_link = get_theme_mod("pinterest_link");
						$youtube_link = get_theme_mod("youtube_link");
						$linkedin_link = esc_url(get_theme_mod("linkedin_link"));
				
			             if(!empty($facebook_link)) echo '<li class="facebook"><a href="'.esc_url($facebook_link).'"><i class="fa fa-facebook"></i></a></li>';
			             if(!empty($twitter_link)) echo '<li class="twitter"><a href="'.esc_url($twitter_link).'"><i class="fa fa-twitter"></i></a></li>';
			             if(!empty($pin_link)) echo '<li class="gplus"><a href="'.esc_url($pin_link).'"><i class="fa fa-pinterest"></i></a></li>';
			             if(!empty($youtube_link)) echo '<li class="youtube"><a href="'.esc_url($youtube_link).'"><i class="fa fa-youtube"></i></a></li>';
			             if(!empty($linkedin_link)) echo '<li class="linkedin"><a href="'.esc_url($linkedin_link).'"><i class="fa fa-linkedin"></i></a></li>';           
			             
			             ?>
			          </ul>
				</div><!-- .gum-top-social-->
			<div class="gum_search_icon-wrapper">
				<a id="gum_search_icon" class="gum_search_icon" data-width="header-main-bar" href="#">
					<i class="fa fa-search" aria-hidden="true"></i>
				</a>
				<div class="seach-box">
				<form role="search" method="get" class="search-form" action="<?php echo  esc_url( home_url( '/' ) ); ?>">			
					<input type="search" class="search-field gum-search-field" placeholder="<?php esc_attr_e('Type &amp; hit enter', 'focus-magazine');?>" value="" name="s">
					<a class="gum-close-search" href="#"><i class="fa fa-times"></i></a>
				</form>
				</div>
			</div><!-- .gum_search_icon-wrapper -->

		</div><!-- .header-main-bar-->
	</div><!-- .gum-header-style-->

   </header>
 	<div class="content_wrapper" id="content">
		   		<div class="content_border">