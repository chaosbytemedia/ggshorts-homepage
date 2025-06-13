document.addEventListener('DOMContentLoaded', () => {
    const decorations = document.querySelectorAll('.pixel-decoration');
    
    document.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth;
        const mouseY = e.clientY / window.innerHeight;
        
        decorations.forEach(decoration => {
            const speed = decoration.classList.contains('hero-decoration-1') ? 0.05 :
                         decoration.classList.contains('hero-decoration-2') ? 0.08 :
                         decoration.classList.contains('hero-decoration-3') ? 0.06 :
                         decoration.classList.contains('hero-decoration-4') ? 0.07 :
                         decoration.classList.contains('how-it-works-decoration-1') ? 0.04 :
                         decoration.classList.contains('how-it-works-decoration-2') ? 0.06 :
                         decoration.classList.contains('how-it-works-decoration-3') ? 0.05 :
                         decoration.classList.contains('how-it-works-decoration-4') ? 0.07 :
                         decoration.classList.contains('pricing-decoration-1') ? 0.06 :
                         decoration.classList.contains('pricing-decoration-2') ? 0.08 :
                         decoration.classList.contains('pricing-decoration-3') ? 0.05 :
                         decoration.classList.contains('pricing-decoration-4') ? 0.07 :
                         decoration.classList.contains('faq-decoration-1') ? 0.06 :
                         decoration.classList.contains('faq-decoration-2') ? 0.08 :
                         decoration.classList.contains('faq-decoration-3') ? 0.05 :
                         decoration.classList.contains('faq-decoration-4') ? 0.07 : 0.05;
            
            const moveX = (mouseX - 0.5) * speed * 100;
            const moveY = (mouseY - 0.5) * speed * 100;
            
            decoration.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
    });
    
    // Reset position when mouse leaves window
    document.addEventListener('mouseleave', () => {
        decorations.forEach(decoration => {
            decoration.style.transform = 'translate(0, 0)';
        });
    });
}); 