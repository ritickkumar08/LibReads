import { createSlice } from '@reduxjs/toolkit'
import {books} from '../utils/bookData'

export const booksSlice = createSlice({
  name: 'books',
  initialState: {
    value: [books],
  },
  reducers: {
    addBook: (state, action) => {
    // Adds new book to the beginning of the list
    state.list.unshift(action.payload);
},
  }
})

// Action creators are generated for each case reducer function
export const { addBook } = booksSlice.actions

export default booksSlice.reducer