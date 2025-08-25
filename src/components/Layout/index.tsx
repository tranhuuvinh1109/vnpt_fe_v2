import { Outlet } from "react-router-dom";
import BottomTab from "../BottomTab";
import Container from "../Container";
import Header from "../Header";
import Sidebar from "../Sidebar";
const Layout = () => {
  return (
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
  );
};

export default Layout;
