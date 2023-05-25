import React from "react";
import "../../styles/components/CartPage.css";
import data from "../../data/ShopProduct.json";
const CartPage = () => {
  return (
    <div className="cart-container">
      <div className="delivery-information">
        <div style={{ marginTop: "10px" }}>
          <p>Delivery Information</p>
          <div className="info-cart-div" style={{ marginTop: "10px" }}>
            <div className="input-cart">
              <div className="individual-cart-input">
                <label htmlFor="">Name</label>
                <input type="text" placeholder="John Doe" />
              </div>
              <div className="individual-cart-input">
                <label htmlFor="">Mobile Number</label>
                <input type="text" placeholder="9652488XXX" />
              </div>
            </div>
            <div className="input-cart">
              <div className="individual-cart-input">
                <label htmlFor="">Email</label>
                <input type="text" placeholder="john@email.com" />
              </div>
              <div className="individual-cart-input">
                <label htmlFor="">City</label>
                <input type="text" placeholder="Pune" />
              </div>
            </div>
            <div className="input-cart">
              <div className="individual-cart-input">
                <label htmlFor="">State</label>
                <input type="text" placeholder="Maharashtra" />
              </div>
              <div className="individual-cart-input">
                <label htmlFor="">Zip</label>
                <input type="text" placeholder="431XXX" />
              </div>
            </div>
            <div className="input-cart individual-cart-input">
              <label htmlFor="">Address</label>
              <input type="text" placeholder="4796 JM Road" />
            </div>
          </div>
        </div>
        <div style={{ marginTop: "20px" }}>
          <p style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            Schedule Delivery{" "}
            <label class="switch">
              <input type="checkbox" />
              <span class="slider">
                <svg
                  class="slider-icon"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  role="presentation"
                >
                  <path fill="none" d="m4 16.5 8 8 16-16"></path>
                </svg>
              </span>
            </label>
          </p>
          <div className="info-cart-div">
            <div className="input-cart individual-cart-input">
              <label htmlFor="">Date</label>
              <input type="date" placeholder="4796 JM Road" />
            </div>
            <div className="input-cart individual-cart-input">
              <label htmlFor="">Address</label>
              <input type="text" placeholder="4796 JM Road" />
            </div>
          </div>
        </div>
      </div>
      <div className="order-summary">
        <div>
          <p>Order Summary</p>
          <div className="order-container">
            <div className="order-product">
              <div>
                <img
                  src="https://static5.lenskart.com/media/catalog/product/pro/1/thumbnail/480x480/9df78eab33525d08d6e5fb8d27136e95//v/i/vincent-chase-vc-s14084-c4-c4-sunglasses_vincent-chase-vc-s14084-c4-c4-sunglasses_vincent-chase-vc-s14084-c4-c4-sunglasses_G_6509.jpg"
                  alt=""
                />
              </div>
              <div>
                <strong>Lenskart Air</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
