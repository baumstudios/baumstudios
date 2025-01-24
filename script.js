// JavaScript is no longer needed for the video background
// This file is kept for future functionality if needed

const scrollContainer = document.querySelector('.video-scroll-container');

// Enable horizontal scrolling with mouse wheel
scrollContainer.addEventListener('wheel', (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
});

// Enable smooth scrolling between videos
scrollContainer.addEventListener('scroll', () => {
    const videoWrappers = document.querySelectorAll('.video-wrapper');
    videoWrappers.forEach(wrapper => {
        const rect = wrapper.getBoundingClientRect();
        if (rect.left >= 0 && rect.left <= window.innerWidth) {
            wrapper.style.opacity = 1;
        } else {
            wrapper.style.opacity = 0;
        }
    });
});