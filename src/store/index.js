import { configureStore } from "@reduxjs/toolkit";
import categoriesSlice from "./reducer/categories.reducer";
import itemsSlice from "./reducer/items.reducer";

const store = configureStore({
  reducer: {
    categories: categoriesSlice,
    items: itemsSlice,
  },
});

export default store;
