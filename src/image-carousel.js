
function createImageCarousel() {
    let slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0; //

    function trackCurrentSlide() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlideIndex ? "block" : "none";
        });
    }

    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        trackCurrentSlide();
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        trackCurrentSlide();
    }

    // function jumpToSlide() {
        // click dot
    // }

    // then set up event listeners.
    //left scroll button and on click, call scroll left.
    // same for scroll right.

    




}

export default createImageCarousel;