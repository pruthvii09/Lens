import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "../../styles/components/Navbar.css";
const Navbar = () => {
  return (
    <nav className="navigation">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>
      <ul className="navigation-menu-main">
        <li>
          <NavLink to={"/"}>Home</NavLink>
        </li>
        <li>
          <NavLink to={"/shop"}>Shop</NavLink>
        </li>
        <li>
          <NavLink>Featured</NavLink>
        </li>
        <li>
          <NavLink>Recommended</NavLink>
        </li>
      </ul>
      <div className="search-box">
        <i class="bx bx-search-alt"></i>
        <input type="text" name="" id="" placeholder="Search product...." />
      </div>
      <div className="auth-menu">
        <i class="bx bx-shopping-bag"></i>
        <div className="btn">
          <Link to="/signup">
            <button className="sign up">Sign Up</button>
          </Link>
          <Link to={"/signin"}>
            <button className="sign in">Sign In</button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
