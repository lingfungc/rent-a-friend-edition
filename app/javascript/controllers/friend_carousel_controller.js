import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friend-carousel"
export default class extends Controller {
  connect() {
    console.log("Connected to Friend Carousel Stimulus");


  }
}
