import { createSlice } from "@reduxjs/toolkit";

const favouriteSlice = createSlice({
  name: "Favourite",
  initialState: {
    ids: [],
  },
  reducers: {
    addToFavourite: (state, action) => {
      state.ids.push(action.payload.id);
    },
    removeFromFavourite: (state, action) => {
      state.ids.splice(state.ids.indexOf(action.payload.id), 1);
    },
  },
});
export const { addToFavourite, removeFromFavourite } = favouriteSlice.actions;
export default favouriteSlice.reducer;
