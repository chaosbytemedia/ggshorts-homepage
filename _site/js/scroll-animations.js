document.addEventListener('DOMContentLoaded', () => {
    // Add initial classes to elements
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('reveal-section');
    });

    // Create the observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Once revealed, we can stop observing
                observer.unobserve(entry.target);
            }
        });
    }, {
        // Start animation when element is 20% visible
        threshold: 0.2,
        // Start animation slightly before element comes into view
        rootMargin: '0px 0px -10% 0px'
    });

    // Observe all sections
    sections.forEach(section => {
        observer.observe(section);
    });
}); 