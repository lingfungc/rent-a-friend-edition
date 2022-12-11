import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friend-img-swap"
export default class extends Controller {
  connect() {
    console.log("Connected to Friend Img Swap Stimulus");
  }

  swap() {
    console.log("Connected to Friend Img Swap Stimulus Swap Method");
  }
}
