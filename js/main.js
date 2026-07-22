import { renderActivity } from "./calendar.js";
import { initializeForm } from "./form.js";
import { loadActivities } from "./storage.js";
import { demoActivities } from "./demoActivities.js";

const activities = loadActivities() ?? [];

const exampleActivityCards = document.querySelectorAll(
  ".activity-card-example",
);

const loadDemoButton = document.querySelector("#load-demo-button");

exampleActivityCards.forEach((activityCard) => {
  activityCard.remove();
});

activities.forEach((activity) => {
  renderActivity(activity);
});

loadDemoButton.addEventListener("click", () => {
  demoActivities.forEach((activity) => {
    renderActivity(activity);
  });

  loadDemoButton.disabled = true;
  loadDemoButton.textContent = "Actividades de ejemplo cargadas";
});

initializeForm(activities);
