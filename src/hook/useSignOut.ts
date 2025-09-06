import Toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { E_LOCAL_STORAGE, PATH } from "../enum";
import { useAppContext } from "../provider/context";

export const useSignOut = () => {
  const { setUser } = useAppContext();
  const navigate = useNavigate();

  const handleSignOut = () => {
    setUser(undefined);
    navigate(PATH.HOME);
    localStorage.removeItem(E_LOCAL_STORAGE.APP_NAME);
    Toast.success("Đăng xuất thành công!");
  };
  return { handleSignOut };
};
