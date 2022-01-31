import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "../Slices/BookSlices";

export const store = configureStore({
  reducer: {
    books: bookReducer,
  },
});
