import { CalendarSearch, FileSliders, Network, NotebookPen, UserRound } from "lucide-react";
import { PATH } from "../enum";
import { SidebarItemType } from "../type";

export const SIDEBARS: SidebarItemType[] = [
  {
    label: "Kế hoạch tuần tra",
    url: PATH.HOME, // Kế hoạch tuần tra
    icon: FileSliders,
  },
  {
    label: "Truyền thông",
    url: PATH.MEDIA, // Truyền thông
    icon: Network,
  },
  {
    label: "Báo cáo thông tin ngày",
    url: PATH.DAILY_REPORT, // Báo cáo thông tin ngày
    icon: CalendarSearch,
  },
  {
    label: "Phụ lục tồn tại",
    url: PATH.EXISTING_APPENDIX, // Phụ lục tồn tại
    icon: NotebookPen,
  },
  {
    label: "Tài khoản",
    url: PATH.ACCOUNT, // Phụ lục tồn tại
    icon: UserRound,
  },
];
