import { Bird } from "lucide-react";
import Logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <header className=" flex items-center justify-between border-b border-b-gray-500 bg-elementBgSecondary p-2 px-3 shadow-lg md:justify-end md:border-none md:shadow-none">
      <div className="w-24 p-2 md:hidden">
        <img alt="logo" src={Logo} />
      </div>
      <div className="w-fit  rounded-full border border-gray-400 p-2">
        <Bird size={20} />
      </div>
    </header>
  );
};

export default Header;
