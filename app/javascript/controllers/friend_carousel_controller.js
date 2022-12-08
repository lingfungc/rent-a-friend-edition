import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friend-carousel"
export default class extends Controller {
  connect() {
    console.log("Connected to Friend Carousel Stimulus");

    const track = document.querySelector('.carousel_track');
    console.log(track);

    const slides = Array.from(track.children);
    console.log(slides);


    // When click left, move slide to left
    // When click right, move slide to right
    // When click the nav indicators, move to that slide
  }
}
