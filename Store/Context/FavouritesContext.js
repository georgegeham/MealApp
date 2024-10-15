import { createContext, useState } from "react";
export const FavouriteCtx = createContext({
  ids: [],
  addFavourite: (id) => {},
  removeFavourite: (id) => {},
});
export default function FavouritesContext({ children }) {
  const [favouriteIds, setFavouriteIds] = useState([]);
  function addFavourite(id) {
    setFavouriteIds((prev) => [...prev, id]);
  }
  function removeFavourite(id) {
    setFavouriteIds((prev) => prev.filter((mealId) => mealId !== id));
  }
  const value = {
    ids: favouriteIds,
    addFavourite: addFavourite,
    removeFavourite: removeFavourite,
  };
  return (
    <FavouriteCtx.Provider value={value}>{children}</FavouriteCtx.Provider>
  );
}
