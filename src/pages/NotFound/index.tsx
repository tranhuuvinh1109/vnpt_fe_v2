import { Undo2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import NotFoundGif from "../../assets/gif/404-Error-Animation-4.gif";
import { PATH } from "../../enum";

const NotFoundPage = () => {
  const navigate = useNavigate();
  const hanldeBackHome = () => {
    navigate(PATH.HOME);
  };
  return (
    <div className="flex h-full items-center justify-center">
      <div>
        <div className="md:max-w-auto max-w-60">
          <img src={NotFoundGif} alt="not-found-gif" />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-center text-lg font-medium">Không tồn tại trang này</h1>
          <button
            onClick={hanldeBackHome}
            className=" mx-auto flex items-center gap-2 rounded-lg bg-elementPrimary  px-4 py-2 font-medium text-white hover:opacity-85 md:px-6 md:py-3 "
          >
            <Undo2 size={20} />
            Trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
