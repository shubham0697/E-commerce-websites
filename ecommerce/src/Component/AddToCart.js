import React, { useContext } from "react";
import { CartContext } from "../Context/CartContext";

const AddToCart = () => {
  const addToCart = useContext(CartContext);
  const state = addToCart.state;
  const dispatch = addToCart.dispatch;

  const total = state.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);

  return (
    <>
      <div className="bg-gray-200 px-5 flex flex-col md:flex-row md:space-x-5 shadow-sm">
        <div className="col-lg-8">
          {/* <h1 className="text-3xl ml-5 mb-0">Shopping Cart</h1> */}
          {/* <hr className="mx-3" /> */}
          {state.map((product, index) => (
            <div className=" bg-white shadow-sm">
              <div
                key={index}
                className="flex flex-col md:flex-row mx-10 mt-4 mb-4 py-3"
              >
                <div className="flex justify-center items-center">
                  <img
                    src={product.image}
                    alt="product"
                    className="w-32 h-32"
                  />
                </div>
                <div className="md:ml-10">
                  <h1 className="text-lg font-medium">{product.title}</h1>
                  <div className="flex space-x-2">
                    <p className="bg-red-600 text-white text-xs font-medium px-1 py-1 w-[52px] rounded-sm">
                      63% off
                    </p>
                    <p className="text-red-600 text-xs font-bold mt-1">
                      Great Indian Festival
                    </p>
                  </div>
                  {/* <h1 className="">{product.description}</h1> */}
                  {/* <p className="text-xl font-bold">
                  ${product.quantity * product.price}
                </p> */}
                  <p className="text-xl font-bold">
                    ₹ {Math.floor(product.price * 72.0) * product.quantity}
                    &nbsp;
                    <span className="text-xs font-normal">
                      M.R.P.:{" "}
                      <del>
                        ₹{Math.floor(product.price * 92.0) * product.quantity}
                      </del>
                    </span>
                  </p>

                  <p className="text-green-800 text-sm mt-2">in stock</p>
                  <p className="text-sm">Eligible for FREE Shipping</p>
                  <div className="flex space-x-2 mt-1">
                    <h1 className="text-lg">Quantity :</h1>
                    <button
                      className=""
                      onClick={() => {
                        if (product.quantity > 1) {
                          dispatch({ type: "DECREASE", payload: product });
                        } else {
                          dispatch({ type: "REMOVE", payload: product });
                        }
                      }}
                    >
                      <img
                        src="img/minus.png"
                        alt="minus"
                        className=" w-6 bg-gray-200 px-2 py-1 border"
                      />
                    </button>
                    <p className="py-2 px-1 text-sm">{product.quantity}</p>
                    <button
                      className=""
                      onClick={() =>
                        dispatch({ type: "INCREASE", payload: product })
                      }
                    >
                      <img
                        src="img/add.png"
                        alt="add"
                        className=" w-6 bg-gray-200 px-2 py-1 border"
                      />
                    </button>
                  </div>
                  <button
                    className="mt-2 border px-2 rounded"
                    onClick={() =>
                      dispatch({ type: "REMOVE", payload: product })
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
              {/* <hr className="mx-3" /> */}
            </div>
          ))}
          {/* {state.length > 0 && (
            <div className="flex justify-end mr-16 mt-2">
              <h2>
                Subtotal ({state.length} items) : ₹{Math.floor(total * 72)} /-
              </h2>
            </div>
          )} */}
        </div>

        {/* section 2 */}
        <div className="col-lg-4 mt-4">
          <div className="bg-white  h-[345px] shadow-sm">
            <div className="py-3 ml-5 font-semibold text-gray-500">
              <h1>PRICE DETAILS</h1>
            </div>
            <hr />
            {state.length > 0 && (
              <div className="flex justify-between mx-4 mt-4">
                <h1>Price ({state.length} items)</h1>
                <h1>₹{Math.floor(total * 92)}</h1>
              </div>
            )}
            <div className="flex justify-between mx-4 mt-4">
              <h1>Discount</h1>
              <h1 className="text-green-600">- ₹{Math.floor(total * 20)}</h1>
            </div>
            <div className="flex justify-between mx-4 mt-4">
              <h1>Delivery Charges</h1>
              <h1 className="space-x-1">
                <del className="text-gray-500"> ₹{Math.floor(total * 1)}</del>
                <span className="text-green-600">Free</span>
              </h1>
            </div>
            <hr className="mt-4 mx-4" />
            {state.length > 0 && (
              <div className="flex justify-between mx-4 mt-4">
                <h1 className="font-semibold text-lg">Total Amount</h1>
                <h1 className="font-semibold text-lg">
                  ₹{Math.floor(total * 72)}
                </h1>
              </div>
            )}
            <hr className="mt-4 mx-4" />
            <div className="mt-3 ml-6">
              <h1 className="text-green-600 font-semibold">
                You will save ₹{Math.floor(total * 20)} on this order
              </h1>
            </div>
          </div>
          <div className="flex space-x-1 mx-3 mt-4">
            <img src="img/shield.png" alt="shield" className="w-8 h-8 mt-1" />
            <h1 className="text-gray-500 text-sm font-medium">
              Safe and Secure Payments.Easy returns.100% Authentic products.
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToCart;
