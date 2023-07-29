import { createSlice } from "@reduxjs/toolkit";

const Lengths = createSlice({
  name: "lengths",
  initialState: { breakLength: 5, sessionLength: 25, millisec: 59 },
  reducers: {
    increaseBreak(state) {
      state.breakLength = state.breakLength + 1;
    },
    decreaseBreak(state) {
      state.breakLength = state.breakLength - 1;
    },
    increaseSession(state) {
      state.sessionLength = state.sessionLength + 1;
    },
    decreaseSession(state) {
      state.sessionLength = state.sessionLength - 1;
    },
    refresh(state) {
      state.breakLength = 5;
      state.sessionLength = 25;
      state.millisec = 59;
    },
  },
});

export const lengthActions = Lengths.actions;
export default Lengths.reducer;
