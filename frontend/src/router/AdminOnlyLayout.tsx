import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedLayout() {
    const userRole = localStorage.getItem('role');

    if (userRole !== 'admin') {
        return <Navigate to="/" replace />;
    }

    return <Outlet />;
}
