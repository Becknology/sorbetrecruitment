<?php
/**
 * The template part for displaying results in search pages.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @package focus-magazine
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<?php if ( has_post_thumbnail() ) : ?>
		<div class="article-image">
			<?php the_post_thumbnail('gumt_focus_300X240'); ?>
		</div><!-- featured_image-->
	<?php endif; ?>

	<div class="article-details">
	<header class="entry-header">
		<?php the_title( sprintf( '<h1 class="entry-title"><a href="%s" rel="bookmark">', esc_url( get_permalink() ) ), '</a></h1>' ); ?>

		<?php if ( 'post' == get_post_type() ) : ?>
		<div class="entry-meta">
			<?php gumt_focus_theme_posted_on(); ?>
		</div><!-- .entry-meta -->
		<?php endif; ?>
	</header><!-- .entry-header -->

	<div class="entry-summary">
		<?php
		the_excerpt();
		?>
	</div><!-- .entry-summary -->
	</div><!-- .article-details-->


</article><!-- #post-## -->
