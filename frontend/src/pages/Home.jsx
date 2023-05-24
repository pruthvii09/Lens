import React from "react";
import Navbar from "../components/Navbar/Navbar";
import HeroImg from "../assets/women.png";
import "../styles/pages/Home.css";
import FeaturedProduct from "../components/Product/FeaturedProduct";
import Footer from "../components/Footer/Footer";
const Home = () => {
  return (
    <div>
      <Navbar />
      <main className="content">
        <div className="banner">
          <div className="banner-desc">
            <div className="heading">
              <div>
                <strong>See</strong> everything
              </div>
              <div>
                with <strong>Clarity</strong>
              </div>
            </div>
            <p>
              Buying eyewear should leave you happy and good-looking, with money
              in your pocket. Glasses, sunglasses, and contacts—we’ve got your
              eyes covered.
            </p>
            <button>
              Shop Now <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
          <div className="banner-img">
            <img src={HeroImg} alt="" />
          </div>
        </div>
        <FeaturedProduct />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
