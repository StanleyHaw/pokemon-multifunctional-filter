document.addEventListener('DOMContentLoaded', function () {
  function setupScrollShadowEffect(
    scrollWrapperClass,
    shadowLeftClass,
    shadowRightClass,
  ) {
    const scrollWrapper = document.querySelector(`.${scrollWrapperClass}`);
    const shadowLeft = document.querySelector(`.${shadowLeftClass}`);
    const shadowRight = document.querySelector(`.${shadowRightClass}`);

    scrollWrapper.addEventListener('scroll', function () {
      const isHidden = scrollWrapper.classList.contains('shadow-invisible');
      if (scrollWrapper.scrollLeft === 0) {
        shadowLeft.classList.toggle('shadow-invisible', !isHidden);
        shadowRight.classList.toggle('shadow-invisible', isHidden);
      } else if (
        scrollWrapper.scrollLeft + scrollWrapper.clientWidth ===
        scrollWrapper.scrollWidth
      ) {
        shadowLeft.classList.toggle('shadow-invisible', isHidden);
        shadowRight.classList.toggle('shadow-invisible', !isHidden);
      } else {
        shadowLeft.classList.remove('shadow-invisible');
        shadowRight.classList.remove('shadow-invisible');
      }
    });
  }

  setupScrollShadowEffect(
    'pokemon-filter .scroll-wrapper',
    'pokemon-filter .scroll-inset-shadow-left',
    'pokemon-filter .scroll-inset-shadow-right',
  );
  setupScrollShadowEffect(
    'species-filter .scroll-wrapper',
    'species-filter .scroll-inset-shadow-left',
    'species-filter .scroll-inset-shadow-right',
  );
});
