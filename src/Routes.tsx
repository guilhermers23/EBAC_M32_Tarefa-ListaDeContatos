import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

const AppRoutes = createBrowserRouter([
    {
        path: "/",
        element: <Home />,

    },
    {
        path: "/register",
        element: <Register />
    }
]);

export default AppRoutes;
