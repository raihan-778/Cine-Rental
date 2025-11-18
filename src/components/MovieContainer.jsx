import { SideBar } from "./SideBar";

import { getAllMovies } from "../data/movies";
import { MovieCard } from "./MovieCard";

export const MovieContainer = () => {
  const movies = getAllMovies();
  return (
    //   <!-- Begin Main -->
    <main>
      <div class="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
        {/* <!-- Sidebar --> */}
        <SideBar />

        {/* <!-- Content --> */}
        <div class="content">
          <div class="grid sm:grid-cols-2 xl:grid-cols-3 gap-7">
            {movies.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
            {/* <!-- Begin Card --> */}
          </div>
        </div>
      </div>
    </main>
  );
};
