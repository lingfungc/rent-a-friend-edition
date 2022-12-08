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
    // console.log(slideSize);
    // const slideWidth = slideSize.width;
    // console.log(slideWidth);
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to one aonther
    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    });




    // When click left, move slide to left
    // When click right, move slide to right
    // When click the nav indicators, move to that slide
  }
}
