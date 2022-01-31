import { createSlice } from "@reduxjs/toolkit";
import books from "../../fakeData/books.json";

const initialState = {
  discover: books,
  readingList: [],
  finishedList: [],
};

export const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addToReadingList: (state, { payload }) => {
      state.readingList.push(payload);
    },
    removeFromReadingList: (state, { payload }) => {
      state.readingList = state.readingList.filter(
        (book) => book.id !== payload
      );
    },
    addToFinishedList: (state, { payload }) => {
      state.finishedList.push(payload);
      state.readingList = state.readingList.filter(
        (book) => book.id !== payload.id
      );
    },
  },
});

export const { addToReadingList, removeFromReadingList, addToFinishedList } =
  bookSlice.actions;

export default bookSlice.reducer;
