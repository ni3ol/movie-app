import { mockMovies } from "../../movies/actions/mockMovies";

export const getRecommendations = async () => {
  return Promise.resolve({ data: [mockMovies[0], mockMovies[1]] });
};
