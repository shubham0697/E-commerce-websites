import React from "react";

const TopBar = () => {
  return (
    <>
      <div className="bg-gray-200 py-2 px-4">
        <div className="bg-white flex flex-col lg:flex-row px-3 md:px-5 py-4 text-center lg:space-x-16">
          <div className="flex justify-between lg:space-x-16">
            <div className="">
              <img src="img/1.png" className="w-16" alt="grocery" />
              <p className="font-semibold">Grocery</p>
            </div>
            <div>
              <img src="img/2.png" className="w-16" alt="mobiles" />
              <p className="font-semibold">Mobiles</p>
            </div>
            <div>
              <img src="img/3.png" className="w-16" alt="fashion" />
              <p className="font-semibold">Fashion</p>
            </div>
          </div>

          <div className="flex justify-between lg:space-x-16">
            <div>
              <img src="img/4.png" className="w-16" alt="electronices" />
              <p className="font-semibold">Electronices</p>
            </div>  
            <div>
              <img
                src="img/5.jpg"
                className="w-16 ml-5 md:ml-1"
                alt="furniture"
              />
              <p className="font-semibold">Home & Furniture</p>
            </div>
            <div>
              <img src="img/6.png" className="w-16 ml-3" alt="appliances" />
              <p className="font-semibold">Appliances</p>
            </div>
          </div>

          <div className="flex justify-between lg:space-x-16">
            <div>
              <img src="img/8.png" className="w-16" alt="beauty" />
              <p className="font-semibold">Beauty & Toys</p>
            </div>
            <div>
              <img src="img/7.png" className="w-16 ml-2" alt="travel" />
              <p className="font-semibold">Tour & Travel</p>
            </div>
            <div>
              <img
                src="img/9.png"
                className="w-16 ml-6 md:ml-3"
                alt="wheelers"
              />
              <p className="font-semibold">Two Wheelers</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBar;
