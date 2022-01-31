import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  discover: [],
  readingList: [],
  finishedList: [],
};

// First, create the thunk
export const fetchBooks = createAsyncThunk("book/fetchBooks", async () => {
  const response = await fetch(
    "https://redux-book-shelf.herokuapp.com/books"
  ).then((res) => res.json());
  return response.data;
});

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
  extraReducers: (builder) => {
    builder.addCase(fetchBooks.fulfilled, (state, action) => {
      state.discover = action.payload;
    });
  },
});

export const { addToReadingList, removeFromReadingList, addToFinishedList } =
  bookSlice.actions;

export default bookSlice.reducer;
