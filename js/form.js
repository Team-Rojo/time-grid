import { renderActivity } from "./calendar.js";
import { validateActivity } from "./validation.js";
import { saveActivities } from "./storage.js";

const activityForm = document.querySelector("#activity-form");

const startTimeSelect = document.querySelector("#activity-start-time");
const endTimeSelect = document.querySelector("#activity-end-time");

const daysDropdownText = document.querySelector("#days-dropdown-text");
const daysDropdownButton = document.querySelector("#days-dropdown-button");
const daysDropdownMenu = document.querySelector("#days-dropdown-menu");
const dayCheckboxes = document.querySelectorAll('input[name="days"]');

function toggleDaysDropdown() {
  const isOpen = daysDropdownMenu.classList.toggle("is-open");

  daysDropdownButton.setAttribute("aria-expanded", String(isOpen));
}

function updateDaysDropdownText() {
  const selectedDays = [...dayCheckboxes]
    .filter((checkbox) => checkbox.checked)
    .map((checkbox) => checkbox.nextElementSibling.textContent);

  if (selectedDays.length === 0) {
    daysDropdownText.textContent = "Escoge el día";
    return;
  }

  daysDropdownText.textContent = selectedDays.join(", ");
}

function createTimeOptions(selectElement, includeMidnightEnd = false) {
  const finalMinutes = includeMidnightEnd ? 1440 : 1410;

  for (let minutes = 0; minutes <= finalMinutes; minutes += 30) {
    const hours = Math.floor(minutes / 60);
    const remainingMinutes = minutes % 60;

    const formattedTime =
      `${String(hours).padStart(2, "0")}:` +
      `${String(remainingMinutes).padStart(2, "0")}`;

    const option = document.createElement("option");

    option.value = formattedTime;
    option.textContent = formattedTime;

    selectElement.append(option);
  }
}

export function initializeForm(activities) {
  createTimeOptions(startTimeSelect);
  createTimeOptions(endTimeSelect, true);

  activityForm.addEventListener("submit", (event) => {
    handleActivityFormSubmit(event, activities);
  });

  daysDropdownButton.addEventListener("click", toggleDaysDropdown);

  dayCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", updateDaysDropdownText);
  });
}

function handleActivityFormSubmit(event, activities) {
  event.preventDefault();

  const formData = new FormData(activityForm);
  const selectedDays = formData.getAll("days");

  if (selectedDays.length === 0) {
    alert("Selecciona al menos un día.");
    return;
  }

  const newActivities = selectedDays.map((day, index) => ({
    id: Date.now() + index,
    title: formData.get("title").trim(),
    day,
    startTime: formData.get("startTime"),
    endTime: formData.get("endTime"),
  }));

  for (const activity of newActivities) {
    const validationError = validateActivity(activity, activities);

    if (validationError) {
      alert(validationError);
      return;
    }
  }

  newActivities.forEach((activity) => {
    activities.push(activity);
    saveActivities(activities);
    renderActivity(activity);
  });

  activityForm.reset();
  updateDaysDropdownText();
  daysDropdownMenu.classList.remove("is-open");
  daysDropdownButton.setAttribute("aria-expanded", "false");
}

document.addEventListener("click", (event) => {
  const clickedInsideDropdown = event.target.closest(".days-dropdown");

  if (!clickedInsideDropdown) {
    daysDropdownMenu.classList.remove("is-open");

    daysDropdownButton.setAttribute("aria-expanded", "false");
  }
});
