import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getUserList = createAsyncThunk(
  "user/getUserList",
  async (sortItem) => {
    const url = sortItem
      ? `http://localhost:3000/user?_sort=${sortItem}&_order=asc`
      : "http://localhost:3000/user";

    const response = await axios.get(url);
    // console.log("Response:", response.data);
    return response.data;
  },
);

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
