import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    schoolInfo: { isLoggedIn: false }, // Track the admin login status here
    teacherInfo: { isLoggedIn: false }, // Track the teacher login status here
    studentInfo: { isLoggedIn: false }, // Track the student login status here
  },
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'eduTrack',
  initialState,
  reducers: {
    loginInfo: (state, action) => {
      const { role, ...userInfo } = action.payload;
      state.isLoggedIn = true;

      if (role === 'admin') {
        state.user.schoolInfo = { ...userInfo, isLoggedIn: true }; // Set admin info and logged in
      } else if (role === 'teacher') {
        state.user.teacherInfo = { ...userInfo, isLoggedIn: true }; // Set teacher info and logged in
      } else if (role === 'student') {
        state.user.studentInfo = { ...userInfo, isLoggedIn: true }; // Set student info and logged in
      }
    },

    // General logout function that only toggles the main isLoggedIn status
    logout: (state) => {
      state.isLoggedIn = false; // Main login status
    },

    // Specific logout reducers for each role to manage specific states
    adminLogout: (state) => {
      state.user.schoolInfo.isLoggedIn = false; 
    },

    teacherLogout: (state) => {
      state.user.teacherInfo.isLoggedIn = false; // Set teacher logged out
    },

    studentLogout: (state) => {
      state.user.studentInfo.isLoggedIn = false; // Set student logged out
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

export const { loginInfo, logout, adminLogout, teacherLogout, studentlogout, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
