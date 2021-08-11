export const TOGGLE_FAVORITES = "TOGGLE_FAVORITES";
export const ADD_FAVORITES = "ADD_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";

export const toggleFavorites = (favorite) => {
  return { type: TOGGLE_FAVORITES, payload: favorite };
};

export const addFavorites = (favorite) => {
  return { type: ADD_FAVORITES, payload: favorite };
};

export const removeFavorites = (favorite) => {
  return { type: REMOVE_FAVORITES, payload: favorite };
};
