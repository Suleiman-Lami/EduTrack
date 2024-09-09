import React from 'react'
import Layout from './Layout/Layout'
import Landing from './Pages/LandingPage/Landing'
import About from './Pages/About/About'
import { createBrowserRouter } from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import Login from './Components/Auth/Login/Login'
import SignUp from './Components/Auth/SignUp/adminSignUp/AdminsignUp'
import Thanks from './Pages/Contact/Thanks'
import TeacherSignUp from './Components/Auth/SignUp/Teacher/TeacherSignUp'
import StudentOnboard from './Components/Auth/SignUp/Student/StudentOnboard'
import Forgot from './Components/Auth/Login/Forgotpassword/Forgot'
import Admin from './Dashboards/Admin/Admin'
import Allteachers from './Pages/adminPages/allTeachers/Allteachers'
import Allstudent from './Pages/adminPages/allStudent/Allstudent'
import Teacher from './Dashboards/Teacher/Teacher'
import Staffdashboard from './Dashboards/Teacher/staffDashboard/Staffdashboard'
import AdminPage from './Dashboards/Admin/AdminPage'
import Teacherprofile from './Dashboards/Teacher/teacherProfile/Teacherprofile'
import Adminprofile from './Dashboards/Admin/adminProfile/Adminprofile'
import Notify from './Dashboards/Notifications/Notify'

const Routes = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'thanks', element: <Thanks /> },
    ]
  },
  {
    // element: <React.Fragment />,
    children: [
      {
        path: 'admin',
        element: <Admin />, 
        children: [
          { path: '', element: <AdminPage /> },
          { path: 'teachers', element: <Allteachers /> },
          { path: 'adProfile', element: < Adminprofile/> },
          { path: 'staffs', element: <TeacherSignUp /> },
          { path: 'students', element: <Allstudent /> },
          { path: 'student-onboard', element: <StudentOnboard /> },
          { path: 'notifications', element: <Notify /> }
        ]
      },
     
      {
        element: <Teacher />, 
        children: [
          { path: 'teacher', element: <Staffdashboard /> },
          { path: 'profile', element: <Teacherprofile /> },
          { path: 'students', element: <Allstudent /> },
          { path: 'student-onboard', element: <StudentOnboard /> },
          { path: 'notifications', element: <Notify /> }
        ]
      }
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/forgottenpassword',
    element: <Forgot />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])

export default Routes
