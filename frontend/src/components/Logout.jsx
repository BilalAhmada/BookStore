import React from 'react'
import { toast } from 'react-hot-toast'
import { useAuth } from '../context/AuthProvider.jsx'
const Logout = () => {
    const [authUser,setAuthUser]=useAuth();
   const handleLogout = () => {
  try {
    setAuthUser(null);      // ✔️ reset user in context
    localStorage.removeItem("users");   // ✔️ correct key

    toast.success("Logout Successfully");
    
    setTimeout(() => {
      window.location.reload();
    }, 1000);

  } catch (error) {
    console.log(error);
    toast.error("Failed to logout");
  }
};

  return (
    <div>
      <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
      onClick={handleLogout}
      >Logout</button>
    </div>
  )
}
export default Logout
