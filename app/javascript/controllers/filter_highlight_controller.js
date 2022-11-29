import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="filter-hightlight"
export default class extends Controller {
  connect() {
    console.log("Connected to Filter Highlight");

    const queryString = window.location.search;
    console.log(queryString);
  }
}
