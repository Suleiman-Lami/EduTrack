import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    schoolInfo: { isLoggedIn: false }, // Track the admin login status here
    teacherInfo: { isLoggedIn: false }, // Track the teacher login status here
    studentInfo: { isLoggedIn: false }, // Track the student login status here
  },
  isLoggedIn: false,
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
    
      // Include role in each info object along with user information
      const userDataWithRole = { ...userInfo, role, isLoggedIn: true };
    
      // Store user info based on role type
      if (role === 'admin') {
        state.user.schoolInfo = userDataWithRole; // Store admin info with role
      } else if (role === 'teacher') {
        state.user.teacherInfo = userDataWithRole; // Store teacher info with role
      } else if (role === 'student') {
        state.user.studentInfo = userDataWithRole; // Store student info with role
      }
    },

    // General logout function that only toggles the main isLoggedIn status
    logout: (state) => {
      if (state.user.schoolInfo.role === 'admin') {
        state.user.schoolInfo.isLoggedIn = false; 
        state.isLoggedIn = false;

      }
      else if (state.user.teacherInfo.role === 'teacher') {
        state.user.teacherInfo.isLoggedIn = false;
        state.isLoggedIn = false;
      }
      else if (state.user.studentInfo.role === 'student') { 
        state.user.studentInfo.isLoggedIn = false;
        state.isLoggedIn = false;

      }
      else{
        state.isLoggedIn = false;
      }
    },

    // Specific logout reducers for each role to manage specific states
    // adminLogout: (state) => {
    //   state.user.schoolInfo.isLoggedIn = false; 
    // },

    // teacherLogout: (state) => {
    //   state.user.teacherInfo.isLoggedIn = false; // Set teacher logged out
    // },

    // studentLogout: (state) => {
    //   state.user.studentInfo.isLoggedIn = false; // Set student logged out
    // },

    loginSuccess: (state, action) => {
      const { role } = action.payload;
      if (role === 'admin') {
        state.user.schoolInfo.isLoggedIn = true;
        state.isLoggedIn = true;

      } else if (role === 'teacher') {
        state.user.teacherInfo.isLoggedIn = true;
        state.isLoggedIn = true;

      } else if (role === 'student') {
        state.user.studentInfo.isLoggedIn = true;
        state.isLoggedIn = true;

      }
      state.isLoggedIn = true; 
    },
  },
});

export const { loginInfo, logout, adminLogout, teacherLogout, studentlogout, loginSuccess } = authSlice.actions;
export default authSlice.reducer;
