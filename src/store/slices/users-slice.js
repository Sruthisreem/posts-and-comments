import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: true,
  },
  reducers: {
    /**
     * Reducer function for setting users
     * @param {*} state
     * @param {*} action - list of users
     */
    setUsers: (state, action) => {
      state.users = action.payload;
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

export default usersSlice;
export const userAction = usersSlice.actions;
