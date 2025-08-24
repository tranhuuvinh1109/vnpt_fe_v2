import { Outlet } from "react-router-dom";
import BottomTab from "../BottomTab";
import Container from "../Container";
import Header from "../Header";
import Sidebar from "../Sidebar";
const Layout = () => {
  return (
    <div className="text-back flex h-screen w-full overflow-hidden overflow-y-hidden bg-elementBgSecondary  font-montserrat">
      <Sidebar />
      <Container className="flex flex-1 flex-col overflow-hidden bg-gray-200">
        <>
          <Header />
          <div className="mb-16 flex-1 overflow-y-auto bg-elementBgSecondary md:mx-2 md:mt-2 md:rounded-lg md:p-2">
            <Outlet />
          </div>
        </>
      </Container>
      <BottomTab />
    </div>
  );
};

export default Layout;
