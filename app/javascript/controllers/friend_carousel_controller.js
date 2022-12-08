import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friend-carousel"
export default class extends Controller {
  connect() {
    console.log("Connected to Friend Carousel Stimulus");

    // The ul div that contains all photos slide
    const track = document.querySelector('.carousel_track');
    // console.log(track);

    const slides = Array.from(track.children);
    // console.log(slides);

    const nextBtn = document.querySelector('.carousel_btn_right');
    const prevBtn = document.querySelector('.carousel_btn_left');
    const dotsNav = document.querySelector('.carousel_nav');
    // console.log(dotsNav);
    const dots = Array.from(dotsNav.children);
    // console.log(dots);

    // const slideSize = slides[0].getBoundingClientRect();
    // const slideWidth = slideSize.width;
    const slideWidth = slides[0].getBoundingClientRect().width;

    // Arrange the slides next to one aonther
    const setSlidePosition = (slide, index) => {
      slide.style.left = slideWidth * index + 'px';
    };
    slides.forEach(setSlidePosition);


    // Don't repeat yourself, so create a function
    const moveToSlide = (track, currentSlide, targetSlide) => {
      track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
      currentSlide.classList.remove('current-slide');
      targetSlide.classList.add('current-slide');
    }

    const updateDots = (currentDot, targetDot) => {
      currentDot.classList.remove('current-slide');
      targetDot.classList.add('current-slide');
    }

    // When click left, move slide to left
    prevBtn.addEventListener('click', e => {
      const currentSlide = track.querySelector('.current-slide');
      const prevSlide = currentSlide.previousElementSibling;

      const currentDot = dotsNav.querySelector('.current-slide');
      const prevDot = currentDot.previousElementSibling;

      moveToSlide(track, currentSlide, prevSlide);
      updateDots(currentDot, prevDot);
    })

    // When click right, move slide to right
    nextBtn.addEventListener('click', e => {
      const currentSlide = track.querySelector('.current-slide');
      const nextSlide = currentSlide.nextElementSibling;
      // const amountToMove = nextSlide.style.left;

      const currentDot = dotsNav.querySelector('.current-slide');
      const nextDot = currentDot.nextElementSibling;

      moveToSlide(track, currentSlide, nextSlide);
      updateDots(currentDot, nextDot);
    });

    // When click the nav indicators, move to that slide
    dotsNav.addEventListener('click', e => {
      // What indicator was clicked on?
      const targetDot = e.target.closest('button');
      // console.log(targetDot);

      // Stop the addEventListener function if any of the dots is not clicked
      if (!targetDot) return;

      const currentSlide = track.querySelector('.current-slide');
      const currentDot = dotsNav.querySelector('.current-slide');
      const targetIndex = dots.findIndex(dot => dot === targetDot);
      // console.log(targetIndex);
      const targetSlide = slides[targetIndex];
      // console.log(targetSlide);

      moveToSlide(track, currentSlide, targetSlide);
      updateDots(currentDot, targetDot);

      if (targetIndex === 0) {
        prevBtn.classList.add('is-hidden');
        nextBtn.classList.remove('is-hidden');
      } else if (targetIndex === slides.length - 1) {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.add('is-hidden');
      } else {
        prevBtn.classList.remove('is-hidden');
        nextBtn.classList.remove('is-hidden');
      }
    })
  }
}
