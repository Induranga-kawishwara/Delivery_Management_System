import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import "./itemcard1.css";

const ItemCard = (props) => {
  const { addItem } = useCart();
  const [sizes, setSizes] = useState([{ size: "", shopPrice: "" }]);
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

  const handleAddToCart = () => {
    const price = selectedSize.shopPrice;
    addItem({
      title: props.data.productName,
      size: selectedSize.size,
      price: selectedSize.shopPrice,
      id: props.data._id + "-" + selectedSize.size,
    });
  };

  const handleSelectSize = (size, price) => {
    setSelectedSize({ size: size, shopPrice: price });
  };

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
                  onClick={() => handleSelectSize(item.size, item.shopPrice)}
                >
                  {item.size}
                </button>
              ))}
            </div>
          </div>

          <h5 className="card-title">Rs. {selectedSize.shopPrice}</h5>
          <button className="btn btn-success" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ItemCard;
