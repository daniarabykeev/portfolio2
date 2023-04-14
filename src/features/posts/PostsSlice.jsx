import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { POSTS_API } from "../../helpers/consts";

const initialState = {
  posts: [],
};

export const getAllPosts = createAsyncThunk(
  "posts/getAllPosts",
  async (_, { rejectWithValue, dispatch }) => {
    const { data } = await axios(POSTS_API);
    dispatch(getPosts(data));
    console.log(data);
  }
);

export const postsSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    getPosts: (state, action) => {
      state.posts = action.payload;
    },
  },
  extraReducers: {
    [getAllPosts.pending]: () => console.log("getAllPosts: pending"),
    [getAllPosts.fulfilled]: () => console.log("getAllPosts: fulfilled"),
    [getAllPosts.rejected]: () => console.log("getAllPosts: rejected"),
  },
});

export const { getPosts } = postsSlice.actions;
export default postsSlice.reducer;
