import { useContext, useState } from "react";
import { MovieCartConext } from "../../context";
import Tag from "../assets/tag.svg";
import { getImageUrl } from "../utils/cine-utilites";
import { MovieDetailsModal } from "./MovieDetailsModal";
import { MovieRatings } from "./movieRatings";

export const MovieCard = ({ movie = {} }) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { cover, title, genre, rating, price } = movie;

  const { cartData, setCartData } = useContext(MovieCartConext);

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
    const found = cartData?.find((item) => {
      return item.id === movie.id;
    });
    if (!found) {
      setCartData([...cartData, movie]);
      console.log("Add to cart clicked", cartData);
    } else {
      console.error(`This ${movie.title} is already in the cart`);
    }
  };

  return (
    <>
      {" "}
      {showModal && (
        <MovieDetailsModal
          onClose={handleCloseModal}
          movie={selectedMovie}
          onCartAdd={handleAddToCart}
        />
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
