import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friends-photos-slideshow"
export default class extends Controller {
  static targets = ["btn"];

  connect() {
    console.log("Connected to Friends Photos Slideshow Stimulus");

    const btns = document.querySelectorAll("[data-photo-button]");
    // console.log(btns);

    btns.forEach(btn => {

      btn.addEventListener("click", () => {
        console.log("hello, slideshow");

        const offset = btn.dataset.photoButton === 'next' ? 1 : -1;

        const slides = btn.closest("[data-photo-slideshow]").querySelector("[data-photo-slides]");
        // console.log(slides);
        const activeSlide = slides.querySelector("[data-active]");
        // console.log(activeSlide);

        console.log(slides.children.length);

        if (slides.children.length > 1) {
          let newIndex = [...slides.children].indexOf(activeSlide) + offset;
          // console.log(newIndex);
          if (newIndex < 0) newIndex = slides.children.length - 1;
          if (newIndex >= slides.children.length) newIndex = 0;

          slides.children[newIndex].dataset.active = true;
          delete activeSlide.dataset.active;
        }

        // if (offset === 1) {
        //   slides.children[newIndex].classList.add("position-left");
        //   activeSlide.classList.add("slide-right");
        //   slides.children[newIndex].classList.add("slide-right");
        //   slides.children[newIndex].dataset.active = true;
        //   delete activeSlide.dataset.active;
        //   setTimeout(() => {
        //     slides.children[newIndex].classList.remove("position-left");
        //     activeSlide.classList.remove("slide-right");
        //     slides.children[newIndex].classList.remove("slide-right");
        //   }, 800);
        // }
        // if (offset === -1) {
        //   slides.children[newIndex].classList.add("position-right");
        //   activeSlide.classList.add("slide-left");
        //   slides.children[newIndex].classList.add("slide-left");
        //   slides.children[newIndex].dataset.active = true;
        //   delete activeSlide.dataset.active;
        // }
      })
    })
  }

  showBtn() {
    console.log('Mouseout on this photo');
    this.btnTarget.classList.toggle('btn-opacity');
  };

  hideBtn() {
    console.log('Mouseover on this photo');
    this.btnTarget.classList.toggle('btn-opacity');
  };
}
