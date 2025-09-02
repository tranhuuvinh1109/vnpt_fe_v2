import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { Popover } from "@headlessui/react";
import dayjs, { Dayjs } from "dayjs";
import { CalendarDays, CalendarPlus2, PackageOpen } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useCreateShiftForDay, useGetAllShiftOrderByDate } from "../../api";
import { CreateShiftForDayRequestType } from "../../api/shift/shift.type";
import { DateCard, LoadingPage, ShiftCard, WeekPicker } from "../../components";
import { DateItemType } from "../../type";
import { getCurrentWeekDays, localISOString, toLocalISOString } from "../../utils";

const HomePage = () => {
  const { mutate: createShiftForDay, isPending: isPendingCreateShift } = useCreateShiftForDay();

  const [weekValue, setWeekValue] = useState<Dayjs | null>(dayjs());
  const [days, setDays] = useState<DateItemType[]>(
    getCurrentWeekDays(weekValue ? new Date(weekValue?.toISOString()) : new Date())
  );

  const { data: shiftData, refetch: refetchAllShift } = useGetAllShiftOrderByDate({
    from: localISOString(days[0].date),
    to: localISOString(days[6].date),
  });

  const [dateActived, setDateActived] = useState<DateItemType>(days[0]);
  const handleClickDateCard = (item: DateItemType) => {
    setDateActived(item);
  };

  const handleChangeWeekValue = (value: Dayjs | null) => {
    setWeekValue(value);
  };

  const handleClickCreateShift = useCallback(() => {
    const today = new Date(dateActived.date.toISOString());

    const payload: CreateShiftForDayRequestType = {
      start_time: toLocalISOString(today),
      end_time: toLocalISOString(today),
      create_user: "68a34e5b082a75a4003903d7",
      date: toLocalISOString(today),
    };

    createShiftForDay(payload, {
      onSuccess: () => refetchAllShift(),
      onError: () => refetchAllShift(),
    });
  }, [dateActived]);

  const renderShiftByDay = useMemo(() => {
    if (!shiftData) return null;

    const item = shiftData.find((item) => {
      const itemDate = dayjs(item.date).format("YYYY-MM-DD");
      const activeDate = dayjs(dateActived.date).format("YYYY-MM-DD");
      return itemDate === activeDate;
    });
    if (!item)
      return (
        <div>
          <div className="flex justify-end">
            <button
              onClick={handleClickCreateShift}
              className="flex items-center gap-1 rounded-lg bg-green-400 px-4 py-1.5 text-sm font-medium text-white shadow-lg hover:bg-green-600 md:text-base"
            >
              <CalendarPlus2 size={20} />
              Tạo ca
            </button>
          </div>
          <div className=" flex flex-col items-center justify-center gap-2 py-4 text-lg font-medium text-gray-500">
            <PackageOpen size={38} />
            <span>Không có ca nào trong ngày {dateActived.label}</span>
          </div>
        </div>
      );

    return item.shifts
      .sort((a, b) => a.shift_number - b.shift_number)
      .map((shift) => <ShiftCard data={shift} label={dateActived.label} key={shift._id} />);
  }, [shiftData, dateActived]);

  useEffect(() => {
    const genDay = getCurrentWeekDays(weekValue ? new Date(weekValue?.toISOString()) : new Date());
    setDays(genDay);
    setDateActived(genDay[0]);
  }, [weekValue]);

  return (
    <>
      <LoadingPage isPending={isPendingCreateShift} />
      <div className="flex flex-col gap-6  p-4">
        <div className="flex justify-end md:hidden">
          <Popover className="relative ">
            {({ close }) => (
              <>
                <Popover.Button className={"rounded-lg border bg-white px-3 py-1 shadow-lg"}>
                  <div className={"flex items-center gap-2"}>
                    <h1>Chọn tuần</h1>
                    <CalendarDays size={18} />
                  </div>
                </Popover.Button>

                <Popover.Panel className="absolute right-0 z-10">
                  <div className="rounded-lg bg-elementBgMain p-2 shadow-lg">
                    <WeekPicker
                      value={weekValue}
                      setValue={(value) => {
                        handleChangeWeekValue(value);
                        close();
                      }}
                    />
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>

        <div className="flex items-center justify-between ">
          <div className="scrollXCustom flex h-fit flex-1 gap-2 overflow-x-auto pb-2 ">
            {days.map((item) => (
              <DateCard
                data={item}
                key={item.label}
                isActive={dateActived?.label === item.label}
                onClick={handleClickDateCard}
              />
            ))}
          </div>
          <Popover className="relative hidden md:block">
            {({ close }) => (
              <>
                <Popover.Button className={"rounded-lg border px-3 py-1"}>
                  <div className={"flex items-center gap-2"}>
                    <h1>Chọn tuần</h1>
                    <CalendarDays size={18} />
                  </div>
                </Popover.Button>

                <Popover.Panel className="absolute right-0 z-10">
                  <div className="rounded-lg bg-elementBgMain p-2 shadow-lg">
                    <WeekPicker
                      value={weekValue}
                      setValue={(value) => {
                        handleChangeWeekValue(value);
                        close();
                      }}
                    />
                  </div>
                </Popover.Panel>
              </>
            )}
          </Popover>
        </div>
        <div className=" flex flex-col gap-2">{renderShiftByDay}</div>

        <div className="hidden">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            dayHeaderClassNames={"text-red-500"}
            dayCellClassNames={" !h-10"}
          />
        </div>
      </div>
    </>
  );
};

export default HomePage;
