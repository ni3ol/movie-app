import { useState } from "react";
import { Layout } from "../../shared/components/layout";
import { usePromise } from "../../shared/hooks/use-promise";
import { getMovies } from "../actions/get-movies";
import { Card } from "../components/card";
import { Movie } from "../domain/movie";
import { Select } from "../../shared/components/select";
import { LoggedInUser } from "../../shared/store/store";
import { getRecommendations } from "../../recommendations/actions/get-recommendations";

type Filter = "genre" | "rating" | "";

export const MoviesPage = () => {
  const getMoviesQuery = usePromise(getMovies);
  const {
    data: movies,
    isLoading: moviesLoading,
    isError: moviesError,
  } = getMoviesQuery;

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<Filter>("");
  const loggedInUser = LoggedInUser;

  // pass in logged in user
  const movieRecommendationsQuery = usePromise(getRecommendations);

  const filteredMovies = movies?.filter((movie) => {
    if (filter === "") return movie;
    if (filter === "genre") return movie.genre?.name.includes("Drama");
    if (filter === "rating") return movie?.averageRating > 3;
  });

  return (
    <Layout>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Movies Page</h1>

        <div style={{ display: "flex", gap: 20 }}>
          <Select
            label="Filter movies"
            value={filter}
            onChange={(e) => setFilter(e.target.value as Filter)}
            options={[
              { label: "None selected", value: "" },
              { label: "Genre", value: "genre" },
              { label: "Rating", value: "rating" },
            ]}
          />
          <input
            style={{ padding: 10, borderRadius: 5, border: "1px solid grey" }}
            placeholder="Search movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginBottom: 30 }}>
        <h2>Recommendations for you</h2>
        <div style={{ display: "flex", gap: 10 }}>
          {movieRecommendationsQuery.data?.map((movie) => (
            <Card movie={movie} key={movie.id} />
          ))}
        </div>
      </div>

      {moviesLoading ? (
        <p>Loading...</p>
      ) : moviesError ? (
        <p>Error</p>
      ) : movies?.length === 0 ? (
        <p>No movies</p>
      ) : (
        <>
          <h2>Popular in South Africa Today</h2>
          <div
            style={{
              display: "grid",
              gap: 20,
              gridTemplateColumns: "auto auto auto auto",
            }}
          >
            {filteredMovies?.map((movie) => (
              <Card movie={movie} key={movie.id} />
            ))}
          </div>
        </>
      )}
    </Layout>
  );
};
