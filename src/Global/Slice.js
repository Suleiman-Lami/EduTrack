import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    schoolInfo: { isLoggedIn: false }, 
    teacherInfo: { isLoggedIn: false }, 
    studentInfo: { isLoggedIn: false }, 
  },
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'eduTrack',
  initialState,
  reducers: {
    adminLogin: (state, action) => {
      const { role, ...adminInfo } = action.payload;
      if (role === 'admin') {
        state.user.schoolInfo = { ...adminInfo, role, isLoggedIn: true };
        state.isLoggedIn = true;
      }
    },

    teacherLogin: (state, action) => {
      const { role, ...teacherInfo } = action.payload;
      if (role === 'teacher') {
        state.user.teacherInfo = { ...teacherInfo, role, isLoggedIn: true };
        state.isLoggedIn = true;
      }
    },

    studentLogin: (state, action) => {
      const { role, ...studentInfo } = action.payload;
      if (role === 'student') {
        state.user.studentInfo = { ...studentInfo, role, isLoggedIn: true };
        state.isLoggedIn = true;
      }
    },

    logout: (state) => {
      state.user.schoolInfo.isLoggedIn = false;
      state.user.teacherInfo.isLoggedIn = false;
      state.user.studentInfo.isLoggedIn = false;
      state.isLoggedIn = false;
    },
  },
});

export const { adminLogin, teacherLogin, studentLogin, logout } = authSlice.actions;
export default authSlice.reducer;
