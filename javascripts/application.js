$(document).ready(function(){

  // Subfooter image replacement
  var preload = new Image(1,1);
  $('.iconlink img').each(function(){
    var icon = $(this);
    var grey = icon.attr('src');
    var color = grey.replace('_grey.', '.');

    preload.src = color;
    icon.hover(function(){
      icon.attr('src', color);
    }, function(){
      icon.attr('src', grey);
    });
  });
  
  // Scroll to top
  $('a.scrollToTop').click(function(){
    $('html, body').animate( { scrollTop: 0 }, 'slow' );
    return false;
  });


  // Scroll subnav with page
  var nav = $('#internal-nav');
  function updateSubNav() {
    nav.animate({top: $(document).scrollTop()},{duration:500,queue:false});
    
    // Update subnav to reflect currently-shown section
    var inview = '#' + $('#content_services section .page-header h2:in-viewport:first').parents('section').attr('id'),
        $link = $('#internal-nav a').filter('[hash=' + inview + ']');
        
    if ($link.length && !$link.is('.active')) {
      $('#internal-nav a').removeClass('active');
      $link.addClass('active');    
    }
  }
  
  if (nav.length) {
    updateSubNav();
    $(window).scroll(function () { updateSubNav(); });
  }
  
});

