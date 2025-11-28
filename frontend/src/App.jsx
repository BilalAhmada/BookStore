import React from "react";
import Home from "./home/Home.jsx";
import Course from "./components/Course.jsx";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses.jsx";
import Signup from "./components/Signup.jsx";
import ContactUs from './Contactus/ContactUs.jsx'
import { Toaster } from 'react-hot-toast';
import {useAuth} from "./context/AuthProvider.jsx";
const App = () => {
  const [authUser,setAuthUser]=useAuth();
console.log(authUser)
  return (
    <>
      <div  className='dark:bg-slate-900 dark:text-white'> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={authUser?<Courses />:<Navigate to = "/signup" />}/>
        <Route path="/signup" element={<Signup />} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
      <Toaster />
      </div>
      
    </>
  );
};

export default App;
