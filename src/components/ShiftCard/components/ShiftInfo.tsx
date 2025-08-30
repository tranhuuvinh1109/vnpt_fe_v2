import { ChevronDown, ChevronUp, ImageUp, X } from "lucide-react";
import { useState } from "react";
import { InfoType } from "../../../type";

type ShiftInfoProps = {
  data: InfoType;
  title: string;
  isEditMode?: boolean;
};

export const ShiftInfo = ({ data, title, isEditMode = false }: ShiftInfoProps) => {
  const [isShowMore, setIsShowMore] = useState(false);
  const [fileSelected, setFileSelected] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

  const toggleShowMore = () => setIsShowMore((pre) => !pre);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileSelected(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleRemoveImage = () => {
    setFileSelected(null);
    setPreviewUrl("");
  };

  return (
    <div>
      <div className="flex items-center gap-2 px-2">
        <div className="h-0.5 flex-1 bg-slate-500" />
        <h1 className="text-xl font-medium">{title}</h1>
        <div className="h-0.5 flex-1 bg-slate-500" />
      </div>
      <div className={`flex gap-4  ${isEditMode ? "flex-col gap-2 md:flex-row" : "flex-col"}`}>
        <div className={`flex flex-col gap-1 ${isEditMode ? "flex-1" : ""}`}>
          <label htmlFor="note" className="text-sm font-medium md:text-base">
            Ghi chú:
          </label>
          {isEditMode ? (
            <div>
              <textarea
                rows={4}
                id="note"
                placeholder="Nhập ghi chú"
                className="w-full rounded-lg border border-gray-200 p-1.5 text-base"
              />
            </div>
          ) : (
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
          )}
        </div>
        {isEditMode ? (
          <div className={`h-36 w-full overflow-hidden rounded-lg  border md:h-60 ${isEditMode ? "md:flex-1" : ""}`}>
            {previewUrl && fileSelected ? (
              <div className="relative h-full w-full">
                <img src={previewUrl} alt="preview" className="h-full w-full object-cover" />
                <button
                  onClick={handleRemoveImage}
                  className="absolute right-2 top-2 rounded-full bg-slate-400 p-1.5 text-white hover:bg-slate-500"
                >
                  <X size={18} />
                </button>
              </div>
            ) : (
              <label htmlFor="image" className="flex h-full w-full flex-col items-center justify-center md:flex-row">
                <ImageUp />
                <span>Hình ảnh</span>
              </label>
            )}
            <input type="file" accept="image/*" onChange={handleFileChange} id="image" className="hidden" />
          </div>
        ) : (
          data.image.startsWith("http") && (
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-medium md:text-base">Hình ảnh:</h2>
              <img alt="details" src={data.image} className=" mx-auto max-w-48 rounded-xl md:max-w-96" />
            </div>
          )
        )}
      </div>
    </div>
  );
};
