import React from 'react'
import Layout from './Layout/Layout'
import Landing from './Pages/LandingPage/Landing'
import About from './Pages/About/About'
import {createBrowserRouter} from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import Login from './Components/Auth/Login/Login'
import SignUp from './Components/Auth/SignUp/adminSignUp/AdminsignUp'
import Thanks from './Pages/Contact/Thanks'
import TeacherSignUp from './Components/Auth/SignUp/Teacher/TeacherSignUp'
import StudentOnboard from './Components/Auth/SignUp/Student/StudentOnboard'
import Forgot from './Components/Auth/Login/Forgotpassword/Forgot'

const Routes =createBrowserRouter([
    
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Landing/>
            },
            {
                path: 'About',
                element: <About/>
            },
            {
                path: 'Contact',
                element: <Contact/>
            },
            {
                path: 'Thanks',
                element: <Thanks/>
            },
            {
                path: 'staffOnboarding',
                element: <TeacherSignUp/>
            },
            {
                path: 'studentOnboarding',
                element: <StudentOnboard/>
            },
        ]
    },
    {
        path: 'Login',
        element: <Login/>
    },
    {
        path: 'Forgottenpassword',
        element: <Forgot/>
    },
    {
        path: 'signUp',
        element: <SignUp/>
    },

])
 

export default Routes