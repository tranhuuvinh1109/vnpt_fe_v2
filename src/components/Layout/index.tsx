import { Outlet } from "react-router-dom";
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
          <div className="mx-2 mt-2 flex-1 overflow-y-auto rounded-lg bg-elementBgSecondary p-2">
            <Outlet />
          </div>
        </>
      </Container>
    </div>
  );
};

export default Layout;
