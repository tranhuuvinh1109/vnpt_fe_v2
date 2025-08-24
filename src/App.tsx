import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import AdminPage from "./pages/Admin";
import HomePage from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="admin" element={<AdminPage />} />
      </Route>
    </Routes>
  );
}

export default App;
