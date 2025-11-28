import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"
import axios from "axios";
import { toast } from "react-hot-toast";
const Login = () => {
    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit =async (data) => {
     const userInfo = {
          
          email: data.email,
          password: data.password,
        };
        await axios.post("http://localhost:4001/user/login",userInfo).then((res)=>{
          console.log(res.data);
          if(res.data){
            toast.success('Login Successfully');
            document.getElementById("my_modal_3").close();
            setTimeout(() => {
              localStorage.setItem("users",JSON.stringify(res.data.user));
              window.location.reload()
            },1500)
          }
        }).catch((err)=>{
        console.log(err)
        toast.error(err.response.data.message);
        setTimeout(() => {
        },3000)
  })
  };
  return (
    <>
      <dialog id="my_modal_3" className="modal ">
        <div className="modal-box dark:bg-slate-900 dark:text-white">
             <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>
              ✕
            </button>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}
           
          
          <h3 className="font-bold text-lg">Login</h3>
          <div className="mt-4 space-y-2">
            <span>Email</span>
            <br />
            <input
              type="email"
              placeholder="Eter Your Email"
              className="w-80 px-3 py-1 rounded-md outline"
              {...register("email", { required: true })}
            />
            <br />
             {errors.email && <span className="text-red-500" >This field is required</span>}
          </div>
          <div className="mt-4 space-y-2">
            <span>Password</span>
            <br />
            <input
              type="text"
              placeholder="Eter Your Password"
              className="w-80 px-3 py-1 rounded-md outline"
              {...register("password", { required: true })}
            />
            <br />
             {errors.password && <span className="text-red-500" >This field is required</span>}
          </div>
          <div className="flex justify-around mt-4">
            <button className="bg-pink-500 text-white px-2 cursor-pointer py-1 rounded-md hover:bg-pink-700 duration-300">Login</button>
            <p>Not Registered? <Link to='/signup' className="underline text-blue-500">Signup</Link></p>
          </div>
          </form>
        </div>
        
      </dialog>
    </>
  );
};

export default Login;
