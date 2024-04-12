import React, { useEffect, useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

const Hero = () => {
  const imgData = [
    {
      url: "https://img.freepik.com/free-photo/top-view-circular-frame-with-fast-food-peppers_23-2148308861.jpg?w=740&t=st=1710405598~exp=1710406198~hmac=8b06940d53538ac1b4362e29e69fb29adcdd09c06c36122b54ccdd80c169daa7",
    },

    {
      url: "https://img.freepik.com/premium-psd/top-view-breakfast-food-with-cereals-fruits-croissants_23-2148568997.jpg?w=740",
    },

    {
      url: "https://img.freepik.com/free-vector/pizza-menu-chalkboard-background_1284-11715.jpg?w=740&t=st=1710406248~exp=1710406848~hmac=cdc380ee9c36df0d31217be7e871bd9b19d33564e9698e49ee746932866a7eac",
    },
  ];

  const [slider, setSlider] = useState(1);

  const handleMinus = () => {
    setSlider(slider == imgData.length - 1 ? 0 : slider + 1);
  };

  const handlePlus = () => {
    setSlider(slider === 0 ? imgData.length - 1 : slider - 1);
  };

  useEffect(() => {
    const clearTime = setInterval(() => {
      handlePlus();

      return () => clearInterval(clearTime);
    }, 2000);
  }, [slider]);

  return (
    <>
      <div className="mt-[100px]">
        <div className="w-[90%] mx-auto h-[80vh] my-5 relative">
          {imgData.map((item, index) => (
            <div
              key={index}
              className={`${slider === index ? "block" : "hidden"}`}
            >
              <img
                src={item.url}
                alt=""
                className="w-full h-[80vh] rounded-2xl object-cover "
              />
            </div>
          ))}
          {/*<img src={imgData[slider].url} style={{width:'100%' , height:'540px'}} ></img> */}
        </div>

        <div className="w-[90%] mx-auto h-[80vh] rounded-2xl opacity-60 absolute bg-black top-[18%] md:top-[15%] left-[5%] ">

          <div className="absolute flex w-full text-center top-[41%] mx-auto justify-center text-[30px] text-white font-bold">
            <p> Welcome to World of Tasty Food </p>
          </div>

        </div>

        <div className="flex w-[90%] justify-between px-15 absolute top-[50%] left-[5%] text-white">
          <FaAngleLeft
            size={35}
            onClick={handleMinus}
            className=" cursor-pointer"
          />
          <FaAngleRight
            size={35}
            onClick={handleMinus}
            className=" cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
