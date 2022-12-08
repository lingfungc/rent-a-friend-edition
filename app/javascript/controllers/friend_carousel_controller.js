import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friend-carousel"
export default class extends Controller {
  connect() {
    console.log("Connected to Friend Carousel Stimulus");

    const track = document.querySelector('.carousel_track');
    console.log(track);

    const slides = Array.from(track.children);
    console.log(slides);

    const nextBtn = document.querySelector('.carousel_btn_right');
    const prevBtn = document.querySelector('.carousel_btn_left');
    const dotsNav = document.querySelector('.carousel_nav');
    const dots = Array.from(dotsNav.children);

    // const slideSize = slides[0].getBoundingClientRect();
    // const slideWidth = slideSize.width;
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to one aonther
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);

    // When click left, move slide to left

    // When click right, move slide to right
    nextBtn.addEventListener('click', e => {
      const currentSlide = track.querySelector('.current-slide');
      const nextSlide = currentSlide.nextElementSibling;
      const amountToMove = nextSlide.style.left;

      track.style.transform = 'translateX(' + amountToMove + ')';
    });

    // When click the nav indicators, move to that slide

  }
}
