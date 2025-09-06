import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { PATH } from "./enum";
import { AccountPage, HomePage, NotFoundPage } from "./pages";
import { AppContext } from "./provider/context";

function App() {
  return (
    <AppContext>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path={PATH.ACCOUNT} element={<AccountPage />} />
          <Route path={"*"} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </AppContext>
  );
}

export default App;
