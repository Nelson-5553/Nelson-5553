function applyTheme() {
  const rootElement = document.documentElement;
  const currentTheme = localStorage.getItem('theme');

  if (!currentTheme) {
    // Default to dark mode if no theme is set
    rootElement.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else if (currentTheme === 'dark') {
    rootElement.classList.add('dark');
  } else {
    rootElement.classList.remove('dark');
  }

  updateThemeIcon();
}

function updateThemeIcon() {
  const toggleButton = document.getElementById('theme-toggle');
  const isDarkMode = document.documentElement.classList.contains('dark');

  if (toggleButton) {
    // Show/hide icons based on the theme
    const sunIcon = toggleButton.querySelector('svg:nth-child(1)');
    const moonIcon = toggleButton.querySelector('svg:nth-child(2)');

    if (isDarkMode) {
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    } else {
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    }
  }
}

function setupThemeToggle() {
  const toggleButton = document.getElementById('theme-toggle');
  const rootElement = document.documentElement;

  if (toggleButton) {
    toggleButton.addEventListener('click', () => {
      if (rootElement.classList.contains('dark')) {
        rootElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      } else {
        rootElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      }
      updateThemeIcon();
    });
  }
}

// Initial theme setup
applyTheme();
setupThemeToggle();

// Handle theme persistence during Astro view transitions
document.addEventListener('astro:page-load', () => {
  applyTheme();
  setupThemeToggle();
});
