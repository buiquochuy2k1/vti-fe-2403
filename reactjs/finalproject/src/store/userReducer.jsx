import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserList = createAsyncThunk("user/getUserList", async () => {
  const response = await axios.get("http://localhost:3000/user");
  console.log("Response", response);
  return response.data;
});

export const deleteUser = createAsyncThunk("user/deleteUser", async (id) => {
  const response = await axios.delete(`http://localhost:3000/user/${id}`);
  return response.data;
});

const initialState = {
  status: "idle",
  userList: [],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getUserList.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getUserList.fulfilled, (state, action) => {
      state.status = "success";
      state.userList = [...action.payload];
    });
    builder.addCase(getUserList.rejected, (state, action) => {
      state.status = "failed";
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
