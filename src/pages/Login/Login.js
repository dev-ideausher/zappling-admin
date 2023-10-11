import React from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/Logo.png";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="col-12 loginBack d-flex d-justify-center d-align-center">
      <div className="loginBox col-3 d-flex d-flex-column ">
        <img src={logo} />
        <p className="font-20 f-700 mt-5">Login to continue</p>
        <label className="font-14 f-600 mt-4">Email</label>
        <input
          className="loginInput mt-2 col-12"
          type="email"
          placeholder="user@example.com"
        />

        <label className="font-14 f-600 mt-4">Password</label>
        <input
          className="loginInput mt-2 col-12"
          type="password"
          placeholder="**********"
        />

        <button className="forgotPassword text-grey mt-4">
          Forgot password?
        </button>

        <button
          onClick={() => navigate("/users")}
          className="col-12 loginButton mt-4 text-white font-14 f-700"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
