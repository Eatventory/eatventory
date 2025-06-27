import { BrowserRouter } from "react-router-dom";
import BrowserRoutes from '@/router/routes'

function AppRouter() {
  return (
    <BrowserRouter>
      <BrowserRoutes />
    </BrowserRouter>
  );
}

export default AppRouter;