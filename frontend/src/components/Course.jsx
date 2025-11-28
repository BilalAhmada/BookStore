import React from "react";
import {useEffect,useState} from "react";
// import list from "../assets/list.json";
import Cards from "./Cards.jsx";
import { Link } from "react-router-dom";
import axios from "axios";
const Course = () => {
  const [book,setBook]=useState([]);
  useEffect(()=>{
     const getBook= async()=>{
      try{
      const resp = await axios.get("http://localhost:4001/book");
      console.log(resp.data);
      setBook(resp.data);
      }catch(err){
            console.log(err);
      }
     };
     getBook();
  },[]);

  return (
    <>
      <div className="max wd-screen-2xl container mx-auto md:px-10">
        <div className="mt-0 pt-40 px-5 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're <span className="text-pink-500">Delighted</span> to have you{" "}
            <span className="text-pink-500">Here</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
            quibusdam officia voluptatum nobis, totam quis ducimus reiciendis
            neque doloremque! Repellat dignissimos error fuga animi! Dolorem
            odio corrupti aspernatur voluptatem inventore!z
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 mt-4 rounded-md hover:bg-pink-700 duration-200">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5 px-4 md:px-0">
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Course;
