import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  isLoggedIn: false,
  schoolInfo: {},
  loading: false,
  error: null,
  studentInfo: {},
  staffInfo: {},
};

const authSlice = createSlice({
  name: 'eduTrack',
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    schoolSignUp: (state, action) => {
      state.schoolInfo = action.payload;
    },
    staffSignUp: (state, action) => {
      state.staffInfo = action.payload;
    },
    studentSignUp: (state, action) => {
      state.studentInfo = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
});

export const { loginRequest,staffSignUp,studentSignUp, loginSuccess, loginFailure, schoolSignUp, logout } = authSlice.actions;
export default authSlice.reducer;
