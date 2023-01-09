import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friend-photos-popup"
export default class extends Controller {
  connect() {
    console.log("Connected to Friend Photos Popup Stimulus");

    const zoomImg = document.querySelector('.friend-img-left');
    const popUp = document.querySelector('.friend-photos-window');
    console.log(popUp);

    zoomImg.addEventListener('click', e => {
      let height = window.innerHeight;
      // console.log(height);
      popUp.style.height = height + 'px';
    })
  }
}
