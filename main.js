const activityForm = document.querySelector("#activity-form");

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

activityForm.addEventListener("submit", handleActivityFormSubmit);

function handleActivityFormSubmit(event) {
  event.preventDefault();

  const formData = new FormData(activityForm);

  const newActivity = {
    id: Date.now(),
    title: formData.get("title").trim(),
    day: formData.get("day"),
    startTime: formData.get("startTime"),
    endTime: formData.get("endTime"),
  };

  const validationError = validateActivity(newActivity);

  if (validationError) {
    alert(validationError);
    return;
  }

  activities.push(newActivity);
  renderActivity(newActivity);

  activityForm.reset();
}

function validateActivity(activity) {
  if (
    !activity.title ||
    !activity.day ||
    !activity.startTime ||
    !activity.endTime
  ) {
    return "Todos los campos son obligatorios.";
  }

  const startMinutes = convertTimeToMinutes(activity.startTime);
  const endMinutes = convertTimeToMinutes(activity.endTime);

  if (endMinutes <= startMinutes) {
    return "La hora de finalización debe ser posterior a la hora de inicio.";
  }

  const activityDuration = endMinutes - startMinutes;

  if (activityDuration < 30) {
    return "La actividad debe durar al menos 30 minutos.";
  }

  if (activityDuration % 30 !== 0) {
    return "La duración debe respetar intervalos de 30 minutos.";
  }

  if (startMinutes % 30 !== 0 || endMinutes % 30 !== 0) {
    return "Las horas deben seleccionarse en intervalos de 30 minutos.";
  }

  const hasOverlap = activities.some((existingActivity) => {
    if (existingActivity.day !== activity.day) {
      return false;
    }

    const existingStartMinutes = convertTimeToMinutes(
      existingActivity.startTime,
    );

    const existingEndMinutes = convertTimeToMinutes(existingActivity.endTime);

    return (
      startMinutes < existingEndMinutes && endMinutes > existingStartMinutes
    );
  });

  if (hasOverlap) {
    return "La actividad se superpone con otra actividad del mismo día.";
  }

  return null;
}

function renderActivity(activity) {
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

function convertTimeToMinutes(time) {
  const [hours, minutes] = time.split(":").map(Number);

  return hours * 60 + minutes;
}
