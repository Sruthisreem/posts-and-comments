import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  "2022",
  "Billing",
  "AWS",
  "Google",
  "Google Cloud",
  "Amazon",
  "Apple",
  "iPhone",
  "Android",
  "React",
  "ReactJs",
  "VanillaJs",
  "Redux",
  "Bootstrap",
];

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {
    /**
     * Reducer function for updating the tags
     * @param {*} state
     * @param {*} action
     */
    addTags: (state, action) => {
      const tags = action.payload;
      const tempArray = tags.filter((item) => {
        return !state.includes(item);
      });
      state.push(...tempArray);
    },
  },
});

export default tagsSlice;
export const tagsAction = tagsSlice.actions;
