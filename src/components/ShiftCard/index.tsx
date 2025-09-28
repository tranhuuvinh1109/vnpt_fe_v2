import dayjs from "dayjs";
import { Check, Pencil, SquareChevronDown, SquareMinus } from "lucide-react";
import { useState } from "react";
import DefaultAvt from "../../assets/images/default-avatar.png";
import { ShiftDetailType } from "../../type";
import { CreateShiftStep, ShiftInfo, ShiftStatus } from "./components";

type ShiftCardProps = {
  data: ShiftDetailType;
  label?: string;
  refetch?: () => {};
};

export const ShiftCard = ({ data, label, refetch }: ShiftCardProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const toggleMode = () => {
    setIsEditMode((pre) => !pre);
  };

  const toggleShift = () => setIsOpen((pre) => !pre);

  return (
    <div className="rounded-lg  bg-white p-2 shadow-2xl">
      <div className="flex items-center justify-between hover:cursor-pointer" onClick={toggleShift}>
        <div className="flex items-center gap-2">
          <ShiftStatus status={data.status} />
          {label && (
            <div className="hidden h-fit justify-center rounded-full bg-elementPrimary px-2 py-0.5">
              <span className="text-xs font-medium text-gray-100">{label}</span>
            </div>
          )}
          <h1 className=" text-xl font-semibold">Ca - {data.shift_number}</h1>
        </div>
        <div className="flex items-center gap-2">
          <div>
            <span className="text-base font-medium">
              {dayjs(data.start_time).format("HH:mm")} - {dayjs(data.end_time).format("HH:mm")}
            </span>
          </div>
          {isOpen ? <SquareMinus size={20} /> : <SquareChevronDown size={20} />}
        </div>
      </div>

      <div className={`${isOpen ? "" : "hidden"} mt-2 border-t border-t-slate-400 py-2`}>
        <div className="flex justify-end pb-2">
          <button
            className={`flex min-w-28 items-center justify-center gap-2 rounded  px-1.5 py-2 text-xs font-medium  ${
              isEditMode
                ? "bg-green-400 text-white hover:bg-green-500"
                : "bg-slate-200 hover:bg-slate-300 hover:text-slate-700"
            }`}
            onClick={toggleMode}
          >
            {isEditMode ? "Lưu" : "Chỉnh sửa"}
            {isEditMode ? <Check size={16} /> : <Pencil size={16} />}
          </button>
        </div>
        {!isEditMode ? (
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <label>Người được giao:</label>
            </div>
            <div className="flex flex-1 items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full border border-gray-200 p-2">
                  <img alt="assign_user" src={DefaultAvt} />
                </div>
                <h6>Nguyễn Văn A</h6>
              </div>
              <ShiftStatus status={data.status} isShowDetail />
            </div>
          </div>
        ) : (
          <CreateShiftStep data={data} refetch={refetch} />
        )}
        {!isEditMode && (
          <div className="flex flex-col gap-10">
            {data.infor_pre && <ShiftInfo data={data.infor_pre} title="Thông tin ca trước" />}
            {data.infor_during && <ShiftInfo data={data.infor_during} title="Thông tin quá trình" />}
            {data.infor_exist && <ShiftInfo data={data.infor_exist} title="Thông tin tồn đọng" />}
          </div>
        )}
      </div>
    </div>
  );
};
