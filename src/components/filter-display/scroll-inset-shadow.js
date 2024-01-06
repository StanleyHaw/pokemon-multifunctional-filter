const pokemonFilter = document.querySelector('.pokemon-filter');
const pokemonScrollWrapper = pokemonFilter.querySelector('.scroll-wrapper');
const pokemonLeftshadow = pokemonFilter.querySelector(
  '.scroll-inset-shadow-left'
);
const pokemonRightshadow = pokemonFilter.querySelector(
  '.scroll-inset-shadow-right'
);

const speciesFilter = document.querySelector('.species-filter');
const speciesScrollWrapper = speciesFilter.querySelector('.scroll-wrapper');
const speciesLeftshadow = speciesFilter.querySelector(
  '.scroll-inset-shadow-left'
);
const speciesRightshadow = speciesFilter.querySelector(
  '.scroll-inset-shadow-right'
);

function setupScrollShadowEffect(scrollWrapper, shadowLeft, shadowRight) {
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
}

pokemonScrollWrapper.addEventListener('scroll', () => {
  setupScrollShadowEffect(
    pokemonScrollWrapper,
    pokemonLeftshadow,
    pokemonRightshadow
  );
});

speciesScrollWrapper.addEventListener('scroll', () => {
  setupScrollShadowEffect(
    speciesScrollWrapper,
    speciesLeftshadow,
    speciesRightshadow
  );
});
