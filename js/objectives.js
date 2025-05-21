document.addEventListener('DOMContentLoaded', function() {
    // Animate timeline items on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    // Observe each objective container
    document.querySelectorAll('.objective-container').forEach(container => {
        observer.observe(container);
    });

    // Add hover effect for touch devices
    const handleFirstTouch = (e) => {
        const container = e.currentTarget;
        container.classList.add('hover-effect');
        
        // Remove the hover effect after animation completes
        setTimeout(() => {
            container.classList.remove('hover-effect');
        }, 1500);
        
        // Remove this event listener after first touch
        container.removeEventListener('touchstart', handleFirstTouch);
    };

    // Add touch event listeners for mobile
    if ('ontouchstart' in window) {
        document.querySelectorAll('.objective-content').forEach(item => {
            item.addEventListener('touchstart', handleFirstTouch, false);
        });
    }
});
