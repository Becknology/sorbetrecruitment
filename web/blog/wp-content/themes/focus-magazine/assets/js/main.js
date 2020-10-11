jQuery(document).ready(function($) {
	
	superfish_menu();
	
	jQuery('.gum-slider').slick();

	$('#gum_search_icon').click(function(e) {
		e.preventDefault();
      	$('.seach-box').addClass("displayBlock");
      	$('.gum-search-field').focus();
    });

    $('.gum-close-search').click(function(e) {
	    e.preventDefault();
      	$('.seach-box').removeClass("displayBlock");
    });
    $('#gum_search_icon').keypress(function(e){
	    e.preventDefault();
        if(e.which == 13){//Enter key pressed
            $('#gum_search_icon').click();//Trigger search button click event
        }
    });
    
	window.addEventListener('keydown', function(e){
	    if((e.key=='Escape'||e.key=='Esc'||e.keyCode==27)){
	        $('.gum-close-search').click();
	        $('.gum-slidein-menu-close').click();
	        $('.res-menu-close').click();
	        $('.res-search-close').click();
	        return false;
	    }
	}, true);


    $('.gum-slidein-menu-toggle').click(function(e){
	     e.preventDefault();
    	$('.toggle-menu-wrapper').addClass("show-slidein");
    	 return false;
    });
    $('.gum-slidein-menu-close').click(function(e) {
	    e.preventDefault();
      	$('.toggle-menu-wrapper').removeClass("show-slidein");
    });

    $('.page-title').wrap('<div class="page-title-wraper"></div>');

    //responsive click event
    $('.gum-res-menu-trigger').click(function(e){
	    e.preventDefault();
      $('#gum-responsive-sidebar-menu').addClass("show-slidein");

    });
    $('.res-menu-close').click(function(e) {
	    e.preventDefault();
      $('#gum-responsive-sidebar-menu').removeClass('show-slidein');
    });

    $('.gum-res-search-trigger').click(function(e){
	    e.preventDefault();
      $('#gum-responsive-sidebar-search').addClass("transformzero");

    });
    $('.res-search-close').click(function(e) {
	    e.preventDefault();
      $('#gum-responsive-sidebar-search').removeClass('transformzero');
    });
});
jQuery( window ).resize(function($) {
	superfish_menu();
});
function superfish_menu(){
    
      var screen_width = jQuery(window).width();
      jQuery('.sf-menu').superfish('destroy');
        if(screen_width < 992){
        			jQuery(".res-menu").addClass("resp_menu");
                    
                     jQuery(".sf-menu").addClass("mobile-menu");
                     jQuery(".mobile-menu").removeClass("sf-menu");
	                    jQuery("#menu-icon").on("click", function(){
	                            jQuery(".menu-top-container").slideToggle();
	                            jQuery(this).toggleClass("active");	                            
	                            return false;
	                    });
                        
        } 
        else{
        		jQuery(".res-menu").removeClass("resp_menu");
        		  jQuery(".mobile-menu").addClass("sf-menu");
                     jQuery(".sf-menu").removeClass("mobile-menu");
                      jQuery(".menu-top-container").fadeIn();
           var superfish_menu = jQuery('.sf-menu').superfish({
                    //add options here if required
                }); 
        }   
}
