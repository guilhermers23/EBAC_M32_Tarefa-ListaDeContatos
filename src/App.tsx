import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";

import GlobalStyled from "./styles";
import AppRoutes from "./Routes";
import Header from "./components/Header";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyled />
      <Header />
      <RouterProvider router={AppRoutes} />
    </Provider>
  )
};

export default App;
