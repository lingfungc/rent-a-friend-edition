import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="friend-photos-popup"
export default class extends Controller {
  connect() {
    console.log("Connected to Friend Photos Popup Stimulus");
  }
}
