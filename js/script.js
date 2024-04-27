let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function moveSlide(direction) {
    slideIndex += direction;
    if (slideIndex === totalSlides) {
        slideIndex = 0;
    } else if (slideIndex < 0) {
        slideIndex = totalSlides - 1;
    }
    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slider').style.transform = `translateX(-${slideIndex * slideWidth}px)`;
}

function autoSlide() {
    moveSlide(1);
}

setInterval(autoSlide, 5000);



document.addEventListener("DOMContentLoaded", function() {
    slides[slideIndex].style.opacity = 1;
    slides[slideIndex].classList.add('active');
});
