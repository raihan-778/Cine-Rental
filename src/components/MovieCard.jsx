export const MovieCard = ({ movie = {} }) => {
  const { cover, title, descriptio, genre, rating, price, id } = movie;

  return (
    <figure class="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl">
      <img class="w-full object-cover" src={`./assets/${cover}`} alt={title} />
      <figcaption class="pt-4">
        <h3 class="text-xl mb-1">{title}</h3>
        <p class="text-[#575A6E] text-sm mb-2">{genre}</p>
        <div class="flex items-center space-x-1 mb-5">
          <img src="./assets/star.svg" width="14" height="14" alt="" />
          <img src="./assets/star.svg" width="14" height="14" alt="" />
          <img src="./assets/star.svg" width="14" height="14" alt="" />
          <img src="./assets/star.svg" width="14" height="14" alt="" />
          <img src="./assets/star.svg" width="14" height="14" alt="" />
        </div>
        <a
          class="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
          href="#"
        >
          <img src="./assets/tag.svg" alt="" />
          <span>$100 | Add to Cart</span>
        </a>
      </figcaption>
    </figure>
  );
};
