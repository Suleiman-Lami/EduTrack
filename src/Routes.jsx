import React from 'react'
import Layout from './Layout/Layout'
import Landing from './Pages/LandingPage/Landing'
import About from './Pages/About/About'
import { createHashRouter } from 'react-router-dom'
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
import TeacherEdit from './Dashboards/Teacher/teacherProfile/TeacherEdit'
import Adminprofile from './Dashboards/Admin/adminProfile/Adminprofile'
import Notify from './Dashboards/Notifications/Notify'
import Studentprofile from './Pages/adminPages/allStudent/StudentProfile/Studentprofile'
import StudentEdit from './Pages/adminPages/allStudent/StudentProfile/StudentEdit'
import Student from './Dashboards/Student/Student'
import AdmidEdit from './Dashboards/Admin/adminProfile/AdmidEdit'
import Features from './Pages/Features/Features'
import Pricing from './Pages/Pricing/Pricing'
import StudentLogin from './Components/Auth/Login/StudentLogin'
import Teacherlog from './Components/Auth/Login/Teacherlog'

const Routes = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Landing /> },
      { path: 'about', element: <About /> },
      { path: 'contact', element: <Contact /> },
      { path: 'thanks', element: <Thanks /> },
      { path: 'Features', element: <Features/> },
      { path: 'Pricing', element: <Pricing/> },
    ]
  },
  {
    element: <Admin />, 
    children: [
      { path: 'admin', element: <AdminPage /> },
      { path: 'teachers', element: <Allteachers /> },
      { path: 'adminEdit', element: <AdmidEdit /> },
      { path: 'AdminProfile', element: <Adminprofile /> },
      { path: 'staffs', element: <TeacherSignUp /> },
      { path: 'students', element: <Allstudent /> },
      { path: 'student-onboard', element: <StudentOnboard /> },
      { path: 'childProfile', element: <Studentprofile /> },
      { path: 'staffProfile/:teacherID', element: <Teacherprofile /> },
    ]
  },
  {

    element: <Teacher />, 
    children: [
      { path: 'teacher', element: <Staffdashboard /> },
      { path: 'childProfile', element: <Studentprofile /> },
      { path: 'profile', element: <Teacherprofile /> },
      { path: 'Editprofile', element: <TeacherEdit /> },
      { path: 'Allstudent', element: <Allstudent /> },
      { path: 'onboard', element: <StudentOnboard /> },
    ]
  },
  {
    // path: '/student',
    element: <Student />,
    children: [
      { path: 'StudentProfile', element: <Studentprofile /> },
      { path: 'studentEdit', element: <StudentEdit /> },
      { path: 'students', element: <Allstudent /> },
    ]
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/teacherlogin',
    element: <Teacherlog />
  },
  {
    path: '/studentLogin',
    element: <StudentLogin/>
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
