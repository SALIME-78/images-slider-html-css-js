let slideIndex = 0;
let slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slideIndex = (index + slides.length) % slides.length;
    const offset = -slideIndex * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function moveSlide(sgn) {
    showSlide(slideIndex + sgn);
}

showSlide(slideIndex);