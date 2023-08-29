import { configureStore } from "@reduxjs/toolkit";
import toggleModeSlice from "./toggleModeSlice";
import viewWidthSlice from "./viewWidthSlice";
<<<<<<< HEAD
import boardsSlice from "./boardsSlice";

const store = configureStore({
  reducer: {
    toggleModeSlice: toggleModeSlice.reducer,
    viewWidthSlice: viewWidthSlice.reducer,
    boardsSlice: boardsSlice.reducer,
=======

const store = configureStore({
  reducer: {
    toggleMode: toggleModeSlice.reducer,
    viewWidth: viewWidthSlice.reducer,
>>>>>>> 2035c02e5d4dcdf8c2d8a8ac76bb6a94c0df3ea7
  },
});
export default store;
