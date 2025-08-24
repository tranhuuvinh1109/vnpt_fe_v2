import { CalendarSearch, FileSliders, Network, NotebookPen } from "lucide-react";
import { SidebarItemType } from "../type";

export const SIDEBARS: SidebarItemType[] = [
  {
    label: "Kế hoạch tuần tra",
    url: "patrol-plan", // Kế hoạch tuần tra
    icon: FileSliders,
  },
  {
    label: "Truyền thông",
    url: "media", // Truyền thông
    icon: Network,
  },
  {
    label: "Báo cáo thông tin ngày",
    url: "daily-report", // Báo cáo thông tin ngày
    icon: CalendarSearch,
  },
  {
    label: "Phụ lục tồn tại",
    url: "existing-appendix", // Phụ lục tồn tại
    icon: NotebookPen,
  },
];
