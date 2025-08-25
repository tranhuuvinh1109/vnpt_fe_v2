import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { useState } from "react";
import { useGetAllShiftOrderByDate } from "../../api";
import { DateCard, ShiftCard } from "../../components";
import { DateItemType } from "../../type";
import { getCurrentWeekDays } from "../../utils";

const HomePage = () => {
  const days = getCurrentWeekDays();

  const { data: shiftData } = useGetAllShiftOrderByDate();

  const [dateActived, setDateActived] = useState<DateItemType>(days[0]);
  const handleClickDateCard = (item: DateItemType) => {
    setDateActived(item);
  };

  return (
    <div className="flex flex-col gap-6  p-4">
      <div className="scrollXCustom flex w-full gap-2 overflow-x-auto pb-2 ">
        {days.map((item) => (
          <DateCard data={item} isActive={dateActived?.label === item.label} onClick={handleClickDateCard} />
        ))}
      </div>
      <div className=" flex flex-col gap-2">
        {shiftData && shiftData[0].shifts.map((item) => <ShiftCard data={item} key={item._id} />)}
      </div>
      <div className="hidden">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          dayHeaderClassNames={"text-red-500"}
          dayCellClassNames={" !h-10"}
        />
      </div>
    </div>
  );
};

export default HomePage;
