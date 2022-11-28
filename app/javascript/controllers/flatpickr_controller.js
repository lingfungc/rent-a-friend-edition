import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    console.log("Connected to flatpickr");

    const startDateInput = document.getElementById('booking_start_date');
    const endDateInput = document.getElementById('booking_end_date');

    if (startDateInput && endDateInput) {
      // convert the data from string in html to json which is object (hash)
      const unavailableDates = JSON.parse(document.querySelector('.widget-content').dataset.unavailable)

      flatpickr(startDateInput, {
        minDate: 'today',
        // altInput: true,
        // altFormat: "d/m/Y, D",
        dateFormat: 'Y-m-d',
        disable: unavailableDates,
        // only execute this function when there's a change in startDateInput field
        onChange: function(selectedDates, selectedDate) {
          if (selectedDate === '') {
            endDateInput.disabled = true;
          }
          let minDate = selectedDates[0];
          minDate.setDate(minDate.getDate() + 1);
          endDateCalendar.set('minDate', minDate);
          endDateInput.disabled = false;
        }
      });

      const endDateCalendar =
        flatpickr(endDateInput, {
          // not sure why altInput is not working with disabled function in the booking form
          // altInput: true,
          // altFormat: "d/m/Y, D",
          dateFormat: 'Y-m-d',
          disable: unavailableDates,
        }
      );
    }

    // need to use react.js to fix start date not highlighted after clicking next/prev month

    startDateInput.addEventListener('change', (e) => {
      let calendars = document.querySelectorAll(".flatpickr-calendar");
      console.log(calendars);

      let endDateCalendar = calendars[calendars.length - 1];
      console.log(endDateCalendar);

      let startDate = endDateCalendar.querySelectorAll('.flatpickr-disabled');
      console.log(startDate);

      let selectedStartDate = startDate[startDate.length - 1];
      selectedStartDate.classList.add('startDate');
    })

    const prevMonth = document.querySelectorAll(".flatpickr-prev-month");
    console.log(prevMonth);

    prevMonth[prevMonth.length - 1].addEventListener('click', (event) => {

      let calendars = document.querySelectorAll(".flatpickr-calendar");
      console.log(calendars);

      let endDateCalendar = calendars[calendars.length - 1];
      console.log(endDateCalendar);

      let startDate = endDateCalendar.querySelectorAll('.flatpickr-disabled');
      console.log(startDate);

      let selectedStartDate = startDate[startDate.length - 1];
      selectedStartDate.classList.add('startDate');
    })
  }
}
