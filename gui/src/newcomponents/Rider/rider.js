import React, { useState, useEffect } from "react";
import TheFooter from "../footer/TheFooter";
import TheNav from "../navbar/TheNav";
import "./style.css";
import axios from "axios";

const Profile = () => {
  const [query, setQuery] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [shopDetails, setShopDetails] = useState(null);
  const [selectedShopDetails, setSelectedShopDetails] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const data = [
  //   "Apple",
  //   "Banana",
  //   "Orange",
  //   "Mango",
  //   "Pineapple",
  //   "Watermelon",
  //   // Add more options as needed
  // ];

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

  // // Filter options based on the input
  // const filteredOptions = data.filter((option) =>
  //   option.toLowerCase().includes(query.toLowerCase())
  // );

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
                      setShowDropdown(true); // Show dropdown while typing
                    }}
                    onBlur={() => {
                      // Optionally hide dropdown when input loses focus
                      // Note: This might conflict with selecting an option, so you might need to adjust the logic
                      // setTimeout(() => setShowDropdown(false), 100); // Delay hiding to allow click event to register
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
                          {shop.shopName}{" "}
                          {/* Assuming "shopName" is the property to be displayed */}
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
                  type="name"
                  className="form-control"
                  value={selectedShopDetails.shopName}
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
                  type="Phonenumber"
                  className="form-control"
                  id="inputEmail3"
                  value={selectedShopDetails.phoneNum}
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
                  type="name"
                  className="form-control"
                  id="inputAddress"
                  value={selectedShopDetails.location}
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
                  type="name"
                  className="form-control"
                  id="inputAddress"
                  value={selectedShopDetails.TypeRtestent}
                  readOnly={true}
                />
              </div>
            </div>
          </div>

          <div className="paddingspace">
            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Save And Print
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <TheFooter />
    </div>
  );
};

export default Profile;
