import { Bird } from "lucide-react";

const Header = () => {
  return (
    <header className="flex justify-end bg-elementBgSecondary p-2 px-3">
      <div className="w-fit  rounded-full border border-gray-400 p-2">
        <Bird size={20} />
      </div>
    </header>
  );
};

export default Header;
