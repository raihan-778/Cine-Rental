import "./App.css";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { MovieContainer } from "./components/MovieContainer";

function App() {
  return (
    <>
      <div class="dark:bg-body bg-white font-[Sora] dark:text-white text-dark">
        {" "}
        <Header />
        <MovieContainer />
        <Footer />
      </div>
    </>
  );
}

export default App;
