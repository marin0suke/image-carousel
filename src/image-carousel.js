
function createImageCarousel() {
    let slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0; //

    const dotContainer = document.querySelector(".dot-container");
    slides.forEach((slide, index) => {
        const navDot = document.createElement("div");
        navDot.classList.add("nav-dot");
        navDot.addEventListener("click", () => jumpToSlide(index));
        dotContainer.appendChild(navDot);
    });

    function updateActiveDot() {
        const dots = dotContainer.querySelectorAll(".nav-dot");
        dots.forEach((dot, index) => {
            dot.classList.toggle("active", index === currentSlideIndex);
        })
    }

    function trackCurrentSlide() {
        slides.forEach((slide, index) => {
            slide.style.display = index === currentSlideIndex ? "block" : "none";
        });
        updateActiveDot();
    }

    function prevSlide() {
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        trackCurrentSlide();
    }

    function nextSlide() {
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        trackCurrentSlide();
    }

    function jumpToSlide(index) { // we get the index from the forEach when we render DOM dots.
        currentSlideIndex = index;
        trackCurrentSlide();
    }


    // then set up event listeners.
    document.querySelector(".prev-arrow").addEventListener("click", prevSlide);
    document.querySelector(".next-arrow").addEventListener("click", nextSlide); 

    setInterval(nextSlide, 5000);

    trackCurrentSlide(); // initilise carousel.

}

export default createImageCarousel;