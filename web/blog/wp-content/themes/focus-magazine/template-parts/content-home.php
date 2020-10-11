<?php 
	$homepage_sidebar_left=false;
	$homepage_sidebar_right=false;

	$homepage_sidebar_leftValue='';
	$homepage_contentValue='col-md-12 col-sm-12 col-xs-12';
	$homepage_sidebar_rightValue='';

	if(is_active_sidebar('homepage-sidebar-left') && is_active_sidebar('homepage-sidebar-right')){
	//both left right sidebar
		$homepage_sidebar_leftValue='col-lg-3 col-md-12';
		$homepage_contentValue='col-md-6 col-sm-6 col-xs-12';
		$homepage_sidebar_rightValue='col-lg-3 col-md-12';
		$homepage_sidebar_left=$homepage_sidebar_right=true;
	}
	else if(is_active_sidebar('homepage-sidebar-left')){//left sidebar
		$homepage_sidebar_leftValue='col-md-3 col-sm-3';
		$homepage_contentValue='col-lg-9 col-md-12 ';
		$homepage_sidebar_left=true;
	}
	else if(is_active_sidebar('homepage-sidebar-right')){//right sidebar
		$homepage_contentValue='col-lg-9 col-md-12 col-xs-12';
		$homepage_sidebar_rightValue='col-lg-3 col-md-12';
		$homepage_sidebar_right=true;
	}
?>

	<div class="col-header">
	<?php dynamic_sidebar('homepage-header'); ?>
	</div>

<div class="container">
	<div class="row">
	<?php if($homepage_sidebar_left): ?>
	<div class="<?php echo esc_attr($homepage_sidebar_leftValue); ?> sidebar">
	<?php dynamic_sidebar('homepage-sidebar-left'); ?>
	</div><!-- sidebar -->
	<?php endif; ?>

	<div class="<?php echo esc_attr($homepage_contentValue);?> col-main">
	<?php dynamic_sidebar('homepage-main'); ?>
	</div><!-- col-main -->

	<?php if($homepage_sidebar_right): ?>
	<div class="<?php echo esc_attr($homepage_sidebar_rightValue); ?> sidebar">
	<?php dynamic_sidebar('homepage-sidebar-right'); ?>
	</div><!-- sidebar -->
	<?php endif; ?>
	</div>
</div><!-- .container-->
	
	<div class="col-footer">
		<div class="container">
			<?php dynamic_sidebar('homepage-footer'); ?>
		</div>
	</div>