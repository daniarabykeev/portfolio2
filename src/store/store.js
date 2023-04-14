import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "../features/posts/PostsSlice";

export const store = configureStore({
  reducer: {
    posts: PostsSlice,
  },
});
