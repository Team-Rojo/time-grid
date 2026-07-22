import { convertTimeToMinutes } from "./utils.js";

export function renderActivity(activity) {
  const dayColumn = document.querySelector(`[data-day="${activity.day}"]`);

  if (!dayColumn) {
    return;
  }

  const activityCard = document.createElement("article");
  const activityTitle = document.createElement("h3");
  const activitySchedule = document.createElement("p");

  activityCard.classList.add("activity-card");
  activityCard.dataset.activityId = activity.id;

  activityTitle.innerText = activity.title;
  activitySchedule.innerText = `${activity.startTime} - ${activity.endTime}`;

  activityCard.append(activityTitle, activitySchedule);

  const startMinutes = convertTimeToMinutes(activity.startTime);
  const endMinutes = convertTimeToMinutes(activity.endTime);
  const activityDuration = endMinutes - startMinutes;

  activityCard.style.top = `${startMinutes}px`;
  activityCard.style.height = `${activityDuration}px`;

  dayColumn.append(activityCard);
}
