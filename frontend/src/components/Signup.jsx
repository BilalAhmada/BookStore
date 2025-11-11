import React from "react";
import { Link } from "react-router-dom";
import Login from "./Login.jsx";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <>
      <div className="hero bg-base-900 min-h-screen flex items-center justify-center">
        <div className="hero-content flex-col lg:flex-row-reverse w-full max-w-4xl">
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2 px-4">
            <h1 className="text-5xl font-bold">
              Signup <span className="text-pink-500">now!</span>
            </h1>
            <p className="py-6">
              Join us and start managing your account easily. Fill in your
              details below to get started.
            </p>
          </div>

          {/* Form Section */}
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl dark:bg-slate-900 dark:text-white dark:shadow-slate-700 border border-gray-300 dark:border-gray-700">
            <div className="card-body relative">
              {/* Cross button */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>

              <form onSubmit={handleSubmit(onSubmit)}>
                <h3 className="font-bold text-lg text-center">Signup</h3>

                {/* Name */}
                <div className="mt-4">
                  <label className="label">Name</label>
                  <input
                    type="text"
                    placeholder="Enter Your Name"
                    className="input w-full"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                {/* Email */}
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

                {/* Password */}
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

                {/* Actions */}
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
                    <Login />
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
