import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
const initialState = {
  data: [],
};
export const fetchData = createAsyncThunk('fetch/get', async () => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/users');
  return res.data;
});
const fetchSlice = createSlice({
  name: 'fetch',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      return {
        ...state,
        data: action.payload,
      };
    });
  },
});

export const { addCase } = fetchSlice.actions;

export const selectData = (state) => state.fetch.data;

export default fetchSlice.reducer;
