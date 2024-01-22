const loadingOverlay = document.getElementById('loading-overlay');

const onScreenTemplates = {
  default: () => '',
  loading: () => `
    <div class="loading-spinner">
      <img src="./src/assets/loading-spinner/loading-spinner.svg" alt="loading-spinner" />
    </div>
    <div class="shadow-cover">
      <img src="./src/assets/loading-spinner/shadow-cover.svg" alt="shadow-cover" />
    </div>
    `,
};

export function showLoadingState() {
  loadingOverlay.innerHTML = onScreenTemplates.loading();
}

export function hideLoadingState() {
  loadingOverlay.innerHTML = onScreenTemplates.default();
}
