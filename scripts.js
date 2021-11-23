$('.nav-link').on('click',function() {
  $('.navbar-collapse').collapse('hide');
});


$(function(){  // $(document).ready shorthand
  $('.monster').fadeIn('slow');
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.hideme').each( function(i){
            
            var top_of_object = $(this).position().top + $(this).outerHeight();
            var top_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( top_of_window > top_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
                    
            }
            
        }); 
    
    });
    
});