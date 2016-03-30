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

  $('#projects .pure-g > div').click(function(){
    var projectId = $(this).attr('data-id') || 1;
    location.href="#/project/"+projectId;
  })
});
