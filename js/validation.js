import { convertTimeToMinutes } from "./utils.js";

export function validateActivity(activity, activities) {
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
