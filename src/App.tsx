import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import { PATH } from "./enum";
import { AccountPage, HomePage, NotFoundPage } from "./pages";
import { AppContext, ReactQueryProvider } from "./provider";

function App() {
  return (
    <AppContext>
      <ReactQueryProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path={PATH.ACCOUNT} element={<AccountPage />} />
            <Route path={"*"} element={<NotFoundPage />} />
          </Route>
        </Routes>
      </ReactQueryProvider>
    </AppContext>
  );
}

export default App;
