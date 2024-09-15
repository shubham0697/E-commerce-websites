import "./App.css";
import { Routes, Route } from "react-router-dom";

// Comoponent
import Navbar from "./Component/Navbar";
import Cart from "./Component/Cart";
import AddToCart from "./Component/AddToCart";
// import Footer from "./Component/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Cart />} />
        <Route path="/addtocart" element={<AddToCart />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}

export default App;
