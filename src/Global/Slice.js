import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {
    schoolInfo: {},
    teacherInfo: {}, 
    studentInfo: {}
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

      if (role === "admin") {
        state.user.schoolInfo = userInfo;
      } else if (role === 'teacher') {
        state.user.teacherInfo = userInfo;
      } else {
        state.user.studentInfo = userInfo;
      }
    },

    logout: (state) => {
      state.isLoggedIn = false;
      state.user = {};
    },
  },
});

export const { loginInfo, logout } = authSlice.actions;
export default authSlice.reducer;
