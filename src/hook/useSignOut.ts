import Toast from "react-hot-toast";
import { E_LOCAL_STORAGE } from "../enum";
import { useAppContext } from "../provider/context";

export const useSignOut = () => {
  const { setUser } = useAppContext();
  const handleSignOut = () => {
    setUser(undefined);
    localStorage.removeItem(E_LOCAL_STORAGE.APP_NAME);
    Toast.success("Đăng xuất thành công!");
  };
  return { handleSignOut };
};
