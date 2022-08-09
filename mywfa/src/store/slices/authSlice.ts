import { createSlice } from "@reduxjs/toolkit";

interface AuthState {
  email: null | string;
  token: null | string;
  id: null | string;
}

const initialState: AuthState = {
  email: null,
  token: null,
  id: null,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
      sessionStorage.setItem("id", state.id as string);
      sessionStorage.setItem("token", state.token as string);
      sessionStorage.setItem("email", state.email as string);
    },
    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
      sessionStorage.removeItem("id");
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("email");
    },
  },
});

export const { setUser, removeUser } = authSlice.actions;
export default authSlice.reducer;
