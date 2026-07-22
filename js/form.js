import { renderActivity } from "./calendar.js";
import { validateActivity } from "./validation.js";
import { saveActivities } from "./storage.js";

const activityForm = document.querySelector("#activity-form");

export function initializeForm(activities) {
  activityForm.addEventListener("submit", (event) => {
    handleActivityFormSubmit(event, activities);
  });
}

function handleActivityFormSubmit(event, activities) {
  event.preventDefault();

  const formData = new FormData(activityForm);

  const newActivity = {
    id: Date.now(),
    title: formData.get("title").trim(),
    day: formData.get("day"),
    startTime: formData.get("startTime"),
    endTime: formData.get("endTime"),
  };

  const validationError = validateActivity(newActivity, activities);

  if (validationError) {
    alert(validationError);
    return;
  }

  activities.push(newActivity);
  saveActivities(activities);
  renderActivity(newActivity);

  activityForm.reset();
}
