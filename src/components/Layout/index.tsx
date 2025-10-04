import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useMe } from "../../api";
import { E_LOCAL_STORAGE } from "../../enum";
import { useAppContext } from "../../provider/context";
import BottomTab from "../BottomTab";
import Container from "../Container";
import Header from "../Header";
import { LoadingPage } from "../Loading";
import { LoginModal } from "../LoginModal";
import Sidebar from "../Sidebar";
const Layout = () => {
  const { setUser, isOpenLoginModal, setIsOpenLoginModal } = useAppContext();
  const localStorageData = localStorage.getItem(E_LOCAL_STORAGE.APP_NAME);

  const { data: userProfile, isPending: isPendingUserProfile } = useMe();

  const onClose = () => {
    return;
  };

  useEffect(() => {
    if (!userProfile) {
      !isPendingUserProfile && setIsOpenLoginModal(true);
      return;
    };
    setUser(userProfile);
    setIsOpenLoginModal(false);
  }, [userProfile, isPendingUserProfile]);

  return (
    <>
      <LoadingPage isPending={isPendingUserProfile && !!localStorageData} />
      <div className="text-back flex h-screen w-full overflow-hidden overflow-y-hidden bg-elementBgSecondary  font-montserrat">
        <Sidebar />
        <Container className="flex flex-1 flex-col overflow-hidden !bg-slate-300">
          <>
            <Header />
            <div className="p2 mb-16 flex-1 overflow-y-auto bg-gray-100 md:mx-2 md:mb-0 md:mt-2 md:rounded-lg  ">
              <Outlet />
            </div>
          </>
        </Container>
        <BottomTab />
      </div>
      <LoginModal isOpen={isOpenLoginModal} onClose={onClose} />
    </>
  );
};

export default Layout;
