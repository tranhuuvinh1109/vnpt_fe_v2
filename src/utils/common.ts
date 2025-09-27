import { addDays, format, startOfWeek } from "date-fns";
import { DateItemType } from "../type";

export function getCurrentWeekDays(date: Date = new Date()): DateItemType[] {
  const start = startOfWeek(date, { weekStartsOn: 0 });
  const days = [];

  for (let i = 0; i < 7; i++) {
    const day = addDays(start, i);
    days.push({
      date: day,
      label: format(day, "dd/MM"),
      dateName: format(day, "EEE"),
    });
  }

  return days;
}

export function localISOString(date: Date) {
  return new Date(date.getTime() - date.getTimezoneOffset() * 60000).toISOString();
}

export function toISOWithTimezone(date: Date, offsetHours = 7) {
  const utc = date.getTime() + date.getTimezoneOffset() * 60000;
  const localTime = new Date(utc + offsetHours * 3600000);
  return localTime.toISOString();
}

export function toLocalISOString(date: Date) {
  const tzOffset = 7 * 60 * 60000;
  const localTime = new Date(date.getTime() + tzOffset);
  return localTime.toISOString();
}

export const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.readAsDataURL(file);
    reader.onload = () => {
      if (typeof reader.result === "string") {
        resolve(reader.result);
      } else {
        reject(new Error("Failed to convert file to base64"));
      }
    };
    reader.onerror = (error) => reject(error);
  });
};
