var toggleNavigation = function() {
  if($('.nav-col').is(':visible')) {
    $('.nav-col').fadeOut("slow", function() {
      $('.body-col').removeClass( "col-xs-8 col-sm-9 col-md-10" );
    });
  } else {
    $('.nav-col').fadeIn("slow");
    $('.body-col').addClass( "col-xs-8 col-sm-9 col-md-10" );
  }
};
