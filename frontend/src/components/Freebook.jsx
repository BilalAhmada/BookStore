import React, {useState,useEffect} from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
// import list from "../assets/list.json";
import Cards from "./Cards.jsx";
import axios from 'axios';
const Freebook = () => {
   const [book,setBook]=useState([])
   useEffect(()=>{
    const getBookbook=async()=>{
      try{
        const resp = await axios.get("http://localhost:4001/book")
        const data=resp.data.filter((data)=> data.category==="Free")
        console.log(data)
        setBook(data)
      }catch(err){
       console.log(err)
      }
    }
    getBookbook()
   },[])

  // const filterData = list.filter((data) => data.category === "Free");
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  // console.log(filterData);
  return (
    <>
      <div className="max wd-screen-2xl container mx-auto md:px-10 px-4 ">
        <div>
          <h1 className="font-semibold text-xl pb-2 ">Free Offered Books</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
            aspernatur velit maxime. Quos deserunt suscipit voluptas eum
            perspiciatis dolorum voluptatum.
          </p>
        </div>
        <div className="slider-container">
          <Slider {...settings}>
            {book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Freebook;
