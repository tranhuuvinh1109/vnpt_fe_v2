import { Bird } from "lucide-react";

const Header = () => {
  return (
    <header className="hidden justify-end bg-elementBgSecondary p-2 px-3 md:flex">
      <div className="w-fit  rounded-full border border-gray-400 p-2">
        <Bird size={20} />
      </div>
    </header>
  );
};

export default Header;
