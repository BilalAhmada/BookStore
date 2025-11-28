import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
const Signup = () => {
  const location=useLocation(
  )
  const from=location.state.from.pathname||'/'
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:4001/user/signup", userInfo)
      .then((res) => {
        if (res.data) {
          toast.success("Signup Successfully");
          Navigate
        }
        localStorage.setItem("users", JSON.stringify(res.data.user));
      })
      .catch((err) => {
        toast.error("signup failed " + err.response.data.message);
      });
  };

  return (
    <>
      <div className="hero bg-base-900 min-h-screen flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-4xl">
          <div className="text-center lg:text-left lg:w-1/2 px-4">
            <h1 className="text-5xl font-bold">
              Signup <span className="text-pink-500">now!</span>
            </h1>
            <p className="py-6">
              Join us and start managing your account easily.
            </p>
          </div>

          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl dark:bg-slate-900 dark:text-white dark:shadow-slate-700 border">
            <div className="card-body relative">

              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              {/* Signup Form */}
              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="font-bold text-lg text-center">Signup</h3>

                <div className="mt-4">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="input w-full"
                    {...register("fullname", { required: true })}
                  />
                  {errors.fullname && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="mt-4">
                  <label className="label">Email</label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="input w-full"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="mt-4">
                  <label className="label">Password</label>
                  <input
                    type="password"
                    placeholder="Enter Your Password"
                    className="input w-full"
                    {...register("password", { required: true })}
                  />
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-3">
                  <button className="bg-pink-500 rounded-lg p-2 hover:bg-pink-900 duration-300">
                    Signup
                  </button>

                  <p className="text-center md:text-left">
                    Already got an account?{" "}
                    <button
                      type="button"
                      className="underline text-blue-500"
                      onClick={() =>
                        document.getElementById("my_modal_3")?.showModal()
                      }
                    >
                      Login
                    </button>
                  </p>
                </div>
              </form>
            </div>
          </div>

          {/* Login modal must be placed OUTSIDE the <p> and <form> */}
          <Login />
        </div>
      </div>
    </>
  );
};

export default Signup;
