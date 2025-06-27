import { Routes, Route } from "react-router-dom";

import ProtectedLayout from "@/router/ProtectedLayout";
import AdminOnlyLayout from "@/router/AdminOnlyLayout";

import MainPage from "@/pages/MainPage";
import Login from "@/pages/Login";
import AdminPage from "@/pages/AdminPage";
import NotFound from "@/pages/NotFound";

function BrowserRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<MainPage />} />

        <Route element={<AdminOnlyLayout />}>
          <Route path="/admin" element={<AdminPage />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default BrowserRoutes;
