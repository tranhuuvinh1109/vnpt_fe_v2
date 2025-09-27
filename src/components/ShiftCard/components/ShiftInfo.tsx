import { ChevronDown, ChevronUp, ImageUp, X } from "lucide-react";
import { useState } from "react";
import { DataShiftForDayRequestType } from "../../../api/shift/shift.type";
import { InfoType } from "../../../type";

type ShiftInfoProps = {
  data: InfoType;
  title: string;
  isEditMode?: boolean;
  setInfoData?: React.Dispatch<React.SetStateAction<DataShiftForDayRequestType>>;
  name?: "infor_pre" | "infor_during" | "infor_exist";
};

export const ShiftInfo = ({ data, title, isEditMode = false, setInfoData, name }: ShiftInfoProps) => {
  const [isShowMore, setIsShowMore] = useState(false);

  const toggleShowMore = () => setIsShowMore((pre) => !pre);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && setInfoData && name) {
      const preview = URL.createObjectURL(file);
      setInfoData((pre) => ({
        ...pre,
        [name]: {
          ...pre[name],
          file,
          previewUrl: preview,
        },
      }));
    }
  };

  const handleRemoveImage = () => {
    if (setInfoData && name) {
      setInfoData((pre) => ({
        ...pre,
        [name]: {
          ...pre[name],
          file: undefined,
          previewUrl: "",
        },
      }));
    }
  };

  return (
    <div>
      <div className="flex items-center gap-2 p-2">
        <div className="h-0.5 flex-1 bg-slate-500" />
        <h1 className="text-xl font-medium">{title}</h1>
        <div className="h-0.5 flex-1 bg-slate-500" />
      </div>

      <div className={`flex gap-4 ${isEditMode ? "flex-col gap-2 md:flex-row" : "flex-col"}`}>
        <div className={`flex flex-col gap-1 ${isEditMode ? "flex-1" : ""}`}>
          <label htmlFor="note" className="text-sm font-medium md:text-base">
            Ghi chú:
          </label>
          {isEditMode ? (
            <textarea
              rows={4}
              id="note"
              placeholder="Nhập ghi chú"
              className="w-full rounded-lg border border-gray-200 p-1.5 text-base"
              defaultValue={data.note}
              onChange={(e) =>
                setInfoData &&
                name &&
                setInfoData((pre) => ({
                  ...pre,
                  [name]: { ...pre[name], note: e.target.value },
                }))
              }
            />
          ) : (
            <div className="flex flex-col gap-1">
              <p className={`text-justify text-xs md:text-sm ${isShowMore ? "" : "line-clamp-3"}`}>{data.note}</p>
              <button
                onClick={toggleShowMore}
                className="flex items-center gap-1 text-xs font-medium text-elementPrimary md:text-sm"
              >
                {isShowMore ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                <span>{isShowMore ? "Thu gọn" : "Xem thêm"}</span>
              </button>
            </div>
          )}
        </div>

        {!data?.image ? (
          <div className={`h-36 w-full overflow-hidden rounded-lg border md:h-60 ${isEditMode ? "md:flex-1" : ""}`}>
            {data.previewUrl ? (
              <div className="relative h-full w-full">
                <img src={data.previewUrl} alt="preview" className="h-full w-full object-cover" />
                <button
                  onClick={handleRemoveImage}
                  className="absolute right-2 top-2 rounded-full bg-slate-400 p-1.5 text-white hover:bg-slate-500"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <label
                htmlFor={`image-${name}`}
                className="flex h-full w-full flex-col items-center justify-center md:flex-row"
              >
                <ImageUp />
                <span>Hình ảnh</span>
              </label>
            )}
            <input type="file" accept="image/*" onChange={handleFileChange} id={`image-${name}`} className="hidden" />
          </div>
        ) : (
          <div className="flex flex-col gap-1">
            <h2 className="text-sm font-medium md:text-base">Hình ảnh:</h2>
            <img alt="details" src={data.image} className="mx-auto h-48 max-w-48 rounded-xl object-cover md:max-w-96" />
          </div>
        )}
      </div>
    </div>
  );
};
