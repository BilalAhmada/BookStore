import React from "react";
import Home from "./home/Home.jsx";
import Course from "./components/Course.jsx";
import { Route, Routes } from "react-router-dom";
import Courses from "./Courses/Courses.jsx";
import Signup from "./components/Signup.jsx";
import ContactUs from './Contactus/ContactUs.jsx'
const App = () => {
  return (
    <>
      <div  className='dark:bg-slate-900 dark:text-white'> 
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Course" element={<Courses />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/contact' element={<ContactUs/>} />
      </Routes>
      </div>
      
    </>
  );
};

export default App;
