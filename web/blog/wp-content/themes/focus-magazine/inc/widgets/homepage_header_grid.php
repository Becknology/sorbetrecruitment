<?php

/***** Register Widgets *****/

function gumt_focus_theme_register_homepage_widgets() {
	register_widget('Gumt_focus_theme_homepage_header_widget');
}
add_action('widgets_init', 'gumt_focus_theme_register_homepage_widgets');


class Gumt_focus_theme_homepage_header_widget extends WP_Widget {
    function __construct() {
        $widget_ops = array('classname' => 'header_post_grid', 'description' => __('Header Grid Widget to display posts in grid format based on categories or tags. Please use it in Homepage Header', 'focus-magazine'));
        parent::__construct('focus-magazine-homepage-header', __('Header Post Grid', 'focus-magazine'), $widget_ops);
    }
    function widget($args, $instance) {
        extract($args);
        $title = apply_filters('widget_title', empty($instance['title']) ? '' : $instance['title'], $instance, $this->id_base);
        $category = isset($instance['category']) ? $instance['category'] : '';
        $tags = empty($instance['tags']) ? '' : $instance['tags'];
        $postcount = empty($instance['postcount']) ? '5' : $instance['postcount'];
        $offset = empty($instance['offset']) ? '' : $instance['offset'];
        $sticky = isset($instance['sticky']) ? $instance['sticky'] : 0;

        echo $before_widget;
        if (!empty( $title)) { echo $before_title . esc_html($title) . $after_title; } 
        
        $args = array('posts_per_page' => $postcount, 'offset' => $offset, 'cat' => $category, 'tag' => $tags, 'ignore_sticky_posts' => $sticky);
		$counter = 1;
		$the_query = new WP_Query($args);
		if($the_query->have_posts()): 
		
		$count = 0;
		$remaining_posts = '';
		$first_grid_post = '';
		$second_grid_post= '';
		while ( $the_query->have_posts() ) : $the_query->the_post(); 
			
			$post_id = get_the_ID();
			$img_src= '';
			if ( has_post_thumbnail($post_id ) ) {
				$post_image = wp_get_attachment_image_src( get_post_thumbnail_id( $post_id ), 'large' );
				$img_src = $post_image[0];
			}
			$post_permalink = get_the_permalink();
			$post_title = get_the_title();
			$post_date = get_the_date('M d, Y');
			$post_categories = wp_get_post_categories( $post_id );
			$cat_html = '';
			if(!empty($post_categories)){
				foreach($post_categories as $post_category){
					$cat = get_category( $post_category );
					
					
					$cat_html .= '<li class="cat"><a href="'.esc_url(get_category_link($cat->term_id)).'">'.esc_html($cat->name).'</a></li>';
				}
			}
			
			if($count == 0){			
			$first_grid_post = '<div class="col-sm-5 col-xs-12 fullgrid_block_1_wrapper">
								    <div class="gum_post_fullgrid fullgrid_block_1">
								        <a href="'.esc_url($post_permalink).'" class="gum_grid_link gum_grid_link_img" style="background-image: url(\''.esc_url($img_src).'\')"></a>
								        <div class="gum_post_data">
								            <ul class="gum-post-cat">
								                '.$cat_html.'
								                <li class="block-date">'.esc_html($post_date).'</li>
								            </ul>
								            <h3 class="p_title"><a href="'.esc_url($post_permalink).'">'.esc_html($post_title).'</a></h3>
								        </div>
								    </div>
								</div><!-- .fullgrid_block_1_wrapper-->';
			
			} // count==0 
			else if($count > 0 && $count <= 2){
				$second_grid_post .= '<div class="fullgrid_block_3_wrapper">
									    <div class="gum_post_fullgrid gum-smal-grid fullgrid_block_3">
									        <a href="'.esc_url($post_permalink).'" class="gum_grid_link gum_grid_link_img"><img src="'.esc_url($img_src).'" alt="'.esc_attr($post_title).'" /></a>
									        <div class="gum_post_data">
									            <ul class="gum-post-cat">
									                '.$cat_html.'
									                <li class="block-date">'.esc_html($post_date).'</li>
									            </ul>
									            <h3 class="p_title"><a href="'.esc_url($post_permalink).'">'.esc_html($post_title).'</a></h3>
									        </div>
									    </div>
									</div>';
			}
			
			else{
				
				$remaining_posts .= '<div class="col-sm-2 col-xs-6 fullgrid_block_1_wrapper">
									    <div class="gum_post_fullgrid fullgrid_block_1">
									        <a href="'.esc_url($post_permalink).'" class="gum_grid_link gum_grid_link_img"><img src="'.esc_url($img_src).'" alt="'.esc_attr($post_title).'" /></a>
									        <div class="gum_post_data">
									            <ul class="gum-post-cat">
									                '.$cat_html.'
									                <li class="block-date">'.esc_html($post_date).'</li>
									            </ul>
									            <h3 class="p_title"><a href="'.esc_url($post_permalink).'">'.esc_html($post_title).'</a></h3>
									        </div>
									    </div>
									</div>';
				
			}
			
		$count++;
	endwhile; 
	wp_reset_postdata();
	?>
		<div class="gum_posts_grid_wrapper">
				<div class="gum_posts_grid_slide">
					<div class="row no-gutters">
				<?php echo $first_grid_post;?>
				
				<div class="col-sm-3 col-xs-12 middle-element">
					<?php echo $second_grid_post; ?>
				</div>
				
				<?php echo $remaining_posts; ?>
					
				</div>
		</div><!-- .gum_posts_grid_slide -->
	</div><!-- .gum_posts_grid_wrapper -->        
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
        return $instance;
    }
    function form($instance) {
        $defaults = array('title' => '', 'category' => '', 'tags' => '','sticky' => 0, 'offset' => 0);
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
    	<?php
    }
}