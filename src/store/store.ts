import { configureStore } from "@reduxjs/toolkit";
import userReduser from "../userReduser";

const store = configureStore({
  reducer: {
    users: userReduser,
  },
});
export default store;
