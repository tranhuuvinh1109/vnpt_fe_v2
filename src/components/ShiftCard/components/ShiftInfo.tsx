import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { InfoType } from "../../../type";

type ShiftInfoProps = {
  data: InfoType;
  title: string;
};

export const ShiftInfo = ({ data, title }: ShiftInfoProps) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleShowMore = () => setIsShowMore((pre) => !pre);

  return (
    <div>
      <div className="flex items-center gap-2 px-2">
        <div className="h-0.5 flex-1 bg-slate-500" />
        <h1 className="text-xl font-medium">{title}</h1>
        <div className="h-0.5 flex-1 bg-slate-500" />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-sm font-medium md:text-base">Ghi chú:</h2>
          <div className="flex flex-col gap-1 ">
            <p className={`text-justify text-xs md:text-sm ${isShowMore ? "" : "line-clamp-3"}`}>{data.note}</p>
            <button
              onClick={toggleShowMore}
              className=" flex items-center gap-1 text-xs font-medium text-elementPrimary md:text-sm"
            >
              {isShowMore ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
              <span>{isShowMore ? "Thu gọn" : "Xem thêm"}</span>
            </button>
          </div>
        </div>
        {data.image.startsWith("http") && (
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-medium md:text-base">Hình ảnh:</h2>
            <img alt="details" src={data.image} className=" mx-auto max-w-48 rounded-xl md:max-w-96" />
          </div>
        )}
      </div>
    </div>
  );
};
