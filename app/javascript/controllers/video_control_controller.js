import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="video-control"
export default class extends Controller {
  static targets = ["video"];

  connect() {
    console.log('Connected to Video Control Stimulus');
    console.log(this.videoTarget);

  }
}
