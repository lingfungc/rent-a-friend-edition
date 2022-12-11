import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friend-img-swap"
export default class extends Controller {
  static targets = ["main", "sub"]

  connect() {
    console.log("Connected to Friend Img Swap Stimulus");
  }

  swap() {
    console.log("Connected to Friend Img Swap Stimulus Swap Method");
    console.log(this.mainTarget);
    console.log(this.subTarget);
    // this.subTarget.classList.add("d-none");
  }
}
