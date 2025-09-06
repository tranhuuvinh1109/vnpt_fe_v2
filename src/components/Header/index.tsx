import Logo from "../../assets/images/logo.png";
import { useAppContext } from "../../provider/context";
import { Avatar } from "../Avatar";

const Header = () => {
  const { user } = useAppContext();
  return (
    <header className=" flex items-center justify-between border-b border-b-gray-500 bg-elementBgSecondary p-2 px-3 shadow-lg md:justify-end md:border-none md:shadow-none">
      <div className="w-24 p-2 md:hidden">
        <img alt="logo" src={Logo} />
      </div>
      {user && (
        <div>
          <div className="block h-fit w-fit md:hidden">
            <Avatar size={20} className="rounded-full border p-2" />
          </div>
          <div className="hidden h-fit w-fit md:block">
            <Avatar size={24} className="rounded-full border p-2" />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
