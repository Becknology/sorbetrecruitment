<?php
/**
* The template for displaying 404 pages (not found).
*
* @package focus-magazine
*/

get_header(); ?>

<div class="container">
<div class="row">

<div id="primary" class="content-area mt-20 col-md-8">
  <main id="main" class="site-main" role="main">
    
    <section class="error-404 not-found">
      <header class="page-header">
        <h1 class="page-title">
          <?php esc_html_e( 'Oops! That page can&rsquo;t be found.', 'focus-magazine' ); ?>
        </h1>
      </header>
      <!-- .page-header -->
      
      <div class="page-content">
        <p>
          <?php esc_html_e( 'It looks like nothing was found at this location. Maybe try one of the links below or a search?', 'focus-magazine' ); ?>
        </p>
        
        <?php get_search_form(); ?>
                  
              </div>
              <!-- .page-content -->
          </section>
          <!-- .error-404 -->
          
      </main>
      <!-- #main -->
</div><!-- #primary -->

<?php get_sidebar(); ?>
</div>
</div>
<?php get_footer(); ?>
