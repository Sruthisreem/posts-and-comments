import { configureStore } from "@reduxjs/toolkit";
import commentsSlice from "./slices/comments-slice";
import postsSlice from "./slices/posts-slice";
import tagsSlice from "./slices/tags-slice";
import usersSlice from "./slices/users-slice";

export const store = configureStore({
  reducer: {
    posts: postsSlice.reducer,
    comments: commentsSlice.reducer,
    tags: tagsSlice.reducer,
    users: usersSlice.reducer,
  },
});
