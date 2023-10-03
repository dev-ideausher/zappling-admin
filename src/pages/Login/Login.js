import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  return (
    <div>
      Login screen will be available soon.
      <button onClick={() => navigate("/users")}>Proceed to dashboard</button>
    </div>
  );
};

export default Login;
