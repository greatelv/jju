$(function() {

  
  //Navigation Toggle Event
  $('#toggle').click(function() {
    var elem = $('#nav');
    if(elem.hasClass('open')) {
      elem.removeClass('open');
    } else {
      elem.addClass('open');
    }
  });
});
