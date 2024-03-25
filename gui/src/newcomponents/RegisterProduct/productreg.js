import TheFooter from "../footer/TheFooter";
import TheNav from "../navbar/TheNav";
import React, { useState } from "react";
import axios from "axios";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { initializeApp } from "firebase/app";
import firebaseConfig from "../../config/firebase.config.js";

// Initialize Firebase app
initializeApp(firebaseConfig.firebaseConfig);

export default function Profile() {
  const [secretKey, setSecretKey] = useState("");
  const [productname, setProductname] = useState("");
  const [size, setSize] = useState("");
  const [productprice, setProductprice] = useState("");
  const [shopprice, setShopprice] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [img, setImg] = useState("");
  const [file, setFile] = useState(null);
  const storage = getStorage();

  const handleChange = (e) => {
    const imageFile = e.target.files[0];
    setFile(imageFile);
    setImg(URL.createObjectURL(imageFile));
  };

  const uploadImageToFirebase = async () => {
    if (!file) return null;

    const storageRef = ref(storage, `product_images/${file.name}`);

    try {
      await uploadBytes(storageRef, file);
      console.log("Image uploaded successfully!");
      const downloadURL = await getDownloadURL(storageRef);
      console.log("Download URL:", downloadURL);
      return downloadURL;
    } catch (error) {
      console.error("Error uploading image:", error);
      throw error;
    }
  };

  const addProduct = async () => {
    try {
      const downloadURL = await uploadImageToFirebase();
      const payload = {
        productName: productname,
        price: productprice,
        shopPrice: shopprice,
        size: size,
        image: downloadURL,
      };

      const response = await axios.post(
        "http://localhost:5000/product",
        payload
      );
      console.log("Product added successfully:", response.data);
      setProductname("");
      setSize("");
      setProductprice("");
      setShopprice("");
      setIsChecked(false);
      setImg("");
      setFile(null);
      alert(response.data);
    } catch (error) {
      console.error("Error adding product:", error);
      alert(error.response.data.message);
    }
  };

  const productreg = (e) => {
    e.preventDefault();
    if (secretKey != "12187@") {
      alert("Invalid Admin");
    } else {
      e.preventDefault();
    }

    if (!/^[a-zA-Z\s]*$/.test(productname)) {
      alert("Invalid name format. Only alphabets and spaces are allowed.");
      return;
    }
    if (!productname) {
      alert("Please fill in the First name field.");
      return;
    }
    if (!size) {
      alert("Enter Size of product");
      return;
    }
    if (!productprice) {
      alert("Enter valid Price");
      return;
    }
    if (!shopprice) {
      alert("Enter valid Price");
      return;
    }
    if (!isChecked) {
      alert("Comfirm the Documents");
      return;
    }
    addProduct();
  };
  return (
    <div>
      <TheNav />
      <div
        style={{
          marginTop: "120px",
          marginBottom: "20px",
          marginLeft: "20px",
          marginRight: "20px",
        }}
      >
        <form onSubmit={productreg}>
          <h1>Register Product</h1>
          <br />

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
                Product Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  placeholder="Product Name"
                  value={productname}
                  onChange={(e) => setProductname(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputState" className="col-sm-2 col-form-label">
                Size Of Product
              </label>
              <div className="col-sm-10">
                <select
                  id="inputState"
                  value={size}
                  className="form-control"
                  onChange={(e) => setSize(e.target.value)}
                >
                  <option disabled selected>
                    Choose...
                  </option>
                  <option value="15G">15 G</option>
                  <option value="25G">25 G</option>
                  <option value="50G">50 G</option>
                  <option value="100G">100 G</option>
                  <option value="250G">250 G</option>
                  <option value="500G">500 G</option>
                  <option value="1KG">1 KG</option>
                </select>
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Product Price Rs.
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="inputName"
                  placeholder="Product Price ( Rupees )"
                  value={productprice}
                  onChange={(e) => setProductprice(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
                Shop Price Rs.
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Shop Price ( Rupees )"
                  value={shopprice}
                  onChange={(e) => setShopprice(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div style={{ marginTop: "10px", marginBottom: "7px" }}>
            <div className="paddingspace">
              <div className="form-group row">
                <label htmlFor="inputState" className="col-sm-2 col-form-label">
                  Image of Product
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

      <TheFooter />
    </div>
  );
}
