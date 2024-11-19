import { HIGH_RATED_SHOWS, NEW_SHOWS } from "../../constant/showsConstants";
import { createSelector } from "reselect";

export const selectAllShows = (state) => state?.shows?.shows || [];

const sortShowsByType = (type) => {
  return createSelector([selectAllShows], (shows) => {
    if (type === HIGH_RATED_SHOWS) {
      return [...shows].sort((a, b) => b.rating.avarage - a.rating.avarage);
    } else if (type === NEW_SHOWS) {
      return [...shows].sort(
        (a, b) => new Date(b.premiered) - new Date(a.premiered)
      );
    }
    return shows
  });
};

export const selectSortedHighRatedShows = sortShowsByType(HIGH_RATED_SHOWS);
export const selectSortedNewShows = sortShowsByType(NEW_SHOWS);
