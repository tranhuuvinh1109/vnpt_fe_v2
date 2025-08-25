import dayjs from "dayjs";
import { SquareChevronDown, SquareMinus } from "lucide-react";
import { useState } from "react";
import DefaultAvt from "../../assets/images/default-avatar.png";
import { ShiftDetailType } from "../../type";
import { ShiftInfo } from "./components";

type ShiftCardProps = {
  data: ShiftDetailType;
};

export const ShiftCard = ({ data }: ShiftCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleShift = () => setIsOpen((pre) => !pre);
  return (
    <div className="rounded-lg  bg-white p-2 shadow-2xl">
      <div className="flex items-center justify-between hover:cursor-pointer  " onClick={toggleShift}>
        <h1 className="text-xl font-semibold">Ca - {data.shift_number}</h1>
        <div className="flex items-center gap-2">
          <div>
            <span className="text-base font-medium">
              {dayjs(data.start_time).format("HH:mm")} - {dayjs(data.end_time).format("HH:mm")}
            </span>
          </div>
          {isOpen ? <SquareMinus size={20} /> : <SquareChevronDown size={20} />}
        </div>
      </div>

      {isOpen && (
        <div className="mt-2 border-t border-t-slate-400 py-2">
          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <label>Người được giao:</label>
            </div>
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full border border-gray-200 p-2">
                <img alt="assign_user" src={DefaultAvt} />
              </div>
              <h6>Nguyễn Văn A</h6>
            </div>
          </div>
          <div className="flex flex-col gap-10">
            {data.infor_pre && <ShiftInfo data={data.infor_pre} title="Thông tin ca trước" />}
            {data.infor_during && <ShiftInfo data={data.infor_during} title="Thông tin quá trình" />}
            {data.infor_exist && <ShiftInfo data={data.infor_exist} title="Thông tin tồn đọng" />}
          </div>
        </div>
      )}
    </div>
  );
};
