
$(document).ready(function(){
  
  /* Close parent div*/
  $(".js-close").click(function(){
    $(this).parent().remove();
  });

  /**
    * Grid functions
    **/

  /* Add main grid*/
    $(".js-create-main-grid").click(function(){
      $("main").append("<article class='g-1 l-box'><a class='js-create-grid' href='#'>Add</a>Some loremp ipsum factum </article>");
  });     
    
    /* Add grid */
  $(".js-create-grid").click(function(){
      $(this).parent().append("<article class='g-1 l-box'><a class='js-create-grid' href='#'>Add</a>Some loremp ipsum factum </article>");
  }); 

  /* Set and remove grid classes */

  // All screen sizes
  $(".js-set-1-1").click(function(){
    $(this).closest( "article" ).alterClass( 'g-1-* g-2-* g-3-* g-4-*', 'g-1-1' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-1';
  });

  $(".js-set-1-2").click(function(){
    $(this).closest( "article" ).alterClass( 'g-1-* g-2-* g-3-* g-4-*', 'g-1-2' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-2';
  });

  $(".js-set-1-3").click(function(){
    $(this).closest( "article" ).alterClass( 'g-1-* g-2-* g-3-* g-4-*', 'g-1-3' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-3';
  });

  $(".js-set-1-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-1-* g-2-* g-3-* g-4-*', 'g-1-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-4';
  });

  $(".js-set-1-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-1-* g-2-* g-3-* g-4-*', 'g-1-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-5';
  });

  $(".js-set-2-3").click(function(){
    $(this).closest( "article" ).alterClass( 'g-1-* g-2-* g-3-* g-4-*', 'g-2-3' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-3';
  });

  $(".js-set-2-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-1-* g-2-* g-3-* g-4-*', 'g-2-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-4';
  });

  $(".js-set-2-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-1-* g-2-* g-3-* g-4-*', 'g-2-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-5';
  });

  $(".js-set-3-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-1-* g-2-* g-3-* g-4-*', 'g-3-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='3-4';
  });

  $(".js-set-3-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-1-* g-2-* g-3-* g-4-*', 'g-3-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='3-5';
  });

  $(".js-set-4-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-1-* g-2-* g-3-* g-4-*', 'g-4-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='4-5';
  });


// Small screens  
  $(".js-set-sm-1-1").click(function(){
    $(this).closest( "article" ).alterClass( 'g-sm-*', 'g-sm-1-1' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-1';

  });

  $(".js-set-sm-1-2").click(function(){
    $(this).closest( "article" ).alterClass( 'g-sm-*', 'g-sm-1-2' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-2';
  });

  $(".js-set-sm-1-3").click(function(){
    $(this).closest( "article" ).alterClass( 'g-sm-*', 'g-sm-1-3' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-3';
  });

  $(".js-set-sm-1-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-sm-*', 'g-sm-1-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-4';
  });

  $(".js-set-sm-1-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-sm-*', 'g-sm-1-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-5';
  });

  $(".js-set-sm-2-3").click(function(){
    $(this).closest( "article" ).alterClass( 'g-sm-*', 'g-sm-2-3' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-3';
  });

  $(".js-set-sm-2-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-sm-*', 'g-sm-2-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-4';
  });

  $(".js-set-sm-2-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-sm-*', 'g-sm-2-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-5';
  });

  $(".js-set-sm-3-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-sm-*', 'g-sm-3-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='3-4';
  });

  $(".js-set-sm-3-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-sm-*', 'g-sm-3-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='3-5';
  });

  $(".js-set-sm-4-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-sm-*', 'g-sm-4-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='4-5';
  });

// Medium screens  
  $(".js-set-md-1-1").click(function(){
    $(this).closest( "article" ).alterClass( 'g-md-*', 'g-md-1-1' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-1';

  });

  $(".js-set-md-1-2").click(function(){
    $(this).closest( "article" ).alterClass( 'g-md-*', 'g-md-1-2' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-2';
  });

  $(".js-set-md-1-3").click(function(){
    $(this).closest( "article" ).alterClass( 'g-md-*', 'g-md-1-3' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-3';
  });

  $(".js-set-md-1-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-md-*', 'g-md-1-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-4';
  });

  $(".js-set-md-1-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-md-*', 'g-md-1-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-5';
  });

  $(".js-set-md-2-3").click(function(){
    $(this).closest( "article" ).alterClass( 'g-md-*', 'g-md-2-3' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-3';
  });

  $(".js-set-md-2-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-md-*', 'g-md-2-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-4';
  });

  $(".js-set-md-2-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-md-*', 'g-md-2-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-5';
  });

  $(".js-set-md-3-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-md-*', 'g-md-3-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='3-4';
  });

  $(".js-set-md-3-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-md-*', 'g-md-3-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='3-5';
  });

  $(".js-set-md-4-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-md-*', 'g-md-4-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='4-5';
  });

// Large screens  
  $(".js-set-lg-1-1").click(function(){
    $(this).closest( "article" ).alterClass( 'g-lg-*', 'g-lg-1-1' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-1';

  });

  $(".js-set-lg-1-2").click(function(){
    $(this).closest( "article" ).alterClass( 'g-lg-*', 'g-lg-1-2' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-2';
  });

  $(".js-set-lg-1-3").click(function(){
    $(this).closest( "article" ).alterClass( 'g-lg-*', 'g-lg-1-3' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-3';
  });

  $(".js-set-lg-1-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-lg-*', 'g-lg-1-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-4';
  });

  $(".js-set-lg-1-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-lg-*', 'g-lg-1-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-5';
  });

  $(".js-set-lg-2-3").click(function(){
    $(this).closest( "article" ).alterClass( 'g-lg-*', 'g-lg-2-3' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-3';
  });

  $(".js-set-lg-2-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-lg-*', 'g-lg-2-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-4';
  });

  $(".js-set-lg-2-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-lg-*', 'g-lg-2-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-5';
  });

  $(".js-set-lg-3-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-lg-*', 'g-lg-3-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='3-4';
  });

  $(".js-set-lg-3-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-lg-*', 'g-lg-3-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='3-5';
  });

  $(".js-set-lg-4-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-lg-*', 'g-lg-4-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='4-5';
  });

// Extra large screens  
  $(".js-set-xl-1-1").click(function(){
    $(this).closest( "article" ).alterClass( 'g-xl-*', 'g-xl-1-1' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-1';

  });

  $(".js-set-xl-1-2").click(function(){
    $(this).closest( "article" ).alterClass( 'g-xl-*', 'g-xl-1-2' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-2';
  });

  $(".js-set-xl-1-3").click(function(){
    $(this).closest( "article" ).alterClass( 'g-xl-*', 'g-xl-1-3' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-3';
  });

  $(".js-set-xl-1-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-xl-*', 'g-xl-1-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-4';
  });

  $(".js-set-xl-1-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-xl-*', 'g-xl-1-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='1-5';
  });

  $(".js-set-xl-2-3").click(function(){
    $(this).closest( "article" ).alterClass( 'g-xl-*', 'g-xl-2-3' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-3';
  });

  $(".js-set-xl-2-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-xl-*', 'g-xl-2-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-4';
  });

  $(".js-set-xl-2-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-xl-*', 'g-xl-2-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='2-5';
  });

  $(".js-set-xl-3-4").click(function(){
    $(this).closest( "article" ).alterClass( 'g-xl-*', 'g-xl-3-4' );
    $(this).parent().parent().parent().contents().last()[0].textContent='3-4';
  });

  $(".js-set-xl-3-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-xl-*', 'g-xl-3-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='3-5';
  });

  $(".js-set-xl-4-5").click(function(){
    $(this).closest( "article" ).alterClass( 'g-xl-*', 'g-xl-4-5' );
    $(this).parent().parent().parent().contents().last()[0].textContent='4-5';
  });

});
