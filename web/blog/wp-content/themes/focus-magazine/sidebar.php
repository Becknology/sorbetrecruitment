<?php
/**
 * The sidebar containing the main widget area.
 *
 * @package focus-magazine
 */

if ( ! is_active_sidebar( 'sidebar-1' ) ) {
	return;
}
?>

<div id="secondary" class="widget-area col-sm-4 col-md-4 sidebar" role="complementary">
	<?php dynamic_sidebar( 'sidebar-1' ); ?>
</div><!-- #secondary -->
<div class="clearfix"></div>