import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    console.log("Connected to flatpickr");

    flatpickr("#myID", {
      enableTime: true,
      dateFormat: "Y-m-d H:i",
    });
  }
}
