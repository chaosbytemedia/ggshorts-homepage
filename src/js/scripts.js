document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.site-header');
    const scrollThreshold = 50; // pixels
    const videoControls = document.querySelector('.video-controls');
    const video = document.querySelector('.video-background video');
    let isPaused = false;

    function handleScroll() {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Initial check
    handleScroll();

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    if (videoControls && video) {
        // Set initial state
        videoControls.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
            </svg>
        `;

        videoControls.addEventListener('click', async () => {
            try {
                if (isPaused) {
                    await video.play();
                    videoControls.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/>
                        </svg>
                    `;
                } else {
                    video.pause();
                    videoControls.innerHTML = `
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path fill="currentColor" d="M8 5v14l11-7z"/>
                        </svg>
                    `;
                }
                isPaused = !isPaused;
            } catch (error) {
                console.error('Error toggling video:', error);
            }
        });

        // Handle video end
        video.addEventListener('ended', () => {
            video.play();
        });
    }
});
