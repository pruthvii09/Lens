import React, { useState } from "react";
import "../../styles/components/Product.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Product = () => {
  const [basket, setBasket] = useState(false);
  const handleBasket = () => {
    setBasket(!basket);
    if (basket) {
      toast.success("Item Added to Basket", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      toast.error("Item Removed from Basket", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
  return (
    <div className="single-main-container">
      <div className="sp-container">
        <div className="sp-imgs">
          <img
            src={
              "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s14084-c4-c4-sunglasses_vincent-chase-vc-s14084-c4-c4-sunglasses_vincent-chase-vc-s14084-c4-c4-sunglasses_G_6509.jpg"
            }
            alt=""
          />
        </div>
        <div className="sp-single-img">
          <img
            src={
              "https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s14084-c4-c4-sunglasses_vincent-chase-vc-s14084-c4-c4-sunglasses_vincent-chase-vc-s14084-c4-c4-sunglasses_G_6509.jpg"
            }
            alt=""
          />
        </div>
        <div className="sp-product-info">
          <div className="info">
            <strong>Bestin Mallat</strong>
            <h3>Lenskart Air</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              atque illum veniam hic, voluptate impedit id expedita odio magni
              cum ad a officia autem nesciunt ipsum error voluptatibus officiis
              eaque!
            </p>
          </div>
          <div className="sp-size">
            <p>Lens Width and Frame Size</p>
            <select name="" id="">
              <option selected disabled value="">
                Select Your Frame Size
              </option>
              <option value="">28mm</option>
              <option value="">30mm</option>
              <option value="">32mm</option>
              <option value="">34mm</option>
            </select>
          </div>
          <p style={{ borderBottom: "0px" }}>Choose Color</p>
          <div className="sp-color">
            <div className="color">
              <p>&#10003;</p>
            </div>
            <div style={{ backgroundColor: "blue" }} className="color"></div>
            <div style={{ backgroundColor: "black" }} className="color"></div>
            <div style={{ backgroundColor: "pink" }} className="color"></div>
          </div>
          <div className="sp-price">
            <h2>&#8377; 100.00</h2>
          </div>
          <button
            className={basket ? "addbasket" : "removebasket"}
            onClick={handleBasket}
          >
            {basket ? "Add To Basket" : "Remove from basket"}
          </button>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Product;
