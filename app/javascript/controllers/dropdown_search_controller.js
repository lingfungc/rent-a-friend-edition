import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown-search"
export default class extends Controller {
  static targets = ["bar", "cancelBtn"];

  connect() {
    console.log('Connected to Dropdown Search Stimulus');
  };

  enable() {
    console.log("Triggered Enable Function");
    this.barTarget.classList.toggle("active");
  };

  disable() {
    console.log("Triggered Disable Function");
    this.barTarget.classList.toggle("active");
  };
}
