<?php
/**
* The template for displaying archive pages.
*
* Learn more: http://codex.wordpress.org/Template_Hierarchy
*
* @package focus-magazine
*/

get_header(); ?>

<div id="primary" class="content-area container mt-20">

  <div class="row">
  <main id="main" class="site-main col-sm-8 col-main" role="main">
    
    <?php if ( have_posts() ) : ?>
    
    <header class="page-header">
      	<?php
		  	the_archive_title( '<h1 class="page-title">', '</h1>' );
		  	the_archive_description( '<div class="taxonomy-description">', '</div>' );
		?>
          </header>
          <!-- .page-header -->          
          <div class="main-content">
          <?php 
            $count=0;
            while ( have_posts() ) : 

            the_post();

            if($count % 2 ==0)echo '<div class="row">';
            get_template_part( 'template-parts/content', get_post_format() );
            if($count % 2 == 1)echo '</div>';
            $count++;
          endwhile; ?>
          </div><!-- .main-content-->
          <?php gumt_focus_theme_pagination(); ?>
          
          <?php else : ?>
          
          <?php get_template_part( 'template-parts/content', 'none' ); ?>
          
          <?php endif; ?>
          
      </main>
      <!-- #main -->
      <?php get_sidebar(); ?>
</div>
<!-- #primary -->
</div>

<?php get_footer(); ?>
