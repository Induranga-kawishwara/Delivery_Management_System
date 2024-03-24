import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import "./itemcard.css";

const ItemCard = (props) => {
  const { addItem } = useCart();
  const [sizes, setSizes] = useState([{ size: "", shopprice: "" }]);
  // const [selectedSize, setSelectedSize] = useState(sizes ? sizes[0].size : " ");
  const [selectedSize, setSelectedSize] = useState({ size: "", shopPrice: "" });

  useEffect(() => {
    const extractedSizes = props.data.sizes.map((item) => ({
      size: item.size,
      shopPrice: item.shopPrice,
    }));
    setSizes(extractedSizes);
    const lowestPriceSize = extractedSizes.reduce((prev, current) =>
      prev.price < current.price ? prev : current
    );
    setSelectedSize(lowestPriceSize);
    console.log(sizes);
    console.log(selectedSize);
    console.log(sizes);
  }, [props.data.sizes]);

  // const prices = {
  //   "Curry Powder": {
  //     "25g": 32.5,
  //     "50g": 75,
  //     "100g": 150,
  //     "500g": 650,
  //     "1kg": 1200,
  //   },
  //   "Chilli Powder": {
  //     "25g": 45,
  //     "50g": 90,
  //     "100g": 180,
  //     "500g": 700,
  //     "1kg": 1250,
  //   },
  //   "Chilli Pieces": {
  //     "25g": 45,
  //     "50g": 90,
  //     "100g": 180,
  //     "500g": 700,
  //     "1kg": 1250,
  //   },
  //   "Tumeric Powder": {
  //     "25g": 75,
  //     "50g": 150,
  //     "100g": 300,
  //     "500g": 950,
  //     "1kg": 1900,
  //   },
  //   "Peppar Powder": {
  //     "25g": 85,
  //     "50g": 170,
  //     "100g": 340,
  //     "500g": 1300,
  //     "1kg": 2600,
  //   },
  // };

  // const handleAddToCart = () => {
  //   const price = prices[props.data.productName][selectedSize]; // Get the price based on product title and selected size
  //   addItem({
  //     ...props.item,
  //     size: selectedSize,
  //     price: price,
  //     id: props.item.id + "-" + selectedSize, // Unique identifier for each combination
  //   });
  // };

  return (
    // <></>
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img
          src="https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823_960_720.jpg"
          className="card-img-top img-fluid"
          alt={props.data.productName}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.data.productName}</h5>

          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {selectedSize.size}
            </button>
            <div
              className="custom-dropdown-menu"
              aria-labelledby="dropdownMenuButton"
            >
              {sizes.map((item, indx) => (
                <button
                  key={indx}
                  className="custom-dropdown-item"
                  onClick={() => setSelectedSize(item.size, item.shopprice)}
                >
                  {item.size}
                </button>
              ))}
            </div>
          </div>

          <h5 className="card-title">Rs. {selectedSize.shopPrice}</h5>
          {/* <p className="card-text">{props.desc}</p> */}
          {/* <button className="btn btn-success" onClick={handleAddToCart}> */}
          <button className="btn btn-success">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
