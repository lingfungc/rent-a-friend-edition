import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friend-img-swap"
export default class extends Controller {
  static targets = ["main", "sub"]

  connect() {
    console.log("Connected to Friend Img Swap Stimulus");

    // const currentImg = document.querySelector('.current-img');
    // console.log(currentImg);

    const track = document.querySelector('.friend-img-right');
    console.log(track);

    const images = [...track.children];
    console.log(images);

    images.forEach((image) => {
      image.addEventListener('click', e => {

        console.log(e.target);
        console.log(e.target.closest('.photo'));
        console.log(e.target.parentElement);

        let currentImg = document.querySelector('.current-img');
        e.target.parentElement.insertAdjacentElement('afterbegin', currentImg);
        currentImg.classList.remove('current-img');

        const mainImage = document.querySelector('.friend-img-left');
        mainImage.insertAdjacentElement('afterbegin', e.target);
        e.target.classList.add('current-img');
      })
    });
  }

  // swap() {
  //   console.log("Connected to Friend Img Swap Stimulus Swap Method");
  // }
}
