import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="dropdown-search"
export default class extends Controller {
  static targets = ["bar"];

  connect() {
    console.log("connected to dropdown search js stimulus");
  };

  enable() {
    console.log("connected to enable function");
    this.barTarget.classList.toggle("active");
  };
}
