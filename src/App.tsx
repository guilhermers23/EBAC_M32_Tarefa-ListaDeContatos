import { RouterProvider } from "react-router-dom";
import AppRoutes from "./Routes";
import GlobalStyled from "./styles";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <GlobalStyled />
      <Navbar />
      <RouterProvider router={AppRoutes} />
    </>
  )
};

export default App;
