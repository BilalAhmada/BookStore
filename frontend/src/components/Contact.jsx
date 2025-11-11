import React from "react";
import { useForm } from "react-hook-form";
const Contact = () => {
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
              Contact <span className="text-pink-500">Us!</span>
            </h1>
          </div>

          {/* Form Section */}
          <div className="card bg-base-100 w-full max-w-md shrink-0 shadow-2xl dark:bg-slate-900 dark:text-white dark:shadow-slate-700 border border-gray-300 dark:border-gray-700">
            <div className="card-body relative">
              <form onSubmit={handleSubmit(onSubmit)}>
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

                {/* Message*/}
                <div className="mt-4">
                  <label className="label">Message</label>
                  <textarea
                    type="message"
                    placeholder="Type Your Message"
                    className="input w-full"
                    {...register("message", { required: true })}
                  />
                  {errors.message && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col md:flex-row justify-between items-center mt-6 gap-3">
                  <button
                    type="submit"
                    className="bg-pink-500 rounded-lg p-2 hover:bg-pink-900 duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
