import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { sentOtpFunction } from "../services/Apis";
import "../styles/login.css";
import login from "../images/login.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passhow, setPassShow] = useState(false);

  const navigate = useNavigate();

  const sendOtp = async (e) => {
    e.preventDefault();

    if (email === "") {
      toast.error("Enter Your Email !");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !");
    }
    if (password === "") {
      toast.error("Enter Your Password");
    } else if (password.length < 6) {
      toast.error("password length minimum 6 character");
    } else {
      const data = {
        email: email,
        password: password,
      };

      const response = await sentOtpFunction(data);

      if (response.status === 200) {
        navigate("/user/otp", { state: email, password });
      } else {
        toast.error(response.response.data.error);
      }
    }
  };

  return (
    <>
      <section classname="signup">
        <div className="container mt-5">
          <div className="signup-content">
            <div className="signup-image">
              <figure className="fig">
                <img src={login} />
              </figure>
            </div>
            <div className="signup-form">
              <h2 className="title">Login</h2>
              <form className="register-form" id="register-form">
                <div className="lform">
                  <label htmlFor="email">
                    <i class="zmdi zmdi-email material-icon-name"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id=""
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter Your Email Address"
                  />
                </div>

                <div className="lform">
                  <label htmlFor="password">
                    <i class="zmdi zmdi-lock material-icon-name"></i>
                  </label>
                  <input
                    type={!passhow ? "password" : "text"}
                    name="password"
                    id=""
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                  />
                  <div className="pass" onClick={() => setPassShow(!passhow)}>
                    {!passhow ? "Show" : "Hide"}
                  </div>
                </div>
                <button className="btn" onClick={sendOtp}>
                  Login
                </button>
                <p className="p2">
                  Don't have an account?{" "}
                  <NavLink to="/register">Sign up</NavLink>{" "}
                </p>
              </form>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;