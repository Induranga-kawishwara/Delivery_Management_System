import React, { useState, useEffect } from "react";
import TheFooter from "../footer/TheFooter";
import TheNav from "../navbar/TheNav";
import "./style.css";
import axios from "axios";
import RiderCart from "../Cart/cartmain";

const Profile = () => {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [shopDetails, setShopDetails] = useState(null);
  const [selectedShopDetails, setSelectedShopDetails] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShopDetails = async () => {
      try {
        const response = await axios.get("http://localhost:5000/shop");
        setShopDetails(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };

    fetchShopDetails();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

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
        <form>
          <h1>Rider</h1>
          <br />

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Shop ID
              </label>
              <div className="col-sm-10">
                <div className="App">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Shop ID"
                    value={query}
                    onFocus={() => setShowDropdown(true)}
                    onChange={(e) => {
                      setQuery(e.target.value);
                      setShowDropdown(true);
                    }}
                    onBlur={() => {
                      // Optionally hide dropdown when input loses focus
                      // setTimeout(() => setShowDropdown(false), 100);
                    }}
                  />
                  {showDropdown && (
                    <ul className="options-list">
                      {shopDetails.map((shop, index) => (
                        <li
                          key={index}
                          onClick={() => {
                            setSelectedOption(shop.shopName);
                            setQuery(shop.shopName);
                            setSelectedShopDetails(shop);
                            setShowDropdown(false);
                          }}
                        >
                          {shop.shopName}
                        </li>
                      ))}
                    </ul>
                  )}
                  <div
                    style={{
                      marginTop: "7px",
                      marginBottom: "0px",
                      marginLeft: "3px",
                    }}
                  >
                    {selectedOption && <div>Selected: {selectedOption}</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <label htmlFor="inputName" className="col-sm-2 col-form-label">
                Shop Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Shop Name"
                  value={
                    selectedShopDetails ? selectedShopDetails.shopName : ""
                  }
                  readOnly={true}
                  id="inputName"
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
                  type="text"
                  className="form-control"
                  id="inputEmail3"
                  placeholder="Phone Number"
                  value={
                    selectedShopDetails ? selectedShopDetails.phoneNum : ""
                  }
                  readOnly={true}
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
                  value={
                    selectedShopDetails ? selectedShopDetails.location : ""
                  }
                  readOnly={true}
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
                <input
                  type="text"
                  className="form-control"
                  id="inputAddress"
                  placeholder="Type Of Rrestent"
                  value={
                    selectedShopDetails ? selectedShopDetails.TypeRtestent : ""
                  }
                  readOnly={true}
                />
              </div>
            </div>
          </div>

          {/* <div className="paddingspace">
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Save And Print
                </button>
              </div>
            </div>
          </div> */}
        </form>
      </div>

      <RiderCart/>

      <TheFooter />
    </div>
  );
};

export default Profile;
