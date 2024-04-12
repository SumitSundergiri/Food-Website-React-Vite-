import React from "react";
import { topPicks } from "../Data/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const TopPicks = ({handleAdd}) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>

      <div className="w-[88%] mx-auto">
        <h2 className="font-bold text-3xl pl-1">What's on Your mind?</h2>

        <div className=" py-20 ">

        <Slider{...settings} className=""> 
          {topPicks.map((item) => (
            <div className="bg-white rounded-md" key={item.id}>
              <div className="flex justify-center items-center rounded-t-xl ">
                <img
                  src={item.img}
                  alt=""
                  className="w-[150px] h-[150px] object-cover rounded-full"
                ></img>
              </div>

              <div className="flex flex-col gap-2 p-4 justify-center items-center">
                <p className="font-semibold uppercase text-xl">{item.title}</p>
                <p className="font-semibold uppercase text-xl">{item.price}</p>
                <button className="bg-black w-[90px] mx-auto rounded-md my-2 py-[10px] text-white text-[15px]  hover:text-[yellow] font-semibold" onClick={handleAdd}>
                  Add to cart
                </button>
              </div>
            </div>
          ))}
          </Slider>

        </div>
      </div>

      
    </>
  );
};
export default TopPicks;
