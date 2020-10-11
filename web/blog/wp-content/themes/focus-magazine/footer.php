<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package focus-magazine
 */

?>

	</div><!-- content_border-->
</div><!-- content_wrapper-->


<footer class="site-footer-wrapper" role="contentinfo">
	<div class="site-footer1 container">
	<div class="site-footer row">
		<div class="col-lg-4">
			<?php dynamic_sidebar('footer-1'); ?>
		</div><!-- col-main -->
		<div class="col-lg-4">
			<?php dynamic_sidebar('footer-2'); ?>
		</div><!-- col-main -->
		<div class="col-lg-4">
			<?php dynamic_sidebar('footer-3'); ?>
		</div><!-- col-main -->			
	</div><!-- site-footer -->
	</div><!-- .site-footer1-->
	
	<div class="copyright">
		<div class="container">
			<div class="row">
				<div class="copyy-rat"><?php echo esc_html(get_theme_mod("copyright_textbox")); ?>
				<?php esc_html_e( 'Theme by', 'focus-magazine' ); ?>
					<a href="<?php echo esc_url('https://gumtheme.com/', 'focus-magazine');?>" target="_blank" rel="designer" ><?php _e('Gumtheme', 'focus-magazine');?></a>					
				</div>
				<div class="pull-right themeby">
					<?php
					if ( has_nav_menu( 'footerMenu' ) ) {
						$arg = array(
							'theme_location'  => 'footerMenu',
							'container_class' => 'footer-menu-wrapper',
							'container_id'    => '',
							'menu_class'      => 'footer-menu',
							'menu_id'         => '',
						);
						wp_nav_menu( $arg );
					}
					?>
				</div>
			</div>
		</div><!-- .container -->
	</div>
</footer><!-- .site-footer-wrapper -->

<?php wp_footer(); ?>

</body>
</html>
