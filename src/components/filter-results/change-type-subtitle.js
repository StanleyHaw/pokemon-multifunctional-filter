function replaceAbilitySubtitle() {
  const abilitySubtitles = document.querySelectorAll('.subtitle');

  abilitySubtitles.forEach((subtitle) => {
    if (window.innerWidth <= 767) {
      subtitle.textContent = subtitle.textContent.replace('屬性', '');
    }
  });
}

replaceAbilitySubtitle();

window.addEventListener('resize', replaceAbilitySubtitle);
