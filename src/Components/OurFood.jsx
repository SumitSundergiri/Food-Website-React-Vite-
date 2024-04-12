import React from "react";
import { mealData } from "../Data/data";

const OurFood = ({handleAdd}) => {
    return(
        <>
        <div className='w-[90%] mx-auto mt-[100px]'>


            <div >
                <h2 className='w-full text-[#fbc531] text-center font-bold text-3xl'>Our Food</h2>
            </div>

            <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 py-6 gap-2">
                { mealData.map((item) => (
                <div className="flex justify-center items-center flex-col">
                  <div>
                    <img src={item.image} alt="" className="object-cover w-[250px] h-[150px] rounder-lg"></img>
                  </div>

                  <div className="flex flex-col py-2 px-4 justify-center items-center">

                  <p className="font-semibold uppercase text-xl">{item.title}</p>
                <p className="font-semibold uppercase text-xl">{item.price}</p>
                <button className="bg-black w-[100px] mx-auto rounded-md my-2 py-[8px] text-white text-[13px]  hover:text-[yellow] font-semibold" onClick={handleAdd}>
                  Add to cart
                  </button>

                  </div>  
                </div>
                ))}
            </div>    
        </div>
        </>
    )
}

export default OurFood;