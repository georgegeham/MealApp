import { configureStore } from "@reduxjs/toolkit";
import favouriteSlice from "./FavouriteSlice";
const Store = configureStore({
  reducer: {
    favouriteMeals: favouriteSlice,
  },
});
export default Store;
