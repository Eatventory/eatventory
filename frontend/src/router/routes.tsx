import { Routes, Route } from "react-router-dom";

import ProtectedLayout from "@/router/ProtectedLayout";

import MainPage from "@/pages/MainPage";
import Login from "@/pages/Login";
import Wishlist from "@/pages/Wishlist";
import NotFound from "@/pages/NotFound";

function BrowserRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />

      <Route element={<ProtectedLayout />}>
        <Route path="/" element={<MainPage />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default BrowserRoutes;
