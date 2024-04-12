import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCrossMark } from "react-icons/gi";
import { Link } from "react-router-dom";

const Header = ({count}) => {
  const [sidenav, setsidenav] = useState(false);
  console.log(sidenav);

  return (
    <div className="fixed z-50 bg-white top-0 left-0 w-full">
    <div className="flex justify-between py-[20px] px-[25px] text-[20px] border-b font-semibold relative">
      <div>
        <Link to="/">
          <p className=" cursor-pointer">
            Yum<span className="text-[#f1c40f]">Food</span>
          </p>
        </Link>
      </div>

      {/* Home About Offers Sign in */}
      <div>
        <ul className="sm:flex gap-5 hidden cursor-pointer">
          {/* <li className="hover:text-[#f1c40f]">Home</li>
                <li className="hover:text-[#f1c40f]">About</li>
                <li className="hover:text-[#f1c40f]">Our Food</li>
                <li className="hover:text-[#f1c40f]">Sign in</li> */}

          <Link to="/">
            <li className="hover:text-[#f1c40f]">Home</li>
          </Link>
          <Link to="/aboutus">
            <li className="hover:text-[#f1c40f]">About</li>
          </Link>
          <Link to="/ourfood">
            {/* {count} */}
            <li className="hover:text-[#f1c40f]">Our Food</li>
          </Link>
          <Link to="/signin">
            <li className="hover:text-[#f1c40f]">Sign in</li>
          </Link>
        </ul>
      </div>

      {sidenav ? (
        <div className="bg-[#bdc3c7] w-[300px] absolute top-0 right-0 text-center h-[100vh] flex items-center justify-center z-20">
          {/* Cross functionality  */}
          <GiCrossMark
            size={30}
            className=" absolute top-3 right-2 cursor-pointer"
            onClick={() => setsidenav(!sidenav)}
          />

          <ul className="flex gap-12 cursor-pointer flex-col">
            {/* <li className="hover:text-[#f1c40f]">Home</li>
                        <li className="hover:text-[#f1c40f]">About</li>
                        <li className="hover:text-[#f1c40f]">Our Food</li>
                        <li className="hover:text-[#f1c40f]">Sign in</li> */}

            <Link to="/">
              <li className="hover:text-[#f1c40f] " onClick={() => setsidenav(!sidenav)}>Home</li>
            </Link>
            <Link to="/aboutus">
              <li className="hover:text-[#f1c40f]" onClick={() => setsidenav(!sidenav)}>About</li>
            </Link>
            <Link to="/ourfood">
              {/* {count} */}
              <li className="hover:text-[#f1c40f]"  onClick={() => setsidenav(!sidenav)}>Our Food</li>
            </Link>
            <Link to="/signin">
              <li className="hover:text-[#f1c40f]" onClick={() => setsidenav(!sidenav)}>Sign in</li>
            </Link>
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className="flex gap-5">
        <p>
          <GiHamburgerMenu
            size={30}
            className=" cursor-pointer block sm:hidden"
            onClick={() => setsidenav(!sidenav)}
          />
        </p>

        <p>
        {count}
          <FaShoppingCart size={30} />
        </p>
      </div>
    </div>
    </div>
  );
};

export default Header;
