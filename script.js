const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});

let currentSlideIndex = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slide');
    if (index >= slides.length) currentSlideIndex = 0; 
    if (index < 0) currentSlideIndex = slides.length - 1; 

    slides.forEach(slide => slide.style.display = 'none'); 
    slides[currentSlideIndex].style.display = 'block'; 
}

function changeSlide(step) {
    currentSlideIndex += step;
    showSlide(currentSlideIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlideIndex);
    setInterval(() => changeSlide(1), 3500);
});

function openModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("hidden");

    const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    const todayIndex = new Date().getDay();
    const todayClass = days[todayIndex];

    const previousHighlight = document.querySelector(".highlight");
    if (previousHighlight) {
        previousHighlight.classList.remove("highlight");
    }

    const todayRow = document.querySelector(`.${todayClass}`);
    if (todayRow) {
        todayRow.classList.add("highlight");
    }
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.add("hidden");
}

window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
});




