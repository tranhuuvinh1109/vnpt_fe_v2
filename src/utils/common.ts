import { addDays, format, startOfWeek } from "date-fns";
import { DateItemType } from "../type";

export function getCurrentWeekDays(date: Date = new Date()): DateItemType[] {
  const start = startOfWeek(date, { weekStartsOn: 1 });
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
