import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import GlobalStyled from "./styles";
import AppRoutes from "./Routes";
import Navbar from "./components/Navbar";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Navbar />
      <RouterProvider router={AppRoutes} />
    </Provider>
  )
};

export default App;
