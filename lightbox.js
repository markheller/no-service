/**
 * Sets up image enlargement functionality
 * Creates a lightbox effect when clicking on images
 */

document.addEventListener('DOMContentLoaded', function() {
    setupImageEnlargement();
});

function setupImageEnlargement() {
    // Create the lightbox container if it doesn't exist
    if (!document.getElementById('lightbox-container')) {
        const lightbox = document.createElement('div');
        lightbox.id = 'lightbox-container';
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img id="lightbox-img" src="" alt="Enlarged image">
                <div class="lightbox-close">&times;</div>
            </div>
        `;
        document.body.appendChild(lightbox);
        
        // Set up close button functionality
        const closeButton = lightbox.querySelector('.lightbox-close');
        closeButton.addEventListener('click', closeLightbox);
        
        // Close lightbox when clicking outside the image
        lightbox.addEventListener('click', function(e) {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }
    
    // Add click event to all images in project sections
    const projectImages = document.querySelectorAll('.project .image img, .project-img img');
    projectImages.forEach(image => {
        image.style.cursor = 'pointer';
        image.addEventListener('click', function() {
            openLightbox(this.src, this.alt);
        });
    });
}

/**
 * Opens the lightbox with the specified image
 * @param {string} src - Source URL of the image
 * @param {string} alt - Alt text for the image
 */
function openLightbox(src, alt) {
    const lightbox = document.getElementById('lightbox-container');
    const lightboxImg = document.getElementById('lightbox-img');
    
    if (!lightbox || !lightboxImg) return;
    
    // Set image source and show lightbox
    lightboxImg.src = src;
    lightboxImg.alt = alt || 'Enlarged image';
    lightbox.classList.add('active');
    
    // Prevent scrolling on the body
    document.body.style.overflow = 'hidden';
    
    // Add keyboard event listener for escape key
    document.addEventListener('keydown', handleLightboxKeydown);
}

/**
 * Handles keyboard events for the lightbox
 * @param {KeyboardEvent} e - Keyboard event
 */
function handleLightboxKeydown(e) {
    if (e.key === 'Escape') {
        closeLightbox();
    }
}

/**
 * Closes the lightbox
 */
function closeLightbox() {
    const lightbox = document.getElementById('lightbox-container');
    
    if (!lightbox) return;
    
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    
    // Remove keyboard event listener
    document.removeEventListener('keydown', handleLightboxKeydown);
}