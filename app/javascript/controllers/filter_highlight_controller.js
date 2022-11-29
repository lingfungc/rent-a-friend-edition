import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="filter-hightlight"
export default class extends Controller {
  connect() {
    console.log("Connected to Filter Highlight");

    const queryString = window.location.search.split('=');
    const sort = queryString[0];
    const query = queryString[1];

    // in case that query is undefined
    if (query == null) {
      let sortKey = document.querySelector(".fa-globe");
      let sortFilter = sortKey.closest('.filter-btn');
      console.log(sortFilter);
      sortFilter.classList.add('hover-active');
    }

    let sortKey = document.querySelector("#trending");
    if (sort === '?trending') {
      let sortFilter = sortKey.closest('.filter-opt').firstElementChild.lastElementChild.firstElementChild;
      console.log(sortFilter);
      sortFilter.classList.add('hover-active');
    }

    sortKey = document.querySelector("#new");
    if (sort === '?new') {
      let sortFilter = sortKey.closest('.filter-opt').firstElementChild.lastElementChild.firstElementChild;
      console.log(sortFilter);
      sortFilter.classList.add('hover-active');
    }

    const filters = document.querySelectorAll("#categories");

    filters.forEach((filter) => {
      if (query === filter.value) {
        const queryFilter = filter.closest('.filter-opt').firstElementChild.lastElementChild.firstElementChild;
        console.log(queryFilter);
        queryFilter.classList.add('hover-active');
      }
    })
  }
}
