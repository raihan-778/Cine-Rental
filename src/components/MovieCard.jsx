import Tag from "../assets/tag.svg";
import { getImageUrl } from "../utils/cine-utilites";
import { MovieRatings } from "./movieRatings";

export const MovieCard = ({ movie = {} }) => {
  const { cover, title, descriptio, genre, rating, price, id } = movie;

  return (
    <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <img class="w-full object-cover" src={getImageUrl(cover)} alt={title} />
      <figcaption class="pt-4">
        <h3 class="text-xl mb-1">{title}</h3>
        <p class="text-[#575A6E] text-sm mb-2">{genre}</p>
        <MovieRatings rating={rating} />
        <a
          class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
        >
          <img src={Tag} alt="" />
          <span>$100 | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  );
};
