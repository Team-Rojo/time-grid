const STORAGE_KEY = "timeGridActivities";

export function saveActivities(activities) {
  const activitiesJSON = JSON.stringify(activities);

  localStorage.setItem(STORAGE_KEY, activitiesJSON);
}

export function loadActivities() {
  const activitiesJSON = localStorage.getItem(STORAGE_KEY);

  if (!activitiesJSON) {
    return null;
  }

  return JSON.parse(activitiesJSON);
}
