import { createSlice } from "@reduxjs/toolkit";

const postsSlice = createSlice({
  name: "posts",
  initialState: {
    posts: [],
    isLoading: false,
  },
  reducers: {
    /**
     * Reducer function for initial list of posts
     * @param {*} state
     * @param {*} action
     */
    setPosts: (state, action) => {
      state.posts = action.payload;
      state.isLoading = false;
    },
    /**
     * Reducer function for handling loading state
     * @param {*} state
     * @param {*} action
     */
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export default postsSlice;
export const postActions = postsSlice.actions;
