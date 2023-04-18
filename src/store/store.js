import { configureStore } from "@reduxjs/toolkit";
import PostsSlice from "../features/posts/PostsSlice";
import UsersSlice from "../features/users/UsersSlice";

export const store = configureStore({
  reducer: {
    posts: PostsSlice,
    users: UsersSlice,
  },
});
