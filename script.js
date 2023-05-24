var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

//Dark Mode
let darkmode = document.querySelector('#darkmode');
darkmode.onclick = () => {
    console.log('clicked');
    if (darkmode.classList.contains('bx-moon')) {
        darkmode.classList.replace('bx-moon', 'bx-sun');
        document.body.classList.add('active');
    } else {
        darkmode.classList.replace('bx-sun', 'bx-moon');
        document.body.classList.remove('active');
    }
}

//Dropdown of navbar
let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar ul');


window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});

menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
}

//projects slider carousel
const projectsCarousel = document.querySelector('.projects-carousel');
const projectTitles = document.querySelectorAll('.project__title button');
let slideWidth = projectsCarousel.clientWidth;
let slideIndex = 0;
let startX = 0;
let currentX = 0;

function showSlide(index) {
    projectsCarousel.style.transform = `translateX(-${(index * slideWidth)}px)`;
    projectTitles.forEach((item) => item.classList.remove('active'));
    projectTitles[index].classList.add('active');
}

function handleTouchStart(event) {
    startX = event.touches[0].clientX;
}

function handleTouchMove(event) {
    currentX = event.touches[0].clientX;
}

function handleTouchEnd() {
    if (startX - currentX > 50 && slideIndex < projectTitles.length - 1) {
        slideIndex++;
    } else if (currentX - startX > 50 && slideIndex > 0) {
        slideIndex--;
    }
    showSlide(slideIndex);
}

projectTitles.forEach((projectTitle, index) => {
    projectTitle.addEventListener('click', () => {
        slideIndex = index;
        showSlide(slideIndex);
    });
});

projectsCarousel.addEventListener('touchstart', handleTouchStart);
projectsCarousel.addEventListener('touchmove', handleTouchMove);
projectsCarousel.addEventListener('touchend', handleTouchEnd);

window.addEventListener('resize', () => {
    slideWidth = projectsCarousel.clientWidth;
    showSlide(slideIndex);
});

//project images carousel
const imageSliders = document.querySelectorAll('.img-wrapper');
imageSliders.forEach((imageSlider) => {
    let currentSlide = 0;
    const slides = imageSlider.querySelectorAll('img');
    const slideCount = slides.length;

    setInterval(() => {
        slides[currentSlide].style.opacity = 0;
        currentSlide = (currentSlide + 1) % slideCount;
        slides[currentSlide].style.opacity = 1;
    }, 2000);
});