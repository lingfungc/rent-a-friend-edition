import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friends-photos-slideshow"
export default class extends Controller {
  connect() {
    console.log("Connected to friends photos slideshow stimulus");
  }
}
