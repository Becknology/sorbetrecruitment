<?php
/**
 * The template for displaying all single posts.
 *
 * @package focus-magazine
 */

get_header(); ?>

	<div id="primary" class="single-post container">
		<div class="row">
		<main id="main" class="site-main col-sm-8 col-main" role="main">

		<?php while ( have_posts() ) : the_post(); ?>

			<?php get_template_part( 'template-parts/content', 'single' ); ?>

			<?php
				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;
			?>

		<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
		<?php get_sidebar(); ?>
		</div>
	</div><!-- #primary -->


<?php get_footer(); ?>
