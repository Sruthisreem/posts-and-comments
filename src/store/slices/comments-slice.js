import { createSlice } from "@reduxjs/toolkit";
const commentsSlice = createSlice({
  name: "coments",
  initialState: {
    shouldDisplayComments: false,
    selectedPostId: "",
    comments: [],
    isLoading: false,
  },
  reducers: {
    /**
     * Reducer function for add comment
     * @param {*} state
     * @param {*} action  - new comment in the payload
     */
    addComment: (state, action) => {
      state.comments.push(action.payload);
    },
    /**
     * Reducer function to set the visibility of comments
     * @param {*} state
     * @param {*} action
     */
    displayComments: (state, action) => {
      state.shouldDisplayComments = action.payload;
    },
    /**
     * Reducer function to set comments
     * @param {*} state
     * @param {*} action - list of comments in payload
     */
    setComments: (state, action) => {
      state.comments = action.payload;
    },
    /**
     * Reducer function to set selected post Id
     * @param {*} state
     * @param {*} action - selected post ID in payload
     */
    setSelectedPostId: (state, action) => {
      state.selectedPostId = action.payload;
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

export default commentsSlice;
export const commentActions = commentsSlice.actions;
