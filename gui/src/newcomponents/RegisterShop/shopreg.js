import Dropdown from "react-bootstrap/Dropdown";
import TheFooter from "../footer/TheFooter";
import TheNav from "../navbar/TheNav";
import React, { useState } from "react";
import "./style.css";
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../config/firebase.config.js";

// Initialize Firebase app
initializeApp(firebaseConfig.firebaseConfig); // Accessing the firebaseConfig property

// Your other code goes here...

export default function Profile() {
  const [shopname, setShopname] = useState("");
  const [stitle, setStitle] = useState("");
  const [ownername, setShopownername] = useState("");
  const [shoptelephone, setShopnumber] = useState("");
  const [shopno, setShopNo] = useState("");
  const [shopstreet, setShopStreet] = useState("");
  const [shopcity, setShoCity] = useState("");
  const [shoplocation, setShopLocation] = useState("");
  const [shopid, setShopID] = useState("");
  const [shopregdate, setRegdate] = useState("");
  const [typeresturent, setTypeResturent] = useState("");
  const [checked, setIsCheckedShop] = useState("");
  const [img, setImg] = useState("");
  const [file, setFile] = useState(null);
  const storage = getStorage();

  async function handleChange(e) {
    setFile(e.target.files[0]);
    setImg(URL.createObjectURL(e.target.files[0]));
  }

  const uploadFileToFirebase = async () => {
    if (!file) return null;

    const storageRef = ref(storage, `files/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      console.log("File uploaded successfully!");
      const downloadURL = await getDownloadURL(storageRef);
      console.log("Download URL:", downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading file:", error);
      throw error;
    }
  };

  const RegisterShop = async (downloadURL) => {
    const postData = {
      shopId: shopid,
      shopName: shopname,
      shopOwnerTitle: stitle,
      phoneNum: shoptelephone,
      shopNo: shopno,
      street: shopstreet,
      city: shopcity,
      location: shoplocation,
      regisDate: new Date(shopregdate),
      TypeRtestent: typeresturent,
      img: downloadURL,
    };

    try {
      // Send the POST request
      const response = await axios.post("http://localhost:5000/shop", postData);
      console.log("Data posted successfully:", response.data);
      setShopname("");
      setStitle("");
      setShopownername("");
      setShopnumber("");
      setShopNo("");
      setShopStreet("");
      setShoCity("");
      setShopLocation("");
      setShopID("");
      setRegdate("");
      setTypeResturent("");
      setIsCheckedShop("");
      setFile(null);
      alert(response.data);
    } catch (error) {
      console.error("Error posting data:", error);
      alert(error.response.data.message);
    }
  };
  const shopsubmit = async (e) => {
    e.preventDefault();
    if (
      !shopname &&
      !stitle &&
      !ownername &&
      !shoptelephone &&
      !shopno &&
      !shopstreet &&
      !shopcity &&
      !shoplocation &&
      !shopid &&
      !shopregdate &&
      !typeresturent &&
      !checked
    ) {
      alert("Please fill in all fields.");
      return;
    }

    if (!/^[a-zA-Z\s]*$/.test(shopname) || !/^[a-zA-Z\s]*$/.test(ownername)) {
      alert("Invalid name format. Only alphabets and spaces are allowed.");
      return;
    }
    if (!stitle) {
      alert("Please Enter Title");
      return;
    }
    if (!shopname) {
      alert("Please fill in the Shop name field.");
      return;
    }
    if (!ownername) {
      alert("Please fill in the Owner name field.");
      return;
    }
    if (shoptelephone.length !== 10) {
      alert("Please Valid 10 digits Phone Number");
      return;
    }
    if (!shopno && !shopstreet && !shopcity) {
      alert("Please Enter Address");
      return;
    }
    if (!shoplocation) {
      alert("Please Enter Location Link");
      return;
    }
    if (!shopregdate) {
      alert("Please Enter Date");
      return;
    }

    if (!typeresturent) {
      alert("Please Enter Position");
      return;
    }

    if (!checked) {
      alert("Comfirm the Documents");
      return;
    }
    try {
      const downloadURL = await uploadFileToFirebase();
      if (downloadURL) {
        RegisterShop(downloadURL);
      }
    } catch (error) {
      console.error("Error uploading file and registering shop:", error);
      alert("Error uploading file and registering shop. Please try again.");
    }
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
        <form onSubmit={shopsubmit}>
          <h1>Register Shop</h1>
          <br />

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Shop Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Shop Name"
                  onChange={(e) => setShopname(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputState" className="col-sm-2 col-form-label">
                Shop Owner Title
              </label>
              <div className="col-sm-10">
                <select
                  id="inputState"
                  className="form-control"
                  onChange={(e) => setStitle(e.target.value)}
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
                Owner Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Owner Name"
                  onChange={(e) => setShopownername(e.target.value)}
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
                  id="inputEmail3"
                  placeholder="Phone Number"
                  onChange={(e) => setShopnumber(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
                Shop No.{" "}
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Shop No."
                  onChange={(e) => setShopNo(e.target.value)}
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
                  onChange={(e) => setShopStreet(e.target.value)}
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
                  onChange={(e) => setShoCity(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
                Shop Location
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Location"
                  onChange={(e) => setShopLocation(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputAddress" className="col-sm-2 col-form-label">
                Shop ID
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Shop ID"
                  onChange={(e) => setShopID(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="birthday" className="col-sm-2 col-form-label">
                Register Date
              </label>
              <div className="col-sm-10">
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="form-control"
                  onChange={(e) => setRegdate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputState" className="col-sm-2 col-form-label">
                Type Of Rrestent
              </label>
              <div className="col-sm-10">
                <select
                  id="inputState"
                  className="form-control"
                  onChange={(e) => setTypeResturent(e.target.value)}
                >
                  <option disabled selected>
                    Choose...
                  </option>
                  <option value="Resturent">Resturent</option>
                  <option value="Grossary">Grossary</option>
                  <option value="Supermarcket">Supermarcket</option>
                </select>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "10px", marginBottom: "7px" }}>
            <div className="paddingspace">
              <div className="form-group row">
                <label htmlFor="inputState" className="col-sm-2 col-form-label">
                  Image of Shop
                </label>
                <div className="col-sm-10">
                  <input
                    type="file"
                    accept=".jpeg, .png, .jpg"
                    onChange={handleChange}
                  />
                  <img src={img} />
                </div>
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
                    onChange={(e) => setIsCheckedShop(e.target.value)}
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

      <TheFooter />
    </div>
  );
}
