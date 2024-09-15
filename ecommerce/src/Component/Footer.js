import React from "react";

const Footer = () => {
  return (
    <>
    <div className="">
      <div className="bg-[#212121] flex flex-col md:flex-row px-4 py-5 border-bottom">
        <div className="w-1/2 text-xs font-semibold flex flex-col md:flex-row justify-around">
          <div className="text-white">
            <p className="text-gray-500 mb-3">ABOUT</p>
            <p>Contact Us</p>
            <p>About Us</p>
            <p>Careers</p>
            <p>Filkart Stories</p>
            <p>Press</p>
            <p>Filpkart Wholesale</p>
            <p>Cleartrip</p>
            <p>Corporate Information</p>
          </div>

          <div className="text-white max-md:mt-5">
            <p className="text-gray-500 mb-3">HELP</p>
            <p>Payments</p>
            <p>Shipping</p>
            <p>Cancellation & Returns</p>
            <p>FAQ</p>
            <p>Report infringement</p>
          </div>

          <div className="text-white max-md:mt-5">
            <p className="text-gray-500 mb-3">CONSUMER POLICY</p>
            <p>Cancellation & Returns</p>
            <p>Terms Of Use</p>
            <p>Security</p>
            <p>Privacy</p>
            <p>Sitemap</p>
            <p>Grievance Redressal</p>
            <p>ERP Compliance</p>
          </div>

          <div className="text-white max-md:mt-5">
            <p className="text-gray-500 mb-3">SOCIAL</p>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>You Tube</p>
          </div>
        </div>

        <div className="w-1/2 text-xs font-semibold flex flex-col md:flex-row justify-around">
          <div style={{ borderLeft: "1px solid white" }}></div>
          <div className="text-white max-md:mt-5">
            <p className="text-gray-500 mb-3">Mail Us:</p>
            <p>Flipkart Internet Private Limited,</p>
            <p> Buildings Alyssa, Begonia &amp;</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahall Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
          </div>

          <div className="text-white max-md:mt-5">
            <p className="text-gray-500 mb-3"> Registered Office Address:</p>
            <p>Flipkart Internet Private Limited,</p>
            <p> Buildings Alyssa, Begonia &amp;</p>
            <p>Clove Embassy Tech Village,</p>
            <p>Outer Ring Road, Devarabeesanahall Village,</p>
            <p>Bengaluru, 560103,</p>
            <p>Karnataka, India</p>
            <p>CIN : U51109KA2012PTC066107</p>
            <p>
              Telephone:{" "}
              <a href="/" className="text-blue-500">
                044-45614700
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#212121] text-white text-xs font-semibold flex flex-col md:flex-row justify-around px-3 py-4">
        <div className="flex space-x-2">
          <img src="img/sell-image-9de8ef.svg" alt="sell" className="w-3" />
          <p>Become a Seller</p>
        </div>
        <div className="flex space-x-2 max-md:mt-1">
          <img
            src="img/advertise-image-866c0b.svg"
            alt="advertise"
            className="w-3"
          />
          <p>Advertise</p>
        </div>
        <div className="flex space-x-2 max-md:mt-1">
          <img
            src="img/gift-cards-image-d7ff24.svg"
            alt="giftcard"
            className="w-3"
          />
          <p>Gift Cards</p>
        </div>
        <div className="flex space-x-2 max-md:mt-1">
          <img
            src="img/help-centre-image-c4ace8.svg"
            alt="helpcentre"
            className="w-3"
          />
          <p>Help Center</p>
        </div>
        <p className="max-md:mt-1">
          © 2007-2023
          <span>Flipkart.com</span>
        </p>
        <img
          src="img/payment-method-c454fb.svg"
          className="max-md:mt-2"
          alt="payment"
        />
      </div>
      </div>
    </>
  );
};

export default Footer;
