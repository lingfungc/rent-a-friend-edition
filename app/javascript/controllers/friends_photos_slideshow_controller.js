import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friends-photos-slideshow"
export default class extends Controller {
  connect() {
    console.log("Connected to Friends Photos Slideshow Stimulus");

    const btns = document.querySelectorAll("[data-photo-button]");
    console.log(btns);

    btns.forEach(btn => {
      btn.addEventListener("click", () => {
        console.log("hello, slideshow");

        const offset = btn.dataset.photoButton === 'next' ? 1 : -1;

        const slides = btn.closest("[data-photo-slideshow]").querySelector("[data-photo-slides]");
        // console.log(slides);
        const activeSlide = slides.querySelector("[data-active]");
        // console.log(activeSlide);
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        // console.log(newIndex);
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        // slides.children[newIndex].dataset.active = true;
        // delete activeSlide.dataset.active;

        if (offset === 1) {
          slides.children[newIndex].classList.add("position-left");
          activeSlide.classList.add("slide-right");
          slides.children[newIndex].classList.add("slide-right");
        }
      })
    })

  }
}
