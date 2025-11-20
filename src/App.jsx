import { useReducer, useState } from "react";
import { ToastContainer } from "react-toastify";
import { MovieCartConext, ThemeContext } from "../context";
import "./App.css";
import { Page } from "./components/Page";
import { CartReducer, initialState } from "./reducers/CartReducer";

function App() {
  // const [cartData, setCartData] = useState([]);
  const [darkMode, setDarkMode] = useState(true);

  const [state, dispatch] = useReducer(CartReducer, initialState);

  return (
    <>
      <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
        <MovieCartConext.Provider value={{ state, dispatch }}>
          <Page />
          <ToastContainer position="top-center" />
        </MovieCartConext.Provider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
