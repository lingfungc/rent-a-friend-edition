import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="video-control"
export default class extends Controller {
  static targets = ["video"];

  connect() {
    console.log('Connected to Video Control Stimulus');
    console.log(this.videoTargets);
  };

  play() {
    console.log('Mouseout on this slide');
    this.videoTargets.forEach((target) => {
      target.play();
    });
  }

  pause() {
    console.log('Mouseover on this slide');
    this.videoTargets.forEach((target) => {
      target.pause();
    });
  }
}
