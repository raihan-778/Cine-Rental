import Star from "../assets/star.svg";

export const MovieRatings = ({ value = 0 }) => {
  const stars = Array(value).fill(Star);
  return (
    <div className="flex items-center space-x-1 mb-5">
      {stars.map((star, i) => (
        <img src={star} alt="star" hight="14" width="14" key={i}></img>
      ))}
    </div>
  );
};
