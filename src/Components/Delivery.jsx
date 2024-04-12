import React from 'react'
import Deliverylogo from "../assets/Deliverylogo.png";

const Delivery = () => {
    return (
       <>
         <div className='w-full py-16 px-4'>
            <h1 className='w-full text-[#fbc531] text-center font-bold text-2xl'>Quick Delivery App</h1>
            <div className='grid grid-cols-2 w-[80%] my-10 mx-auto'> 
                <img src={Deliverylogo} className='w-550px'></img>

                <div className='flex flex-col justify-center'>
                    <p className='font-bold text-[green] sm:text-[20px] md:text-[30px]'>Get the App</p>
                    <h2 className='font-bold py-5 sm:text-2x1 md:text-3xl lg:text-5xl'>The Fastest Food Delivery App in India</h2>

                    <button className='bg-black sm:w-[100px] md:w-[150px] rounded-md my-6 py-[15px] text-white sm:text-[10px] md:text-[20px]  hover:text-[yellow] font-semibold'>Get Started</button>
                </div>
            </div>
         </div>
       </>
    )
}

export default Delivery;