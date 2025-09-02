import { LogOut } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import { SIDEBARS } from "../../constant";
import { useSignOut } from "../../hook";
import { useAppContext } from "../../provider/context";

const Sidebar = () => {
  const { handleSignOut } = useSignOut();
  const { pathActive } = useAppContext();

  return (
    <div className="hidden h-screen w-72 flex-col p-2 md:flex">
      <Link to={"/"} className="mx-auto w-52 py-4">
        <img alt="logo" src={Logo} className="" />
      </Link>
      <div className="flex flex-1 flex-col gap-2">
        {SIDEBARS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.url}
              to={item.url}
              className={`flex cursor-pointer items-center gap-2 rounded-xl p-3 text-gray-600 hover:bg-elementPrimary hover:text-white ${item.url === pathActive ? "  bg-elementPrimary !text-white" : ""}`}
            >
              <Icon fontSize={24} />
              <span className="text-base font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
      <div>
        <button
          onClick={handleSignOut}
          className="flex w-full items-center gap-2 rounded-xl p-3  text-gray-600 hover:bg-red-400 hover:text-white"
        >
          <LogOut /> <span className="text-base font-medium">Đăng Xuất</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
