import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { createUser, deleteUser, getUser, patchUser } from "./api";
import { User } from "./interface/interfase";
const initialState = {
  users: [],
  status: "idle",
};
const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(getUser.fulfilled, (state: any, action: any) => {
        state.status = "succeeded";
        state.users = action.payload;
      })
      .addCase(
        createUser.fulfilled,
        (state: any, action: PayloadAction<User>) => {
          state.status = "succeeded";
          state.users = [...state.users, action.payload];
        }
      )
      .addCase(
        deleteUser.fulfilled,
        (state: any, action: PayloadAction<number>) => {
          state.status = "succeeded";
          state.users = state.users.filter(
            (user: User) => user.id !== action.payload
          );
        }
      )
      .addCase(
        patchUser.fulfilled,
        (state: any, action: PayloadAction<User>) => {
          state.status = "succeeded";
          state.users = state.users.map((user: User) =>
            user.id === action.payload.id
              ? { ...user, ...action.payload }
              : user
          );
        }
      );
  },
});
export default userSlice.reducer; 