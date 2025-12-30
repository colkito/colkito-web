/**
 * Mobile Navigation - Hamburger menu
 * Vanilla JS with slide-in animation
 */
(function() {
  'use strict';

  var isOpen = false;

  function openNav() {
    isOpen = true;
    document.body.style.overflow = 'hidden';

    var overlay = document.getElementById('mobile-nav-overlay');
    var panel = document.getElementById('mobile-nav-panel');

    if (overlay) overlay.classList.add('open');
    if (panel) panel.classList.add('open');
  }

  function closeNav() {
    isOpen = false;
    document.body.style.overflow = 'auto';

    var overlay = document.getElementById('mobile-nav-overlay');
    var panel = document.getElementById('mobile-nav-panel');

    if (overlay) overlay.classList.remove('open');
    if (panel) panel.classList.remove('open');
  }

  function toggleNav() {
    if (isOpen) {
      closeNav();
    } else {
      openNav();
    }
  }

  // Initialize on DOM ready
  document.addEventListener('DOMContentLoaded', function() {
    // Bind hamburger button
    var toggleBtn = document.getElementById('mobile-nav-toggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleNav);
    }

    // Bind close button
    var closeBtn = document.getElementById('mobile-nav-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeNav);
    }

    // Bind overlay click to close
    var overlay = document.getElementById('mobile-nav-overlay');
    if (overlay) {
      overlay.addEventListener('click', closeNav);
    }

    // Bind nav links to close menu on click
    document.querySelectorAll('.mobile-nav-link').forEach(function(link) {
      link.addEventListener('click', closeNav);
    });

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && isOpen) {
        closeNav();
      }
    });
  });

  // Expose API
  window.mobileNav = {
    open: openNav,
    close: closeNav,
    toggle: toggleNav,
    isOpen: function() { return isOpen; }
  };
})();
