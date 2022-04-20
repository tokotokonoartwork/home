$(function() {
  $('#menu-logo').click(function() {
    if ($('.menu-bar').hasClass('open')) {
      $('.menu-bar').slideUp();
      $('.menu-bar').removeClass('open');
    } else {
      $('.menu-bar').slideDown();
      $('.menu-bar').addClass('open');
    }
  });
});