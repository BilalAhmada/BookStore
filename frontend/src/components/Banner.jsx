import React from "react";
import book from "../assets/book.png";
const Banner = () => {
  return (
    <>
      <div className="max wd-screen-2xl container mt-15 md:my-0 my-19 mx-auto md:px-10 py-4 flex  flex-col md:flex-row">
        <div className=" w-full md:w-1/2 mt-12  md:mt-32 order-2 md:order-1">
          <div className="space-y-12 mb-16">
            <h1 className="p-3 md:p-0 text-4xl font-bold">
              Hello, welcome here to learn something{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p className="p-3 md:p-0 text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
              error eius modi cumque expedita animi optio consequatur aut quam .
            </p>
            <div className="flex items-center ">
              <label className="input validator outline-none m-3 md:m-0 dark:bg-slate-900 dark:text-white">
                <svg
                  className="h-[1em] opacity-50"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <g
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="2.5"
                    fill="none"
                    stroke="currentColor"
                  >
                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </g>
                </svg>
                <input type="email" placeholder="mail@site.com" required />
              </label>
              <div className="validator-hint hidden">
                Enter valid email address
              </div>
              <button className="btn m-3 btn-secondary">Get Started</button>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 justify-center flex items-center order-1">
          <img src={book} alt="book" className="animate-float w-100 h-100" />
        </div>
      </div>
    </>
  );
};

export default Banner;
