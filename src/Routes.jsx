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
import Verify from './Components/Auth/SignUp/Verify'
import Verifyteacher from './Components/Auth/SignUp/Verifyteacher'
import Verifystudent from './Components/Auth/SignUp/Verifystudent'
import Reset from './Components/Auth/Login/Forgotpassword/Reset'
import Suspend from './Pages/adminPages/allTeachers/Suspend'
import Adstudentprofile from './Pages/adminPages/allStudent/StudentProfile/Adstudentprofile'
import Adteacherprofile from './Dashboards/Teacher/teacherProfile/Adteacherprofile'
import TeacherReset from './Components/Auth/Login/Forgotpassword/TeacherReset'
import Teacherforgot from './Components/Auth/Login/Forgotpassword/Teacherforgot'

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
      { path: 'admin/:schoolID', element: <AdminPage /> },
      { path: 'teachers', element: <Allteachers /> },
      { path: 'adminEdit/:schoolID', element: <AdmidEdit /> },
      { path: 'AdminProfile/:schoolID', element: <Adminprofile /> },
      { path: 'staffs', element: <TeacherSignUp /> },
      { path: 'student', element: <Allstudent /> },
      { path: 'Suspend', element: <Suspend/> },
      { path: 'student-onboard', element: <StudentOnboard /> },
      { path: 'childProfile/:studentID', element: <Adstudentprofile /> },
      { path: 'staffProfile/:teacherID', element: <Adteacherprofile /> },
    ]
  },
  {

    element: <Teacher />,
    children: [
      { path: 'teacher/:teacherID', element: <Staffdashboard /> },
      { path: 'studentInfo/:studentID', element: <Adstudentprofile /> },
      { path: 'profile/:teacherID', element: <Teacherprofile /> },
      { path: 'Editprofile/:teacherID', element: <TeacherEdit /> },
      { path: 'Allstudent', element: <Allstudent /> },
      { path: 'onboard', element: <StudentOnboard /> },
    ]
  },
  {
    element: <Student />,
    children: [
      { path: 'StudentProfile/:studentID', element: <Studentprofile /> },
      { path: 'studentEdit', element: <StudentEdit /> },
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
    path: '/teacherForgottenpassword',
    element: <Teacherforgot/>
  },
  {
    path: '/signup',
    element: <SignUp />
  },
  {
    path: '/restpassword/:token',
    element: < Reset />
  },
  {
    path: '/teacherReset/:token',
    element: < TeacherReset/>
  },
  {
    path: '/verify/:token',
    element: <Verify />
  },
  {
    path: '/verifyteacher/:token',
    element: <Verifyteacher />
  },
  {
    path: '/verifystudent/:token',
    element: <Verifystudent/>
  },
])

export default Routes
