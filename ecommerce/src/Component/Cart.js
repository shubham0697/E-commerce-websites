import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import TopBar from "./TopBar";
import CarouselSlider from "./Carousel";
import Deatils from "./Deatils";
import { CartContext } from "../Context/CartContext";
import Footer from "./Footer";

const Cart = () => {
  const [items, setItems] = useState([]);
  const [clickedItem, setClickedItem] = useState(null);

  const Product = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setItems(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    Product();
  }, []);

  const showFullTitle = (id) => {
    setClickedItem(clickedItem === id ? null : id);
  };

  const addToCart = useContext(CartContext);
  const dispatch = addToCart.dispatch;
  console.log(addToCart);

  return (
    <>
      <TopBar />
      <CarouselSlider />

      <div className="bg-gray-200 py-2 px-4">
        <div className="bg-white">
          <div className="px-2 py-3">
            <div className="py-3 px-4 flex justify-between">
              <h1 className="font-bold text-xl">Best of Product</h1>
              <img
                src="img/icons8-arrow-down.png"
                alt="icon"
                className="bg-blue-500 w-6 h-6 rounded-full px-1 py-1"
              />
            </div>
            <div className="grid grid-cols-5 items-center max-sm:grid-cols-2 max-lg:grid-cols-4 max-md:grid-cols-3 text-gray-600 pl-3">
              {items.map((product) => {
                product.quantity = 1;
                return (
                  <div
                    className="card w-[95%] h-[95%] bg-white max-w-2xl rounded shadow-sm "
                    key={product.id}
                  >
                    <div key={product.id} className="p-[12px] text-center">
                      <div className="flex justify-center items-center">
                        <img
                          src={product.image}
                          alt="product"
                          className="sm:w-48 sm:h-48 w-32 h-32"
                        />
                      </div>
                      <div className="px-2 py-3">
                        <p
                          className="cursor-pointer"
                          onClick={() => showFullTitle(product.id)}
                        >
                          {clickedItem === product.id
                            ? product.title
                            : product.title.slice(0, 20)}
                        </p>
                        <p className="font-bold">
                          ₹ {Math.floor(product.price * 72)} /-
                        </p>
                        <button
                          type="button"
                          className="bg-yellow-400 hover:bg-yellow-600 focus:ring-2 focus:ring-black px-2 py-1 mt-3 rounded text-white"
                          onClick={() =>
                            dispatch({ type: "ADD", payload: product })
                          }
                        >
                          🛒 Add To Cart
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* type data */}
      <div className="bg-gray-200 py-2 px-4 flex justify-between flex-col md:flex-row">
        <div className="bg-white">
          <div className="px-4 py-3">
            <div className="py-3 px-1 flex justify-between">
              <h1 className="font-bold text-xl">Best of Electronics</h1>
              <img
                src="img/icons8-arrow-down.png"
                alt="icon"
                className="bg-blue-500 w-6 h-6 rounded-full px-1 py-1"
              />
            </div>
            <div className="flex justify-center items-center flex-col md:flex-row md:space-x-5">
              <div className="flex space-x-2 md:space-x-5">
                <div className="card w-[95%] h-[100%] bg-white max-w-2xl rounded shadow-sm text-center border">
                  <div className="px-2 py-2 md:h-48">
                    <img
                      src="img/12.jpg"
                      alt="trimer"
                      className="w-32 h-32 sm:w-48 sm:h-48"
                    />
                  </div>
                  <div className="px-2 py-2">
                    <p>Best of Trimmers</p>
                    <p className="font-bold">From &#x20B9;399</p>
                    <button
                      type="button"
                      className="bg-yellow-400 hover-bg-slate-900 px-2 py-1 mt-3 rounded text-white"
                    >
                      🛒 Add To Cart
                    </button>
                  </div>
                </div>

                <div className="card w-[95%] h-[100%] bg-white max-w-2xl rounded shadow-sm text-center border">
                  <div className="px-4 py-2 md:h-48">
                    <img
                      src="img/13.jpeg"
                      alt="trimer"
                      className="mt-2 w-24 h-24 sm:w-40 sm:h-36 "
                    />
                  </div>
                  <div className="px-2 py-2">
                    <p>Top Selling Pendrive</p>
                    <p className="font-bold">From &#x20B9;429</p>
                    <button
                      type="button"
                      className="bg-yellow-400 hover-bg-slate-900 px-2 py-1 mt-3 rounded text-white"
                    >
                      🛒 Add To Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center space-x-2 md:space-x-5">
                <div className="card w-[95%] h-[100%] bg-white max-w-2xl rounded shadow-sm text-center border max-md:mt-4">
                  <div className="px-4 py-2 md:h-48">
                    <img
                      src="img/14.jpeg"
                      alt="trimer"
                      className="mt-2 w-24 h-24 sm:w-40 sm:h-36"
                    />
                  </div>
                  <div className="px-2 py-2">
                    <p>Top Mirrorless Cameras</p>
                    <p className="font-bold">Shop Now!</p>
                    <button
                      type="button"
                      className="bg-yellow-400 hover-bg-slate-900 px-2 py-1 mt-3 rounded text-white"
                    >
                      🛒 Add To Cart
                    </button>
                  </div>
                </div>

                <div className="card w-[95%] h-[100%] bg-white max-w-2xl rounded shadow-sm text-center border max-md:mt-4">
                  <div className="px-4 py-2 md:h-48">
                    <img
                      src="img/15.jpeg"
                      alt="trimer"
                      className="mt-2 w-24 h-24 sm:w-40 sm:h-36"
                    />
                  </div>
                  <div className="px-1 py-2">
                    <p>Wireless mouse & Keyboard</p>
                    <p className="font-bold">From &#x20B9;169</p>
                    <button
                      type="button"
                      className="bg-yellow-400 hover-bg-slate-900 px-2 py-1 mt-3 rounded text-white"
                    >
                      🛒 Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center max-md:mt-5">
          <img src="img/18.jpg" alt="people" className="h-[360px] w-60" />
        </div>
      </div>

      <div className="bg-gray-200 py-2 px-4 flex justify-between flex-col md:flex-row">
        <div className="bg-white">
          <div className="px-4 py-3">
            <div className="py-3 px-1 flex justify-between">
              <h1 className="font-bold text-xl">Beauty, Food, Toys & More</h1>
              <img
                src="img/icons8-arrow-down.png"
                alt="icon"
                className="bg-blue-500 w-6 h-6 rounded-full px-1 py-1"
              />
            </div>
            <div className="flex justify-center items-center flex-col md:flex-row md:space-x-4">
              <div className="flex justify-center items-center space-x-2 md:space-x-4">
                <div className="card w-[100%] h-[100%] bg-white max-w-2xl rounded shadow-sm text-center border">
                  <div className="px-2 py-2 md:h-48">
                    <img
                      src="img/19.jpeg"
                      alt="trimer"
                      className="ml-4 mt-1 w-24 h-24 sm:w-44 sm:h-36"
                    />
                  </div>
                  <div className="px-2 py-2">
                    <p>Tricycles & Rideons</p>
                    <p className="font-bold">Up to 70% Off</p>
                    <button
                      type="button"
                      className="bg-yellow-400 hover-bg-slate-900 px-2 py-1 mt-3 rounded text-white"
                    >
                      🛒 Add To Cart
                    </button>
                  </div>
                </div>

                <div className="card w-[100%] h-[100%] bg-white max-w-2xl rounded shadow-sm text-center border">
                  <div className="px-4 py-2 md:h-48">
                    <img
                      src="img/20.jpeg"
                      alt="trimer"
                      className="mt-2.5 w-24 h-28 sm:w-44 sm:h-36"
                    />
                  </div>
                  <div className="px-2 py-2">
                    <p>Soft Toys</p>
                    <p className="font-bold">Up to 70% Off</p>
                    <button
                      type="button"
                      className="bg-yellow-400 hover-bg-slate-900 px-2 py-1 mt-3 rounded text-white"
                    >
                      🛒 Add To Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex justify-center items-center space-x-2 md:space-x-4">
                <div className="card w-[100%] h-[100%] bg-white max-w-2xl rounded shadow-sm text-center border max-md:mt-4">
                  <div className="px-4 py-2 md:h-48">
                    <img
                      src="img/21.jpeg"
                      alt="trimer"
                      className="mt-2 w-24 h-24 sm:w-44 sm:h-36"
                    />
                  </div>
                  <div className="px-2 py-2">
                    <p>Tyres</p>
                    <p className="font-bold">From 799</p>
                    <button
                      type="button"
                      className="bg-yellow-400 hover-bg-slate-900 px-2 py-1 mt-3 rounded text-white"
                    >
                      🛒 Add To Cart
                    </button>
                  </div>
                </div>

                <div className="card w-[100%] h-[100%] bg-white max-w-2xl rounded shadow-sm text-center border max-md:mt-4">
                  <div className="px-4 py-2 md:h-48">
                    <img
                      src="img/22.jpeg"
                      alt="trimer"
                      className="mt-2 w-24 h-24 sm:w-44 sm:h-36"
                    />
                  </div>
                  <div className="px-2 py-2">
                    <p>Rider Helmets</p>
                    <p className="font-bold">From 699</p>
                    <button
                      type="button"
                      className="bg-yellow-400 hover-bg-slate-900 px-2 py-1 mt-3 rounded text-white"
                    >
                      🛒 Add To Cart
                    </button>
                  </div>
                </div>
              </div>

              <div className="card w-[100%] sm:w-52 h-[100%] bg-white max-w-2xl rounded shadow-sm text-center border max-md:mt-5">
                <div className="px-4 py-2 md:h-48">
                  <img src="img/23.jpeg" alt="trimer" className="mt-4" />
                </div>
                <div className="px-2 py-2">
                  <p>Non-Geared Cycles</p>
                  <p className="font-bold">Up to 40% Off</p>
                  <button
                    type="button"
                    className="bg-yellow-400 hover-bg-slate-900 px-2 py-1 mt-3 rounded text-white"
                  >
                    🛒 Add To Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Deatils />
      <Footer />
    </>
  );
};

export default Cart;
