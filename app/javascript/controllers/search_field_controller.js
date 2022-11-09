import { Controller } from "@hotwired/stimulus"
export default class extends Controller {
  connect() {
    console.log('search-field js stimulus successfully connected');

    const searchBtn = document.querySelector('.search-btn-a');
    const cancelBtn = document.querySelector('.cancel-btn');
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.querySelector('.search-input');

    searchBtn.addEventListener('click', (event) => {
      searchBox.classList.add('active');
      searchInput.classList.add('active');
      cancelBtn.classList.add('active');
    });

    cancelBtn.addEventListener('click', (event) => {
      searchBox.classList.remove('active');
      searchInput.classList.remove('active');
      cancelBtn.classList.remove('active');
    });
  };
};
