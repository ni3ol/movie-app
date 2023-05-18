//     Movie ratings: Allow authenticated users to rate movies on a scale of 1 to 5 stars.
// Users should be able to rate a movie only once and update their rating if desired.
// Display the average rating for each movie based on user ratings.

export type Rating = {
  id: string;
  movieId: string;
  userId: string;
  rating: 1 | 2 | 3 | 4 | 5;
};
