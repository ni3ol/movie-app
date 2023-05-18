import { Movie } from "../domain/movie";

export const Card = ({ movie }: { movie: Movie }) => {
  const { title, description, averageRating, genre } = movie;
  return (
    <div style={{ padding: 20, backgroundColor: "#f9f9f9", borderRadius: 20 }}>
      <h3 style={{ marginBottom: 0 }}>{title}</h3>
      <p style={{ fontSize: 14 }}>{description}</p>
      <p>{averageRating}</p>
      <p>{genre.name}</p>
    </div>
  );
};
