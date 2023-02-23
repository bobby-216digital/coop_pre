const ANNOUNCEMENT_BAR_HEIGHT = 114;

function resizeHeroSection() {
  $(".new-hero-bg").each(function () {
    const heroHeight = $(this).height() - ANNOUNCEMENT_BAR_HEIGHT;
    $(this)
      .parent()
      .css("height", heroHeight + "px");
  });
}
function repositionText() {
  $(".hero-slider__slide").each(function () {
    const textSectionHeight = $(this).height();
    const heroSectionHeight = $(this).next().height();
    let textSectionTop = (heroSectionHeight - textSectionHeight) / 2;
    if (!isMobile()) textSectionTop = textSectionTop + ANNOUNCEMENT_BAR_HEIGHT;
    else textSectionTop = textSectionTop - ANNOUNCEMENT_BAR_HEIGHT / 2;

    $(this).css("top", textSectionTop + "px");
  });
}

function isMobile() {
  var isMobile = window.matchMedia("(max-width: 760px)");
  return isMobile.matches ? true : false;
}

$(window).resize(function () {
  if (isMobile()) resizeHeroSection();
  repositionText();
});

repositionText();
if (isMobile()) {
  resizeHeroSection();
}
