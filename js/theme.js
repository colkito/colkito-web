/**
 * Theme Toggle - Dark/Light/System mode
 * Vanilla JS equivalent of next-themes
 */
(function() {
  'use strict';

  const STORAGE_KEY = 'theme';
  const THEMES = { LIGHT: 'light', DARK: 'dark', SYSTEM: 'system' };

  // Get stored preference or default to system
  function getStoredTheme() {
    try {
      return localStorage.getItem(STORAGE_KEY) || THEMES.SYSTEM;
    } catch (e) {
      return THEMES.SYSTEM;
    }
  }

  // Get system preference
  function getSystemTheme() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? THEMES.DARK
      : THEMES.LIGHT;
  }

  // Resolve theme (system -> actual theme)
  function resolveTheme(theme) {
    return theme === THEMES.SYSTEM ? getSystemTheme() : theme;
  }

  // Apply theme to document
  function applyTheme(theme) {
    const resolved = resolveTheme(theme);
    document.documentElement.classList.toggle('dark', resolved === THEMES.DARK);

    // Update meta theme-color
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.content = resolved === THEMES.DARK ? '#1e293b' : '#ffffff';
    }
  }

  // Set and store theme
  function setTheme(theme) {
    try {
      localStorage.setItem(STORAGE_KEY, theme);
    } catch (e) {
      // localStorage not available
    }
    applyTheme(theme);
    updateButtonIcon();
    closeMenu();
  }

  // Update button icon based on resolved theme
  function updateButtonIcon() {
    const resolved = resolveTheme(getStoredTheme());
    const sunIcon = document.getElementById('theme-icon-sun');
    const moonIcon = document.getElementById('theme-icon-moon');

    if (sunIcon && moonIcon) {
      sunIcon.style.display = resolved === THEMES.LIGHT ? 'block' : 'none';
      moonIcon.style.display = resolved === THEMES.DARK ? 'block' : 'none';
    }
  }

  // Toggle menu visibility
  function toggleMenu() {
    const menu = document.getElementById('theme-menu');
    if (menu) {
      menu.classList.toggle('open');
    }
  }

  // Close menu
  function closeMenu() {
    const menu = document.getElementById('theme-menu');
    if (menu) {
      menu.classList.remove('open');
    }
  }

  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function() {
    if (getStoredTheme() === THEMES.SYSTEM) {
      applyTheme(THEMES.SYSTEM);
      updateButtonIcon();
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
    const themeSwitch = document.querySelector('.theme-switch');
    if (themeSwitch && !themeSwitch.contains(e.target)) {
      closeMenu();
    }
  });

  // Update footer year
  function updateFooterYear() {
    var yearEl = document.querySelector('.current-year');
    if (yearEl) {
      yearEl.textContent = new Date().getFullYear();
    }
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    updateButtonIcon();
    updateFooterYear();

    // Bind toggle button
    const toggleBtn = document.getElementById('theme-toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', function(e) {
        e.stopPropagation();
        toggleMenu();
      });
    }

    // Bind theme options
    document.querySelectorAll('[data-theme]').forEach(function(btn) {
      btn.addEventListener('click', function() {
        setTheme(this.dataset.theme);
      });
    });
  });

  // Apply theme immediately (before DOMContentLoaded) to prevent flash
  applyTheme(getStoredTheme());

  // Expose API for debugging
  window.themeToggle = {
    setTheme: setTheme,
    getTheme: getStoredTheme,
    getResolvedTheme: function() { return resolveTheme(getStoredTheme()); }
  };
})();
