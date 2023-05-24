import React, { useState } from "react";
import "../../styles/components/SignupForm.css";
const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="main-container">
      <div className="flex-container">
        <div className="form-container">
          <h3 style={{ marginBottom: 30 }}>Sign Up</h3>
          <div className="input-container">
            <label>Full Name</label>
            <input placeholder="John Doe" type="text" />
          </div>
          <div className="input-container">
            <label>Email</label>
            <input placeholder="john@gmail.com" type="text" />
          </div>
          <div className="input-container">
            <label>Password</label>
            <i
              onClick={() => setShowPassword(!showPassword)}
              className={showPassword ? "bx bx-show" : "bx bx-hide"}
            ></i>
            <input
              placeholder="Your Password"
              type={showPassword ? "text" : "password"}
            />
          </div>
          <div className="forgot-container">
            <p>Forgot Password?</p>
            <button>
              Sign Up <i class="bx bx-right-arrow-alt"></i>
            </button>
          </div>
        </div>
        <div className="auth-divider">
          <h6>OR</h6>
        </div>
        <div className="auth-options">
          <button style={{ backgroundColor: "#0078ff", color: "white" }}>
            <i class="bx bxl-facebook"></i>Continue with Facebook
          </button>
          <button style={{ backgroundColor: "white", color: "black" }}>
            <i class="bx bxl-google"></i>Continue with Google
          </button>
          <button style={{ backgroundColor: "black", color: "white" }}>
            <i class="bx bxl-github"></i>Continue with Github
          </button>
        </div>
      </div>
      <div className="auth-new">
        <p>Already have a account?</p>
        <button>Sign In</button>
      </div>
    </div>
  );
};

export default SignupForm;
