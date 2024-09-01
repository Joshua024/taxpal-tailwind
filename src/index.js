
  document.addEventListener('DOMContentLoaded', function () {
    const menuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');
    const closeIcon = document.getElementById('close-icon');

    menuButton.addEventListener('click', function () {
      const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
      
      menuButton.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      hamburgerIcon.classList.toggle('scale-90');
      hamburgerIcon.classList.toggle('opacity-0');
      closeIcon.classList.toggle('scale-90');
      closeIcon.classList.toggle('opacity-0');
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const tabButtons = document.querySelectorAll('[role="tab"]');
    const tabPanels = document.querySelectorAll('[role="tabpanel"]');

    // Function to handle tab switching
    function handleTabClick(event) {
        const clickedTab = event.currentTarget;

        // Deactivate all tabs and panels
        tabButtons.forEach((tab) => {
            tab.setAttribute('aria-selected', 'false');
            tab.setAttribute('tabindex', '-1');
            // tab.classList.remove('sm:!text-red')
            tab.closest('div').classList.remove('bg-white/10', 'lg:ring-1', 'lg:ring-inset', 'lg:ring-white/10');
        });

        tabPanels.forEach((panel) => {
            panel.setAttribute('hidden', 'true');
            panel.style.display = 'none';
        });

        // Activate the clicked tab
        clickedTab.setAttribute('aria-selected', 'true');
        clickedTab.setAttribute('tabindex', '0');
        // clickedTab.classList.add('sm:!text-red')
        clickedTab.closest('div').classList.add('bg-white/10', 'lg:ring-1', 'lg:ring-inset', 'lg:ring-white/10');

        // Show the corresponding panel
        const selectedPanelId = clickedTab.getAttribute('aria-controls');
        const activePanel = document.getElementById(selectedPanelId);
        activePanel.removeAttribute('hidden');
        activePanel.style.display = 'block';
    }

    // Attach event listeners to all tab buttons
    tabButtons.forEach((button) => {
        button.addEventListener('click', handleTabClick);
    });

    // Initialize by setting the first tab and panel active
    tabButtons[0].closest('div').classList.add('bg-white/10');
    tabPanels[0].style.display = 'block';
    tabPanels[0].removeAttribute('hidden');
});
