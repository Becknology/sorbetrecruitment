<?php

/***** Register Widgets *****/

function gumt_focus_theme_register_posts_grid_2_widgets() {
	register_widget('Gumt_focus_theme_posts_grid_2_widget');
}
add_action('widgets_init', 'gumt_focus_theme_register_posts_grid_2_widgets');

class Gumt_focus_theme_posts_grid_2_widget extends WP_Widget {
    function __construct() {
        $widget_ops = array('classname' => 'gum_grid_block_2', 'description' => __('Posts Grid block 2', 'focus-magazine'));
        parent::__construct('focus-magazine-homepage-main2', __('Posts Grid 2', 'focus-magazine'), $widget_ops);
    }
    function widget($args, $instance) {
        extract($args);
        $title = apply_filters('widget_title', empty($instance['title']) ? '' : $instance['title'], $instance, $this->id_base);
        $category = isset($instance['category']) ? $instance['category'] : '';
        $tags = empty($instance['tags']) ? '' : $instance['tags'];
        $postcount = empty($instance['postcount']) ? '4' : $instance['postcount'];
        $offset = empty($instance['offset']) ? '' : $instance['offset'];
        $sticky = isset($instance['sticky']) ? $instance['sticky'] : 0;
        $show_cat = isset($instance['show_cat']) ? $instance['show_cat'] : 0;
        $show_date = isset($instance['show_date']) ? $instance['show_date'] : 1;

        echo $before_widget;
        if (!empty( $title)) {  echo '
      <div class="gum-grid-block-title">'.$before_title . esc_html($title) . $after_title.'</div>';
		} ?>
        <?php
		$args = array('posts_per_page' => $postcount, 'offset' => $offset, 'cat' => $category, 'tag' => $tags, 'ignore_sticky_posts' => $sticky);
		$counter = 1;
    $count=0;
		$the_query = new WP_Query($args);
		if($the_query->have_posts()):


		$first_grid_post='';
		while ( $the_query->have_posts() ) : $the_query->the_post();

			$post_id = get_the_ID();

			$img_src= '';
			if ( has_post_thumbnail($post_id ) ) {
				$post_image = wp_get_attachment_image_src( get_post_thumbnail_id( $post_id ), 'gumt_focus_400X270' );
				$img_src = $post_image[0];
			}
			$post_title = get_the_title();
			$excerpt = wp_trim_words(get_the_excerpt(),27,'...');
            $post_permalink = get_the_permalink();
			$post_author = get_the_author();
			$post_date = get_the_date('M d, Y');
			$post_categories = wp_get_post_categories( $post_id );
			$cat_html = '';
            $odd_even_class='';
            $cat_class = '';
			if(!empty($post_categories)){
				foreach($post_categories as $post_category){
					$cat = get_category( $post_category );

					$cat_class .= " gum-block-cat-".$cat->term_id;
					$cat_html .= '<li class="cat"><a href="'.esc_url(get_category_link($cat->term_id)).'">'.esc_html($cat->name).'</a></li>';
				}
			}
			if($show_cat != 1 ) $cat_html ='';
			$date_li='';
			if($show_date == 1) $date_li = '<li class="date">'.esc_html($post_date).'</li>';


            if($count%2 == 0) $odd_even_class='gum-blok-even';
            else $odd_even_class='gum-blok-odd';

      if($count % 2 == 0)
        $first_grid_post .="<div class='two-blocks-wrapper row no-gutters'>";     

			$first_grid_post .= '<div class="gum-block-wrapper gum-block-1-wrapper col-sm-6 gum-block-1-new '.esc_attr($odd_even_class).'">
    <div class="gum-block gum-block-1">
        <a href="'.esc_url($post_permalink).'" class="gum-block-post-img">
            <img src="'.esc_url($img_src).'" class="gum-p-img lazyloaded" alt="'.esc_attr($post_title).'" /></a>
        <div class="gum-block-data">
            <div class="gum-block-data-title">
                <h3 class="gum-block-post-title"><a href="'.esc_url($post_permalink).'">'.esc_html($post_title).'</a></h3>
                <ul class="pull-left">
                    <li class="block-post-author divider"><a href="'.esc_url( get_author_posts_url( get_the_author_meta( 'ID' ) ) ).'" title="'.esc_attr( get_the_author() ).'">'.esc_html($post_author).'</a></li>
                    '.$date_li.'
                </ul>
                <div class="clearfix"></div>
            </div>
            <p class="post-excerpt">'.esc_html($excerpt).'</p>
            <div class="clearfix"></div>
            <ul class="gum-post-cat">
                '.$cat_html.'
            </ul>
        </div>
    </div>
</div>';

if($count % 2 == 1) $first_grid_post .="</div>";
    $count++;
	endwhile;

	wp_reset_postdata();
	?>
		<div class="gum_posts_block_wrapper">
      <div class="gum_posts_block gum-grid-block-2">

         <?php echo $first_grid_post; ?>

      </div> <!-- gum_posts_block -->
   </div>
     <?php endif; ?>
        <?php
        echo $after_widget;
    }
    function update($new_instance, $old_instance) {
        $instance = $old_instance;
        $instance['title'] = sanitize_text_field($new_instance['title']);
        $instance['category'] = absint($new_instance['category']);
        $instance['postcount'] = absint($new_instance['postcount']);
        $instance['offset'] = absint($new_instance['offset']);
        $instance['tags'] = sanitize_text_field($new_instance['tags']);
        $instance['sticky'] = isset($new_instance['sticky']) ? strip_tags($new_instance['sticky']) : '';
        $instance['show_cat'] = isset($new_instance['show_cat']) ? strip_tags($new_instance['show_cat']) : '';

        $instance['show_date'] = isset($new_instance['show_date']) ? strip_tags($new_instance['show_date']) : '';

        return $instance;
    }
    function form($instance) {
        $defaults = array('title' => '', 'category' => '', 'tags' => '','sticky' => 0, 'postcount'=>4, 'offset' => 0, 'show_cat' => 1, 'show_date'=>1);
        $instance = wp_parse_args((array) $instance, $defaults); ?>

        <p>
            <label for="<?php echo esc_attr($this->get_field_id('title')); ?>"><?php _e('Title:', 'focus-magazine'); ?></label>
            <input class="widefat" type="text" value="<?php echo esc_attr($instance['title']); ?>" name="<?php echo esc_attr($this->get_field_name('title')); ?>" id="<?php echo esc_attr($this->get_field_id('title')); ?>" />
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('category')); ?>"><?php _e('Select a Category:', 'focus-magazine'); ?></label>
            <select id="<?php echo esc_attr($this->get_field_id('category')); ?>" class="widefat" name="<?php echo esc_attr($this->get_field_name('category')); ?>">
                <option value="0" <?php if (!$instance['category']) echo 'selected="selected"'; ?>><?php _e('All', 'focus-magazine'); ?></option>
                <?php
                $categories = get_categories(array('type' => 'post'));
                foreach($categories as $cat) {
                    echo '<option value="' . esc_attr($cat->cat_ID) . '"';
                    if ($cat->cat_ID == $instance['category']) { echo ' selected="selected"'; }
                    echo '>' . esc_html($cat->cat_name) . ' (' . esc_html($cat->category_count) . ')';
                    echo '</option>';
                }
                ?>
            </select>
        </p>
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('tags')); ?>"><?php _e('Filter Posts by Tags (e.g. lifestyle):', 'focus-magazine'); ?></label>
            <input class="widefat" type="text" value="<?php echo esc_attr($instance['tags']); ?>" name="<?php echo esc_attr($this->get_field_name('tags')); ?>" id="<?php echo esc_attr($this->get_field_id('tags')); ?>" />
        </p>
    
        <p>
            <label for="<?php echo esc_attr($this->get_field_id('offset')); ?>"><?php _e('Skip:', 'focus-magazine'); ?></label>
            <input type="text" size="2" value="<?php echo esc_attr($instance['offset']); ?>" name="<?php echo esc_attr($this->get_field_name('offset')); ?>" id="<?php echo esc_attr($this->get_field_id('offset')); ?>" /> <?php _e('Posts', 'focus-magazine'); ?>
        </p>
        <p>
            <input id="<?php echo esc_attr($this->get_field_id('sticky')); ?>" name="<?php echo esc_attr($this->get_field_name('sticky')); ?>" type="checkbox" value="1" <?php checked('1', $instance['sticky']); ?>/>
            <label for="<?php echo esc_attr($this->get_field_id('sticky')); ?>"><?php _e('Ignore Sticky Posts', 'focus-magazine'); ?></label>
        </p>
    	 <p>
      		<input id="<?php echo esc_attr($this->get_field_id('show_cat')); ?>" name="<?php echo esc_attr($this->get_field_name('show_cat')); ?>" type="checkbox" value="1" <?php checked('1', $instance['show_cat']); ?>/>
	  		<label for="<?php echo esc_attr($this->get_field_id('show_cat')); ?>"><?php _e('Show category name', 'focus-magazine'); ?></label>
    	</p>

    	 <p>
      		<input id="<?php echo esc_attr($this->get_field_id('show_date')); ?>" name="<?php echo esc_attr($this->get_field_name('show_date')); ?>" type="checkbox" value="1" <?php checked('1', $instance['show_date']); ?>/>
	  		<label for="<?php echo esc_attr($this->get_field_id('show_date')); ?>"><?php _e('Show date', 'focus-magazine'); ?></label>
    	</p>
    <?php
    }
}