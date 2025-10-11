import { ChevronDown, ChevronUp, ImageUp } from "lucide-react";
import { useState } from "react";
import { DataShiftForDayRequestType } from "../../../api/shift/shift.type";
import { InfoType } from "../../../type";
import { CloseButton } from "../../Button";

type ShiftInfoProps = {
  data: InfoType;
  title: string;
  isEditMode?: boolean;
  setInfoData?: React.Dispatch<React.SetStateAction<DataShiftForDayRequestType>>;
  name?: "infor_pre" | "infor_during" | "infor_exist";
};

export const ShiftInfo = ({ data, title, isEditMode = false, setInfoData, name }: ShiftInfoProps) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [localImage, setLocalImage] = useState<string | undefined>(data.previewUrl || data.image);

  const toggleShowMore = () => setIsShowMore((pre) => !pre);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const preview = URL.createObjectURL(file);
    setLocalImage(preview);

    // Cập nhật state cha nếu có
    if (setInfoData && name) {
      setInfoData((pre) => ({
        ...pre,
        [name]: {
          ...pre[name],
          file,
          previewUrl: preview,
        },
      }));
    }

    // reset input để có thể chọn cùng một file lần sau
    e.target.value = "";
  };

  const handleRemoveImage = () => {
    setLocalImage(undefined);

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

  const handleNoteChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (setInfoData && name) {
      setInfoData((pre) => ({
        ...pre,
        [name]: { ...pre[name], note: e.target.value },
      }));
    }
  };

  return (
    <div>
      {/* --- Header --- */}
      <div className="flex items-center gap-2 p-2">
        <div className="h-0.5 flex-1 bg-slate-500" />
        <h1 className="text-xl font-medium">{title}</h1>
        <div className="h-0.5 flex-1 bg-slate-500" />
      </div>

      {/* --- Body --- */}
      <div className={`flex gap-4 ${isEditMode ? "flex-col gap-2 md:flex-row" : "flex-col"}`}>
        {/* --- Note Section --- */}
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
              onChange={handleNoteChange}
            />
          ) : (
            <div className="flex flex-col gap-1">
              <p className={`text-justify text-xs md:text-sm ${isShowMore ? "" : "line-clamp-3"}`}>{data.note}</p>
              {data.note?.length > 100 && (
                <button
                  onClick={toggleShowMore}
                  className="flex items-center gap-1 text-xs font-medium text-elementPrimary md:text-sm"
                >
                  {isShowMore ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  <span>{isShowMore ? "Thu gọn" : "Xem thêm"}</span>
                </button>
              )}
            </div>
          )}
        </div>

        {/* --- Image Section --- */}
        <div className={`flex flex-col gap-1 ${isEditMode ? "md:flex-1" : ""}`}>
          <h2 className="text-sm font-medium md:text-base">Hình ảnh:</h2>

          <div className="relative flex h-48 w-full items-center justify-center overflow-hidden md:h-60">
            {localImage ? (
              <>
                <img src={localImage} alt="shift" className="h-full w-full object-contain" />
                {isEditMode && <CloseButton onClick={handleRemoveImage} />}
              </>
            ) : (
              isEditMode && (
                <label
                  htmlFor={`image-${name}`}
                  className="flex h-full w-full cursor-pointer flex-col items-center justify-center gap-1 rounded-lg border text-gray-500 md:flex-row"
                >
                  <ImageUp />
                  <span>Thêm hình ảnh</span>
                </label>
              )
            )}
            {isEditMode && (
              <input type="file" accept="image/*" onChange={handleFileChange} id={`image-${name}`} className="hidden" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
