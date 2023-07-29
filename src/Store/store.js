import { configureStore } from "@reduxjs/toolkit";
import Lengths from "./Lengths";

const Store = configureStore({
  reducer: { lengths: Lengths },
});

export default Store;
