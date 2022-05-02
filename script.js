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

  const fh = document.getElementById('fixed-header');
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
      fh.classList.add('is-show');
    } else {
      fh.classList.remove('is-show');
    }
  });
});