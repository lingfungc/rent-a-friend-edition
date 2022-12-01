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
        console.log(activeSlide);
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        console.log(newIndex);

      })
    })

  }
}
