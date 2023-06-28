$(document).ready(function () {
  $('.allSliders').bxSlider();

  $('.main-menu').meanmenu({
    meanMenuContainer: '#mobile-menu',
    meanScreenWidth: 767,
  });
  $('.video-play-btn').magnificPopup({
    type: 'video',
  });
});

