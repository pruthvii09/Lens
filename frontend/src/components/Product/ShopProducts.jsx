import React from "react";
import data from "../../data/ShopProduct.json";
import "../../styles/components/ShopProducts.css";
import { Link } from "react-router-dom";
const ShopProducts = () => {
  return (
    <div className="product-container">
      {data.map((item) => (
        <Link to={`/product/${item.id}`}>
          <div key={item.id} className="product">
            <div className="product-img">
              <img src={item.img} alt="" />
            </div>
            <div className="product-title">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
            <div className="product-price"> &#8377; {item.price}</div>
            <div className="porduct-actions">
              <i class="bx bx-cart"></i>
              <p>Add to Cart</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ShopProducts;
