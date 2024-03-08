import { createSlice } from "@reduxjs/toolkit";

const firstStore = createSlice({
  name: "reduxOne",
  initialState: [],
  reducers: {
    hello: (state, action) => {},
  },
});
