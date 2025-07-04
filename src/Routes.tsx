import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";

const AppRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    </BrowserRouter>
);

export default AppRoutes;
