// src/js/theme-toggle.js
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