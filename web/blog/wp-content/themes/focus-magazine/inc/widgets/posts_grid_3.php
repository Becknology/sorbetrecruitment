<?php

/***** Register Widgets *****/

function gumt_focus_my_recent_widget_registration() {
  unregister_widget('WP_Widget_Recent_Posts');
  register_widget('Gumt_focus_My_Recent_Posts_Widget');
}
add_action('widgets_init', 'gumt_focus_my_recent_widget_registration');




class Gumt_focus_My_Recent_Posts_Widget extends WP_Widget {
    function __construct() {
        $widget_ops = array('classname' => 'sidebar_post', 'description' => __('Posts with featured image', 'focus-magazine'));
        parent::__construct('gum-sidebar-posts', __('Posts Grid 3', 'focus-magazine'), $widget_ops);
    }
    function widget($args, $instance) {
        extract($args);
        $title = apply_filters('widget_title', empty($instance['title']) ? '' : $instance['title'], $instance, $this->id_base);
        $category = isset($instance['category']) ? $instance['category'] : '';
        $tags = empty($instance['tags']) ? '' : $instance['tags'];
        $postcount = empty($instance['postcount']) ? '3' : $instance['postcount'];
        $offset = empty($instance['offset']) ? '' : $instance['offset'];
        $sticky = isset($instance['sticky']) ? $instance['sticky'] : 0;
        $random = isset($instance['random']) ? $instance['random'] : 0;
        $show_date = isset($instance['show_date']) ? $instance['show_date'] : 0;

        echo $before_widget;
        if (!empty( $title)) { echo $before_title . esc_attr($title) . $after_title; } ?>
        <?php
		$args = array('posts_per_page' => $postcount, 'offset' => $offset, 'cat' => $category, 'tag' => $tags, 'ignore_sticky_posts' => $sticky, 'show_date' =>$show_date);
		if($random == 1)$args['orderby'] = 'rand';
		$counter = 1;
		$the_query = new WP_Query($args);
		if($the_query->have_posts()): 
		
		$count = 0;
		$widget_posts = '';

		while ( $the_query->have_posts() ) : $the_query->the_post(); 
			
			$post_id = get_the_ID();
			$image_sizeIs='gumt_focus_150X90';

			$img_src= '';
			if ( has_post_thumbnail($post_id ) ) {
				$post_image = wp_get_attachment_image_src( get_post_thumbnail_id( $post_id ), $image_sizeIs );
				$img_src = $post_image[0];
			}
			
			$post_permalink = get_the_permalink();
			$post_title = wp_trim_words(get_the_title(),6,'...');
			$post_date='';
			if($show_date){				
				$temp=get_the_date('M d, Y');
				$post_date = '<h6 class="post-date">'.esc_attr($temp).'</h6>';
			}
			$cat_html = '';
			$post_categories = wp_get_post_categories( $post_id );

			$post_author_ref=get_author_posts_url( get_the_author_meta( 'ID' ) );
			$author=get_the_author();

			if(!empty($post_categories)){
				foreach($post_categories as $post_category){
					$cat = get_category( $post_category );


					$cat_html .= '<li class="cat"><a href="'.get_category_link($cat->term_id).'">'.$cat->name.'</a></li>';
				}
			}

			$post_image='';
			if(strlen($img_src) > 3){
				$post_image = '';
			}
			$widget_posts .='

			<div class="footer-three-detail footer-ap">
                <div class="footer-three-fig">
                	<a href="'.esc_url($post_permalink).'"><img src="'.esc_url($img_src).'" alt="'.esc_html($post_title).'" /></a>
                </div>
                <div class="footer-three-dt">
                    <h5 calss="post-title"><a href="'.esc_url($post_permalink).'">
                    	'.esc_html($post_title).'
                    </a></h5>
                    <h6 class="post-author"><a href="'.esc_html($post_author_ref).'" title="'.esc_html($author).'">'.esc_html($author).'</a></h6>		
					
                    '.$post_date.'
					
                </div><!-- .footer-three-dt-->
            </div><!-- .footer-three-detail -->
';
				
			
	endwhile; 
	wp_reset_postdata();
	?>
		<div class="footer-three-wrapper">
			<div class="footer-three-detail-wrapper">
			<?php echo $widget_posts; ?>
			</div>
		</div><!-- .footer-three-wrapper -->        
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
        $instance['random'] = isset($new_instance['random']) ? strip_tags($new_instance['random']) : '';
        $instance['show_date'] = isset($new_instance['show_date']) ? strip_tags($new_instance['show_date']) : '';

        return $instance;
    }
    function form($instance) {
        $defaults = array('title' => '', 'category' => '', 'tags' => '','sticky' => 0, 'offset' => 0, 'random'=>0,'postcount'=>3,'show_date'=>0);
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

			<input type="text" size="2" value="<?php echo esc_attr($instance['postcount']); ?>" name="<?php echo esc_attr($this->get_field_name('postcount')); ?>" id="<?php echo esc_attr($this->get_field_id('postcount')); ?>" /> <?php _e('Number of Posts', 'focus-magazine'); ?>
	    </p>
        <p>
      		<input id="<?php echo esc_attr($this->get_field_id('random')); ?>" name="<?php echo esc_attr($this->get_field_name('random')); ?>" type="checkbox" value="1" <?php checked('1', $instance['random']); ?>/>
	  		<label for="<?php echo esc_attr($this->get_field_id('random')); ?>"><?php _e('Random Posts', 'focus-magazine'); ?></label>
    	</p>
        <p>
            <input id="<?php echo esc_attr($this->get_field_id('sticky')); ?>" name="<?php echo esc_attr($this->get_field_name('sticky')); ?>" type="checkbox" value="1" <?php checked('1', $instance['sticky']); ?>/>
            <label for="<?php echo esc_attr($this->get_field_id('sticky')); ?>"><?php _e('Ignore Sticky Posts', 'focus-magazine'); ?></label>
        </p>

    	<p>
            <input id="<?php echo esc_attr($this->get_field_id('show_date')); ?>" name="<?php echo esc_attr($this->get_field_name('show_date')); ?>" type="checkbox" value="1" <?php checked('1', $instance['show_date']); ?>/>
            <label for="<?php echo esc_attr($this->get_field_id('show_date')); ?>"><?php _e('Show date', 'focus-magazine'); ?></label>
        </p>

    	<?php
    }
}