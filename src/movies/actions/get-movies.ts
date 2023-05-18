import { mockMovies } from "./mockMovies";

export const getMovies = async () => {
  const response = Promise.resolve({ data: mockMovies });

  return response;
};
