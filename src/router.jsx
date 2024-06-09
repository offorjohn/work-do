import { createBrowserRouter } from "react-router-dom"

import Dashboard from "./views/Dashboard";
import Login from "./views/Login";
import Signup from "./views/Signup";
import Project from "./views/Project"
import Task from "./views/Task";
import { GuestLayout } from "./components/GuestLayout";
import { DefaultLayout } from "./components/DefaultLayout";


const router = createBrowserRouter([

   {
      path: "/",
      element: <DefaultLayout/>,
      children: [
         {
            path: '/',
            element: <Dashboard />
         }, 
       
         { 
            path: 'projects',
            element: <Project/>
      
         },
         { 
            path: 'task',
            element: <Task/>
      
         },
      ],
   },
  
   {
      path: '/',
      element: <GuestLayout />,
      children: [
         {
            path: '/login',
            element: <Login />
         },
         {
            path: '/signup',
            element: <Signup />
         },
      ]
   }



])

export default router;