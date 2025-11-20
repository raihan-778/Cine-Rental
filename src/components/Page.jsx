import { useContext } from "react";
import { ThemeContext } from "../../context";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MovieContainer } from "./MovieContainer";

export const Page = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode ? "dark" : ""} bg-white font-[Sora] `}>
      {" "}
      <Header />
      <MovieContainer />
      <Footer />
    </div>
  );
};
