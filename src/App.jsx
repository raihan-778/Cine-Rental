import { useState } from "react";
import { MovieCartConext } from "../context";
import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MovieContainer } from "./components/MovieContainer";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <>
      <MovieCartConext.Provider value={{ cartData, setCartData }}>
        <div className="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
          {" "}
          <Header />
          <MovieContainer />
          <Footer />
        </div>
      </MovieCartConext.Provider>
    </>
  );
}

export default App;
