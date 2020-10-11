<?php
/**
 * Template part for displaying single posts.
 *
 * @package focus-magazine
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="gum-breadcrumb">
		<?php
			$categories_list = get_the_category_list( esc_html__( ', ', 'focus-magazine' ) );
		?>
		<a href="<?php echo  esc_url( home_url( '/' ) ); ?>"><?php  _e( 'Home', 'focus-magazine' );?> </a> <i class="fa fa-angle-double-right"></i> <?php echo $categories_list; ?> <i class="fa fa-angle-double-right"></i> <?php the_title('<span class="bc_title">', '</span>' ); ?>
	</div>
	<header class="entry-header">
		<?php
			$post_id1 = get_the_ID();
			$post_categories = wp_get_post_categories( get_the_ID() );
			$cat_html = '';
			if(!empty($post_categories)){
				foreach($post_categories as $post_category){
					$single_cat = get_category( $post_category );

					echo '<a class="cat-link" href="'.esc_url(get_category_link($single_cat->term_id)).'">'.esc_html($single_cat->name).'</a>';
			}
		}
		?>		
		<?php if ( has_post_thumbnail() ) : ?>
			<div class="featured_image">
				<?php the_post_thumbnail('gumt_focus_730X420'); ?> 
			</div><!-- featured_image-->
		<?php endif; ?>

		<?php the_title( '<h1 class="entry-title">', '</h1>' ); ?>
		<div class="entry-meta">
			<?php gumt_focus_theme_posted_on(); ?>
		</div><!-- .entry-meta -->
		<?php
		
			$social_share =   esc_html(get_theme_mod( 'social_share_single')) ; 
			if($social_share != "hide") :
		?>
		<div class="single-page-social">
			<ul>
	          	<?php
	            
	              $social_html=gumt_focus_magazine_social_share(get_the_title(), get_the_permalink());
	              echo $social_html;
	             ?>
	            </ul>
		</div><!-- .single-page-social-->
		<?php endif; ?>

	</header><!-- .entry-header -->

	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'focus-magazine' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">		
     <div class="author-box">
     	<div class="gum-grid-block-title"><h3><?php _e("Author", "focus-magazine");?></h3></div>
     	<div class="author-details">
        	<div class="author-img col-sm-2"><?php echo get_avatar( get_the_author_meta( 'user_email' ), '100' ); ?></div>
			<div class="col-sm-8">
				<h4 class="author-name"><?php the_author_meta( 'display_name' ); ?></h4>
				<p class="author-description"><?php the_author_meta( 'description' ); ?></p>
           	</div><!-- col-sm-8 -->
		</div><!-- .author-details -->

        <div class="clearfix"></div>
     </div><!-- .author-box -->		
	</footer><!-- .entry-footer -->
	
	
</article><!-- #post-## -->
