document.addEventListener("DOMContentLoaded", function () {
  // CHANGE YOUR DATE AT HERE. MAKE SURE TO FILL IN THE RIGHT FORMAT DATE
  const BEGIN_DATE = "2025-02-05";

  /* DO NOT CHANGE ANY CODE BELOW THIS OTHERWISE THE CODE WILL NOT WORK */
  const beginDate = new Date(BEGIN_DATE);
  const daysElement = document.querySelector("#days");
  const hoursElement = document.querySelector("#hours");
  const minutesElement = document.querySelector("#minutes");
  const secondsElement = document.querySelector("#seconds");
  const since = document.querySelector("#since");

  since.textContent = `since ${BEGIN_DATE}`;

  function updateCounter() {
    const currentDate = new Date();
    const timeDifference = currentDate - beginDate;

    if (currentDate < beginDate) {
      daysElement.textContent = "0";
      hoursElement.textContent = "0";
      minutesElement.textContent = "0";
      secondsElement.textContent = "0";
      return;
    }

    if (!isNaN(timeDifference)) {
      const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hoursDifference = Math.floor(
        (timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutesDifference = Math.floor(
        (timeDifference % (1000 * 60 * 60)) / (1000 * 60)
      );
      const secondsDifference = Math.floor(
        (timeDifference % (1000 * 60)) / 1000
      );

      daysElement.textContent = daysDifference;
      hoursElement.textContent = hoursDifference;
      minutesElement.textContent = minutesDifference;
      secondsElement.textContent = secondsDifference;
    } else {
      daysElement.textContent = "0";
      hoursElement.textContent = "0";
      minutesElement.textContent = "0";
      secondsElement.textContent = "0";
    }
  }

  setInterval(updateCounter, 1000);
  updateCounter();
});
