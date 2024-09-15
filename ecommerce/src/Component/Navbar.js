import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="bg-blue-600">
        <div className="flex pt-2 md:space-x-16 max-md:justify-between">
          <div className="md:ml-16 max-md:ml-5">
            <p className="text-white text-2xl font-bold">Filpkart</p>
            <div className="flex space-x-1">
              <p className="text-white flex">Explore</p>
              <p className="flex text-yellow-500"> Plus </p>
              <img
                src="img/plus-brand-bc165b.svg"
                alt="fkplus"
                className="w-4"
              />
            </div>
          </div>
          <div className="max-md:hidden md:block mt-2">
            <input
              type="text"
              placeholder="Seacrch for Product, Brands and More"
              className="bg-slate-100 w-96 h-10 p-3"
            />
          </div>
          <div className="flex md:justify-center md:items-center flex-col md:flex-row md:space-x-16 max-md:mr-5">
            <div className="flex space-x-2">
              <img src="img/store-9eeae2.svg" alt="store" className="w-5" />
              <p className="text-white font-semibold">
                <Link to="/">Shop Now</Link>
              </p>
            </div>
            <div className="flex space-x-2">
              <img src="img/profile-815786.svg" alt="profile" className="w-5" />
              <p className="text-white font-semibold">Sign in</p>
            </div>
            <div className="flex space-x-2">
              <img
                src="img/header_cart-eed150.svg"
                alt="cart"
                className="w-5"
              />
              <p className=" text-white font-semibold hover:text-white">
                <Link to="/addtocart">Cart</Link>
              </p>
            </div>
          </div>
          <div className="flex max-md:hidden md:block">
            <img
              src="img/header_3verticalDots-ea7819.svg"
              alt="dots"
              className="w-6 md:mt-4"
            />
          </div>
        </div>
        <div className="py-2">
          <div className="md:hidden flex justify-center mx-3">
            <input
              type="text"
              placeholder="Seacrch for Product, Brands and More"
              className="bg-slate-100 w-96 h-10 p-3"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
