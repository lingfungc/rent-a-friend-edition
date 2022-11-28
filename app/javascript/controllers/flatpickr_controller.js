import { Controller } from "@hotwired/stimulus"
import flatpickr from "flatpickr";

// Connects to data-controller="flatpickr"
export default class extends Controller {
  connect() {
    console.log("Connected to flatpickr");
    console.log("Testing");

    // flatpickr("#myID", {
    //   enableTime: true,
    //   dateFormat: "Y-m-d H:i",
    // });

    // const toggleDateInputs = function() {
      const startDateInput = document.getElementById('booking_start_date');
      console.log(startDateInput);
      const endDateInput = document.getElementById('booking_end_date');
      console.log(endDateInput);

      if (startDateInput && endDateInput) {
        const unavailableDates = JSON.parse(document.querySelector('.widget-content').dataset.unavailable)
        console.log(unavailableDates);

        flatpickr(startDateInput, {
          minDate: 'today',
          dateFormat: 'Y-m-d',
          disable: unavailableDates,
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
          dateFormat: 'Y-m-d',
          disable: unavailableDates
          }
        );
      };
    };
  // };
}

// export { toggleDateInputs }
