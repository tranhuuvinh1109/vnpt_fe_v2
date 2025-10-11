import { X } from "lucide-react";

type CloseButtonProps = {
  onClick: () => void;
  className?: string;
};

export const CloseButton = ({ onClick, className }: CloseButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`absolute right-2 top-2 rounded-full bg-slate-400 p-1.5 text-white hover:bg-slate-500 ${className}`}
    >
      <X size={18} />
    </button>
  );
};
