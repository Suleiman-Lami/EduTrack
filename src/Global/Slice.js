import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    schoolInfo: {},
    teacherInfo: {},
    studentInfo: {},
  },
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
    loginInfo: (state, action) => {
      const { role, ...userInfo } = action.payload;

      if (role === 'admin') {
        state.user.schoolInfo = action.payload;
      } else if (role === 'teacher') {
        state.user.teacherInfo = action.payload;
      } else {
        state.user.studentInfo = action.payload;
      }
    },

    logout: (state) => {
      state.user.schoolInfo.isLoggedIn = false;
      state.user.schoolInfo = {};
      state.isLoggedIn = false;
    },
    teacherlogout: (state) => {
      state.user.teacherInfo.isLoggedIn = false;
      state.user.teacherInfo = {};
      state.isLoggedIn = false;
    },
    studentlogout: (state) => {
      state.user.studentInfo.isLoggedIn = false;
      state.user.studentInfo = {};
      state.isLoggedIn = false;
    },
    
    loginSuccess: (state, action) => {
      const { role } = action.payload;
      if (role === 'admin') {
        state.user.schoolInfo.isLoggedIn = true;
      } else if (role === 'teacher') {
        state.user.teacherInfo.isLoggedIn = true;
      } else if (role === 'student') {
        state.user.studentInfo.isLoggedIn = true;
      }
      
      state.isLoggedIn = true; 
    },
  },
});

export const { loginInfo, logout, teacherlogout, studentlogout, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
