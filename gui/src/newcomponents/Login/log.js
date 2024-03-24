import TheFooter from "../../components/Footer/TheFooter";
import TheNav from "../../components/Header/TheNav";
import "./style.css";
import { useState } from "react";
import axios from "axios";

const Profile = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      email: email,
      password: password,
    };

    axios
      .post("http://localhost:5000/auth", payload)
      .then((response) => {
        console.log("Login successful:", response.data);
        setEmail(" ");
        setPassword("");
        localStorage.setItem("ridertoken", response.data.data);
        alert(response.data.message);
        window.location = "/rider";
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
        style={{
          marginTop: "120px",
          marginBottom: "20px",
          marginLeft: "40px",
          marginRight: "40px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          <br />

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Email"
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label
                htmlFor="inputPassword3"
                className="col-sm-2 col-form-label"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  value={password}
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                  id="inputPassword3"
                  placeholder="Password"
                />
              </div>
            </div>
          </div>

          <h1> </h1>

          <div className="form-group row">
            <div className="col-sm-10">
              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </div>
          </div>
        </form>
      </div>

      <TheFooter />
    </div>
  );
};

export default Profile;
