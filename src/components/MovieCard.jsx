import { useContext, useState } from "react";
import Tag from "../assets/tag.svg";
import { getImageUrl } from "../utils/cine-utilites";
import { MovieDetails } from "./MovieDetails";
import { MovieRatings } from "./movieRatings";
import { MovieCartConext } from "../../context";

export const MovieCard = ({ movie = {} }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { cover, title, descriptio, genre, rating, price, id } = movie;

  const { cartData, setCartData } = useContext(MovieCartConext);
  const [showCart, setShowCart] = useState(false);

  const handleCloseModal = () => {
    console.log("Onclose Modal Clicked");
    setSelectedMovie(null);
    setShowModal(false);
    // setCurrentMovieDetails({});
  };

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const handleAddToCart = (event, movie) => {
    event.stopPropagation();
    const found=cartData.find(item=>item.id===movie.id)
  
      console.error("This Movie is already added to cart ",found);
    }

    setCartData(movie);
    console.log("cart", movie);
  };

  return (
    <>
      {" "}
      {showModal && (
        <MovieDetails onClose={handleCloseModal} movie={selectedMovie} />
      )}
      <a href="#" onClick={() => handleSelectMovie(movie)}>
        <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
          <img
            className="w-full object-cover"
            src={getImageUrl(cover)}
            alt={title}
          />
          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{genre}</p>
            <MovieRatings value={rating} />
            <a
              className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
              href="#"
              onClick={(e) => handleAddToCart(e, movie)}
            >
              <img src={Tag} alt="" />
              <span>${price} | Add to Cart</span>
            </a>
          </figcaption>
        </figure>
      </a>
    </>
  );
};
