<?php
/**
 * Template part for displaying posts.
 *
 * @package focus-magazine
 */
	$post_id1 = get_the_ID();
	$img_src= '';
	if ( has_post_thumbnail( ) ) {
		$post_image = wp_get_attachment_image_src( get_post_thumbnail_id( get_the_ID() ), 'gumt_focus_400X270' );
		$img_src = $post_image[0];
	}
	$post_permalink = get_the_permalink();

	$post_categories = wp_get_post_categories( get_the_ID() );
	$cat_html = '';
	if(!empty($post_categories)){
		foreach($post_categories as $post_category){
			$single_cat = get_category( $post_category );


			$cat_html .= '<li class="cat"><a href="'.esc_url(get_category_link($single_cat->term_id)).'">'.esc_html($single_cat->name).'</a></li>';
		}
	}

	$date_li = '<li class="date">'.esc_html(get_the_date('M d, Y')).'</li>';

	/** if too many categories assigned to the post then make category position relative. **/
	$category = get_the_category();
	$category_count = count($category);
	$too_many_cat_class = ' ';
	if(!empty($category_count) && $category_count > 3) $too_many_cat_class = ' many-categories ';
?>
<div class="gum-block-wrapper gum-block-1-wrapper gum-block-odd gum-grid-block-1-item gum-grid-block-1-1 col-sm-6 gum-block-cat-14 gum-block-1-new<?php echo $too_many_cat_class; ?><?php echo (!empty($img_src))? "has_img":"no-img"; ?>">
    <div class="gum-block gum-block-1">
    	<?php if(!empty($img_src)) : ?>
        <a href="<?php echo esc_url($post_permalink);?>" class="gum-block-post-img">
            <img src="<?php echo esc_url($img_src);?>" class="gum-p-img lazyloaded" alt="<?php the_title();?>">
        </a>
        <?php endif; ?>
        <div class="gum-block-data">
            <div class="gum-block-data-title">
                <h3 class="gum-block-post-title"><a href="<?php echo esc_url($post_permalink);?>"><?php the_title();?></a></h3>
                <ul class="pull-left">
                    <li class="block-post-author divider"><?php the_author();?></li>
                    <?php echo $date_li;?>
                </ul>
                <div class="clearfix"></div>
            </div>
            <p class="post-excerpt"><?php the_excerpt();?></p>
            <a href="<?php echo esc_url($post_permalink); ?>" class="gum-read_more"><?php _e("Read More", "focus-magazine");?></a>
            <ul class="gum-post-cat">
                <?php echo $cat_html;?>
            </ul>
        </div>
    </div>
</div>
