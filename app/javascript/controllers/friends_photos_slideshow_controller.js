import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friends-photos-slideshow"
export default class extends Controller {
  connect() {
    console.log("Connected to Friends Photos Slideshow Stimulus");

    const btns = document.querySelectorAll("data-photo-button]");
    console.log(btns);


  }
}
