import React from "react";
import Logo from "../../assets/logo.png";
import "../../styles/components/Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-img">
        <img src={Logo} alt="" />
      </div>
      <div className="footer-copyright">Copyright &copy; 2023</div>
    </div>
  );
};

export default Footer;
