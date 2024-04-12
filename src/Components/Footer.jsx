import React from "react";

const Footer = () => {
    return (
      <>
      <div className="w-full bg-black text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 py-10 pl-10 ">

<div>
    <h2 className="text-[20px] md:text-[25px] font-bold mb-3">Yum<span className="text-[#f1c40f]">Food</span></h2>
    <p className="text-[15px] md:text-[18px] text-[gray] mb-3">© 2023 Bundl Technologies Pvt. Ltd"</p>
</div>

<div>
<h2 className="text-[20px] md:text-[25px] font-bold mb-3">Company</h2>
<p className="text-[15px] md:text-[18px] text-[gray] mb-3">About</p>
<p className="text-[15px] md:text-[18px] text-[gray] mb-3" >Carrers</p>
<p className="text-[15px] md:text-[18px] text-[gray] mb-3">Team</p>
<p className="text-[15px] md:text-[18px] text-[gray] mb-3">Instamart</p>
</div> 
<div>
<h2 className="text-[20px] md:text-[25px] font-bold mb-3">Contact us</h2>
    <p className="text-[15px] md:text-[18px] text-[gray] mb-3">Ride with us</p>
    <p className="text-[15px] md:text-[18px] text-[gray] mb-3">Partner with us</p>
    <p className="text-[15px] md:text-[18px] text-[gray] mb-3">Help & Support us</p>
</div>

<div>
<h2 className="text-[20px] md:text-[25px] font-bold mb-3">We deliver to:</h2>
<p className="text-[15px] text-[gray] mb-3">Bengaluru</p>
<p className="text-[15px] text-[gray] mb-3">Hyderabad</p>
<p className="text-[15px] text-[gray] mb-3">MUmbai</p>
<p className="text-[15px] text-[gray] mb-3">Pune</p>
<p className="text-[15px] text-[gray] mb-3">Delhi</p>
<p className="text-[15px] text-[gray] mb-3">Chennai</p>
</div>

        </div>
      </div>
      </>
    )
}

export default Footer;