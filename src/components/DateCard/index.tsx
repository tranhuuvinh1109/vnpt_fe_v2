import { DateItemType } from "../../type";

type DateCardProps = {
  data: DateItemType;
  isActive?: boolean;
  onClick?: (item: DateItemType) => void;
};

export const DateCard = ({ data, isActive, onClick }: DateCardProps) => {
  return (
    <div
      className={`flex min-w-14 flex-col items-center gap-1 rounded-2xl border px-2  py-4 hover:cursor-pointer   ${isActive ? "bg-elementPrimary text-white" : "bg-white text-gray-500"}`}
      onClick={() => onClick && onClick(data)}
    >
      <span className="text-sm font-medium">{data.dateName}</span>
      <div className={`h-px w-full ${isActive ? "bg-white" : " bg-slate-400 "}`}></div>
      <span className="text-xs font-medium">{data.label}</span>
    </div>
  );
};
