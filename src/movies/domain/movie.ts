import { Genre } from "../../genres/domain/genre";

export type Movie = {
  id: string;
  title: string;
  description: string;
  genre: Genre;
  averageRating: number;
};
