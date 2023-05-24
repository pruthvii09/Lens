import React from "react";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import "../../styles/components/FeaturedProduct.css";
const FeaturedProduct = () => {
  return (
    <div className="display">
      <div className="featured-heading">
        <h2>Featured Product</h2>
        <Link to="">See All</Link>
      </div>
      <div className="all-spects">
        {data.map((item) => (
          <div className="display-spects">
            <div className="spects-img">
              <img src={item.img} alt="" />
            </div>
            <div className="spects-info">
              <h2>{item.title}</h2>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
