import { renderActivity } from "./calendar.js";
import { initializeForm } from "./form.js";

const initialActivities = [
  {
    id: 1,
    title: "Estudiar JavaScript",
    day: "monday",
    startTime: "09:00",
    endTime: "10:30",
  },
  {
    id: 2,
    title: "Reunión del proyecto",
    day: "wednesday",
    startTime: "17:00",
    endTime: "18:00",
  },
];

const activities = [...initialActivities];

const exampleActivityCards = document.querySelectorAll(
  ".activity-card-example",
);

exampleActivityCards.forEach((activityCard) => {
  activityCard.remove();
});

activities.forEach((activity) => {
  renderActivity(activity);
});

initializeForm(activities);
