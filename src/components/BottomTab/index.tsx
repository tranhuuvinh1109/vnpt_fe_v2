import { Link } from "react-router-dom";
import { SIDEBARS } from "../../constant";
import { useAppContext } from "../../provider/context";

const BottomTab = () => {
  const { pathActive, setPathActive } = useAppContext();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-10 border-t border-t-overlay bg-elementBgSecondary py-1 md:hidden">
      <div className=" flex gap-2 px-1">
        {SIDEBARS.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              to={item.url}
              className={`flex-1 rounded-md text-gray-600 hover:bg-elementPrimary hover:text-white ${pathActive === item.url ? " !bg-elementPrimary !text-white " : ""}`}
              title={item.label}
              key={item.url}
              onClick={() => setPathActive(item.url)}
            >
              <div className="flex flex-col items-center justify-center gap-1 py-2 ">
                <Icon size={20} />
                <span className="line-clamp-1 text-center text-[10px] font-medium">{item.label}</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default BottomTab;
