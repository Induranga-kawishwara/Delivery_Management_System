import Dropdown from "react-bootstrap/Dropdown";
import TheFooter from "../../components/Footer/TheFooter";
import TheNav from "../../components/Header/TheNav";
import "./stylelog.css";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      from: "user",
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/auth", payload)
      .then((response) => {
        console.log("Login successful:", response.data);
        setEmail("");
        setPassword("");
        localStorage.setItem("usertoken", response.data.data);
        localStorage.setItem("userId", response.data.id);
        alert(response.data.message);
        window.location = "/cart";
      })
      .catch((error) => {
        console.error("Error login:", error);
        alert(error.response.data.message);
      });
  };

  return (
    <div>
      <TheNav />
      <div
        className="form-box"
        style={{ marginTop: "120px", marginBottom: "20px" }}
      >
        <form onSubmit={handleSubmit}>
          <h1 className="form-title">Login</h1>

          <div className="form-group paddingspace">
            <label htmlFor="inputEmail3" className="col-form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="inputEmail3"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)} // Update email state
            />
          </div>

          <div className="form-group paddingspace">
            <label htmlFor="inputPassword3" className="col-form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword3"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Update password state
            />
          </div>

          <div className="form-group remember-me-checkbox">
            <input type="checkbox" id="rememberPassword" />
            <label htmlFor="rememberPassword" className="col-form-label">
              {" "}
              Remember password
            </label>
          </div>

          <button type="submit" className="btn btn-login">
            {" "}
            {/* Change type to submit */}
            Log in
          </button>

          <button type="button" className="btn btn-google">
            Sign in with Google
          </button>

          <div className="sign-up-text">
            <RouterLink
              to="/cartreg"
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
            >
              Don't have an account? Register
            </RouterLink>
          </div>
        </form>
      </div>
      <TheFooter />
    </div>
  );
};

export default Profile;
