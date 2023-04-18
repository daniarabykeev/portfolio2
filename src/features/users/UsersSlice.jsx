import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { USERS_API } from "../../helpers/consts";

const initialState = {
  users: [],
};

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await axios(USERS_API);
      dispatch(getUsers(data));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUsers: (state, action) => {
      state.users = action.payload;
    },
  },
  extraReducers: {
    [getAllUsers.pending]: () => console.log("getAllUsers: pending"),
    [getAllUsers.fulfilled]: () => console.log("getAllUsers: fulfilled"),
    [getAllUsers.rejected]: () => console.log("getAllUsers: rejected"),
  },
});

export const { getUsers } = usersSlice.actions;
export default usersSlice.reducer;
