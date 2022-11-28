import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    console.log("Connected to flatpickr");

    // flatpickr("#myID", {
    //   enableTime: true,
    //   dateFormat: "Y-m-d H:i",
    // });

    // const toggleDateInputs = function() {
    const startDateInput = document.getElementById('booking_start_date');
    const endDateInput = document.getElementById('booking_end_date');

    if (startDateInput && endDateInput) {
      // convert the data from string in html to json which is object (hash)
      const unavailableDates = JSON.parse(document.querySelector('.widget-content').dataset.unavailable)
      // console.log(unavailableDates);

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
          console.log(endDateInput.disabled);
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
    };
  };
  // };
}
