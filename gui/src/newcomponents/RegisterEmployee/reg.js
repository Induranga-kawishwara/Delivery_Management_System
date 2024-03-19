import Dropdown from "react-bootstrap/Dropdown";
import TheFooter from "../footer/TheFooter";
import TheNav from "../navbar/TheNav";
import "./style.css";
import axios from "axios";

import React, { Component, ChangeEvent, useState } from "react";

export default function Profile() {
  const [secretKey, setSecretKey] = useState("");
  const [title, setTitle] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [nic, setNic] = useState("");
  const [phone1, setPhonenumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sex, setSex] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [Location, setLocation] = useState("");
  const [birthday, setBirthday] = useState("");
  const [position, setPosition] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const CreateEmployee = (e) => {
    const postData = {
      title: title,
      firstName: fname,
      lastName: lname,
      nic: nic,
      phoneNum: phone1,
      email: email,
      password: password,
      gender: sex,
      houseNo: houseNo,
      street: street,
      city: city,
      location: Location,
      birthday: new Date(birthday),
      typeOfPosition: position,
    };

    axios
      .post("http://localhost:5000/employee", postData)
      .then((response) => {
        console.log("Data posted successfully:", response.data);
        setSecretKey("");
        setTitle("");
        setFname("");
        setLname("");
        setNic("");
        setPhonenumber("");
        setEmail("");
        setPassword("");
        setSex("");
        setHouseNo("");
        setStreet("");
        setCity("");
        setLocation("");
        setBirthday("");
        setPosition("");
        setIsChecked(false);
        setShowPassword(false);
        alert(response.data);
      })
      .catch((error) => {
        alert(error.response.data.message);
      });
  };

  const EmployeeSubmit = (e) => {
    if (secretKey != "12187@") {
      e.preventDefault();
      alert("Invalid Admin");
    } else {
      e.preventDefault();
    }
    if (
      !fname &&
      !lname &&
      !email &&
      !password &&
      !title &&
      !nic &&
      !phone1 &&
      !sex &&
      !houseNo &&
      !street &&
      !city &&
      !Location &&
      !birthday &&
      !position &&
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

    if (nic.length !== 11) {
      alert("Please Enter 11 digits Nic Number");
      return;
    }
    if (phone1.length !== 10) {
      alert("Please Valid 10 digits Phone Number");
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
    if (!sex) {
      alert("Please select Gender");
      return;
    }
    if (!houseNo && !street && !city) {
      alert("Please Enter Address");
      return;
    }
    if (!Location) {
      alert("Please Enter Location Link");
      return;
    }
    if (!birthday) {
      alert("Please Enter Birthday");
      return;
    }
    if (!position) {
      alert("Please Enter Position");
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
    CreateEmployee();
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
        <form onSubmit={EmployeeSubmit}>
          <h1>Register Employee</h1>
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
                  value={title}
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
                Secret Key
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Secret Key"
                  value={secretKey}
                  onChange={(e) => setSecretKey(e.target.value)}
                />
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
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Last Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Last Name"
                  value={lname}
                  onChange={(e) => setLname(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                NIC
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="NIC"
                  placeholder="NIC"
                  value={nic}
                  onChange={(e) => setNic(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Phone
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="phonenumber"
                  placeholder="Phone Number"
                  value={phone1}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
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
                    value={showPassword}
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
            <fieldset className="form-group">
              <div className="row">
                <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
                <div className="col-sm-10">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="UserType"
                      value="Male"
                      //   checked={isChecked}
                      onChange={(e) => setSex(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="gridRadios1">
                      Male
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="UserType"
                      value="Female"
                      //   checked={isChecked}
                      onChange={(e) => setSex(e.target.value)}
                    />
                    <label className="form-check-label" htmlFor="gridRadios2">
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </fieldset>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
                House No.{" "}
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="House No."
                  value={houseNo}
                  onChange={(e) => setHouseNo(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
                Street
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Street"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
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
              <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
                Location
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Location"
                  value={Location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              {" "}
              {/* Birthday field wrapped in a form-group row */}
              <label htmlFor="birthday" className="col-sm-2 col-form-label">
                Birthday
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  className="form-control"
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputState" className="col-sm-2 col-form-label">
                Type Of Pisotion
              </label>
              <div className="col-sm-10">
                <select
                  id="inputState"
                  className="form-control"
                  onChange={(e) => setPosition(e.target.value)}
                >
                  <option disabled selected>
                    Choose...
                  </option>
                  <option value="Rider">Rider</option>
                  <option value="Lorry">Lorry</option>
                  <option value="Stores">Stores</option>
                </select>
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
                    checked={isChecked}
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
                  Register
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <TheFooter />
    </div>
  );
}
