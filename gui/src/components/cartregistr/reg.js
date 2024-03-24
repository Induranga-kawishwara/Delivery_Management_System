import Dropdown from "react-bootstrap/Dropdown";
import TheFooter from "../../components/Footer/TheFooter";
import TheNav from "../../components/Header/TheNav";
import "./stylereg.css";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [title, setTitle] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone1, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const CreateUser = (e) => {
    const postData = {
      title: title,
      firstName: fname,
      lastName: lname,
      phoneNum: phone1,
      email: email,
      password: password,
      houseNo: houseNo,
      street: street,
      city: city,
      zip: zipcode,
    };

    axios
      .post("http://localhost:5000/user", postData)
      .then((response) => {
        console.log("Data posted successfully:", response.data);
        setTitle("");
        setFname("");
        setLname("");
        setPhonenumber("");
        setEmail("");
        setPassword("");
        setHouseNo("");
        setStreet("");
        setCity("");
        setZipcode("");
        setIsChecked(false);
        setShowPassword(false);
        console.log("cat");
        alert(response.data);
        navigate("/cartlog");
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const UserSubmit = (e) => {
    e.preventDefault();
    if (
      !fname &&
      !lname &&
      !email &&
      !password &&
      !title &&
      !phone1 &&
      !zipcode &&
      !houseNo &&
      !street &&
      !city &&
      !isChecked
    ) {
      alert("Please fill in all fields.");
      return;
    }
    if (!/^[a-zA-Z\s]*$/.test(fname) || !/^[a-zA-Z\s]*$/.test(lname)) {
      alert("Invalid name format. Only alphabets and spaces are allowed.");
      return;
    }
    if (!fname) {
      alert("Please fill in the First name field.");
      return;
    }
    if (!lname) {
      alert("Please fill in the Last name field.");
      return;
    }

    if (!phone1.length == 10) {
      alert("Please Valid 10 digits Phone Number");
      return;
    }

    if (!zipcode.length == 5) {
      alert("Please Valid 5 digits Zip code");
      return;
    }
    if (!email) {
      alert("Please fill in the email field.");
      return;
    }
    if (!password) {
      alert("Please fill in Password.");
      return;
    }
    if (password.length < 8) {
      alert("Password should be at least 8 characters long.");
      return;
    }

    if (!houseNo && !street && !city) {
      alert("Please Enter Address");
      return;
    }

    if (!title) {
      alert("Please Enter Title");
      return;
    }

    if (!isChecked) {
      alert("Comfirm the Documents");
      return;
    }

    CreateUser();
  };
  return (
    <div>
      <TheNav />
      <div className="center-container">
        <div
          className="form-box"
          style={{
            marginTop: "120px",
            marginBottom: "20px",
            marginLeft: "40px",
            marginRight: "40px",
          }}
        >
          <form onSubmit={UserSubmit}>
            <h1>Register </h1>
            <br />

            <div className="paddingspace">
              <div className="form-group row">
                <label htmlFor="inputState" className="col-sm-2 col-form-label">
                  Title
                </label>
                <div className="col-sm-10">
                  <select
                    id="inputState"
                    className="form-control"
                    onChange={(e) => setTitle(e.target.value)}
                  >
                    <option disabled selected>
                      Choose...
                    </option>
                    <option value="Mr.">Mr.</option>
                    <option value="Ms.">Ms.</option>
                    <option value="Mrs.">Mrs.</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="paddingspace">
              <div className="form-group row">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">
                  First Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputName"
                    placeholder="First Name"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="paddingspace">
              <div className="form-group row">
                <label
                  htmlFor="inputLastName"
                  className="col-sm-2 col-form-label"
                >
                  Last Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputLastName"
                    placeholder="Last Name"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="paddingspace">
              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Phone
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="phonenumber"
                    value={phone1}
                    placeholder="Phone Number"
                    onChange={(e) => setPhonenumber(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="paddingspace">
              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail3"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    id="inputPassword3"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <div className="form-check mt-2">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="showPasswordCheckbox"
                      onChange={() => setShowPassword(!showPassword)}
                    />
                    <label
                      className="form-check-label"
                      htmlFor="showPasswordCheckbox"
                    >
                      Show Password
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="paddingspace">
              <div className="form-group row">
                <label htmlFor="HouseNo" className="col-sm-2 col-form-label">
                  House No.{" "}
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    value={houseNo}
                    id="HouseNo"
                    placeholder="House No."
                    onChange={(e) => setHouseNo(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="paddingspace">
              <div className="form-group row">
                <label htmlFor="street" className="col-sm-2 col-form-label">
                  Street
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    value={street}
                    id="street"
                    placeholder="Street"
                    onChange={(e) => setStreet(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="paddingspace">
              <div className="form-group row">
                <label
                  htmlFor="inputAddress"
                  className="col-sm-2 col-form-label"
                >
                  City
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="City"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="paddingspace">
              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-2 col-form-label"
                >
                  Zip Code
                </label>
                <div className="col-sm-10">
                  <input
                    type="number"
                    className="form-control"
                    id="zipcode"
                    placeholder="Zip Code"
                    value={zipcode}
                    onChange={(e) => setZipcode(e.target.value)}
                  />
                </div>
              </div>
            </div>

            <div className="paddingspace">
              <div className="form-group row">
                <div className="col-sm-2">Confermation</div>
                <div className="col-sm-10">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck1"
                      onChange={(e) => setIsChecked(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="gridCheck1">
                      I confirm that this information is true
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="paddingspace">
              <div className="form-group row">
                <div className="col-sm-10">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <TheFooter />
    </div>
  );
}
