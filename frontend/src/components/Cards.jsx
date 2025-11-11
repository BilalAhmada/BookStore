import React from "react";

const Cards = ({ item }) => {
  return (
    <>
      <div className="mt-4 my-4 flex justify-center">
        <div className="card bg-base-100 w-full sm:w-80 md:w-96 shadow-lg rounded-lg transition-all duration-300 ease-in-out hover:scale-105">
          <figure>
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-56 object-cover rounded-t-lg"
            />
          </figure>
          <div className="card-body dark:bg-slate-900 dark:text-white dark:border rounded-b-lg bg-gray-50">
            <h2 className="card-title flex justify-between items-center">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              {item.title}
            </p>
            <div className="card-actions flex justify-between items-center mt-3">
              <div className="badge badge-outline text-sm">${item.price}</div>
              <button className="cursor-pointer px-3 py-1 text-sm rounded-lg border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
