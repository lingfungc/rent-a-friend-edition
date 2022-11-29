import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="filter-hightlight"
export default class extends Controller {
  connect() {
    console.log("Connected to Filter Highlight");

    const queryString = window.location.search.split('=');
    const query = queryString[1];
    // console.log(query);

    const filters = document.querySelectorAll("#categories")

    filters.forEach((filter) => {
      // console.log(filter);
      // console.log(filter.value);

      if (query === filter.value) {
        // console.log(`Hi, this is ${filter.value}`);

        const queryFilter = filter.closest('.filter-opt').firstElementChild.lastElementChild.firstElementChild;
        console.log(queryFilter);
        queryFilter.classList.add('hover-active');
      }
    })
  }
}
