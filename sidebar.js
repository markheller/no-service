
document.addEventListener('DOMContentLoaded', function() {
    // Create sidebar content
    generateSidebar();
    
    // Set up mobile sidebar functionality
    setupMobileSidebar();
});

/**
 * Generates the sidebar content and injects it into the DOM
 */
function generateSidebar() {
    // Find the sidebar container
    const sidebarContainer = document.getElementById('sidebar-container');
    
    if (!sidebarContainer) {
        console.error('Sidebar container not found!');
        return;
    }
    
    // Create sidebar HTML content
    const sidebarContent = `
        <h1><a href="index.html">No Service</a></h1>
        <h3>A collection of urban and landscape computational design work</h3>
        <br />
        <nav>
            <ul>
                <li><a href="project_auto-simulacrum.html">Auto-Simulacrum</a></li>
                <li><a href="project_siting-invisible-values.html">Siting Invisible Values</a></li>
                <li><a href="project_across-the-mainland.html">Across the Mainland</a></li>
                <li><a href="project_ibex.html">Ibex</a></li>
                <li><a href="project_metabolic-cities.html">Metabolic Cities</a></li>
                <li><a href="project_no-service.html">No Service</a></li>
                <li><a href="project_alphanumeric-sublime.html">Alphanumeric Sublime</a></li>
                <li><a href="project_light-test.html">Light Test</a></li>
            </ul>
        </nav>

        <div class="about">
            <hr />
            <h3><a href="about.html">About</a></h3>
        </div>
    `;
    
    // Set the content
    sidebarContainer.innerHTML = sidebarContent;
}

/**
 * Sets up mobile sidebar toggle functionality
 */
function setupMobileSidebar() {
    // Create mobile header if it doesn't exist
    createMobileHeaderIfNeeded();
    
    // Setup event listeners for toggling the sidebar
    const menuButton = document.querySelector('.menu-button');
    if (menuButton) {
        menuButton.addEventListener('click', toggleSidebar);
    }
    
    // Setup overlay click to close sidebar
    const overlay = document.querySelector('.menu-overlay');
    if (overlay) {
        overlay.addEventListener('click', closeSidebar);
    }
}

/**
 * Creates the mobile header if it doesn't exist
 */
function createMobileHeaderIfNeeded() {
    // Check if the header already exists
    if (!document.querySelector('.header')) {
        const container = document.querySelector('.container');
        
        // Create the overlay for mobile
        const overlay = document.createElement('div');
        overlay.className = 'menu-overlay';
        document.body.appendChild(overlay);
        
        // Create the header
        const header = document.createElement('aside');
        header.className = 'header';
        header.innerHTML = `
            <div class="header-content">
                <h1><a href="index.html">No Service</a></h1>
            </div>
            <button class="menu-button">
                <svg viewBox="0 0 24 24" class="menu-icon">
                    <circle cx="12" cy="12" r="8" stroke="white" stroke-width="1" fill="none"/>
                </svg>
            </button>
        `;
        
        // Insert the header at the beginning of the container
        if (container) {
            container.insertBefore(header, container.firstChild);
        } else {
            document.body.insertBefore(header, document.body.firstChild);
        }
    }
}

/**
 * Toggles the sidebar visibility for mobile view
 */
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.menu-overlay');
    
    if (!sidebar || !overlay) return;
    
    const isVisible = sidebar.classList.contains('mobile-visible');
    
    if (isVisible) {
        closeSidebar();
    } else {
        sidebar.classList.add('mobile-visible');
        overlay.classList.add('active');
    }
}

/**
 * Closes the mobile sidebar
 */
function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.querySelector('.menu-overlay');
    
    if (!sidebar || !overlay) return;
    
    sidebar.classList.remove('mobile-visible');
    overlay.classList.remove('active');
}