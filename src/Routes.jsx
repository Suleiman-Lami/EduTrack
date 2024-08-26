import React from 'react'
import Layout from './Layout/Layout'
import Landing from './Pages/LandingPage/Landing'
import About from './Pages/About/About'
import {createBrowserRouter} from 'react-router-dom'
import Contact from './Pages/Contact/Contact'
import Login from './Components/Auth/Login/Login'
import SignUp from './Components/Auth/SignUp/SignUp'

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
        ]
    },
    {
        path: 'Login',
        element: <Login/>
    },
    {
        path: 'signUp',
        element: <SignUp/>
    },

])
 

export default Routes