import React, { useEffect, useState } from "react";
import { useCart } from "react-use-cart";
import "./itemcard.css";
import axios from "axios";

const ItemCard = (props) => {
  const { addItem, emptyCart } = useCart();
  const [sizes, setSizes] = useState([{ size: "", shopPrice: "" }]);
  const [selectedSize, setSelectedSize] = useState({ size: "", shopPrice: "" });
  const [cart, setCart] = useState([{}]);

  const fetchCart = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/cart/${localStorage.getItem("riderId")}`
      );
      setCart(response.data);
      console.log(cart);
    } catch (error) {
      console.error("Error fetching cart:", error);
      throw error;
    }
  };
  const preAddToCart = () => {
    console.log("1");

    cart.forEach((item) => {
      console.log("2");
      addItem({
        img: item.details.img,
        title: item.details.title,
        size: item.details.size,
        price: item.details.price,
        id: item.details.id,
        quantity: item.details.quantity,
      });
    });
  };

  useEffect(() => {
    emptyCart();
    fetchCart();
    console.log("ss");
    console.log(cart);

    if (!cart) {
      preAddToCart();
    }

    const extractedSizes = props.data.sizes.map((item) => ({
      size: item.size,
      shopPrice: item.shopPrice,
    }));
    setSizes(extractedSizes);
    const lowestPriceSize = extractedSizes.reduce((prev, current) =>
      prev.price < current.price ? prev : current
    );
    setSelectedSize(lowestPriceSize);
  }, [props.data.sizes]);

  const handleAddToCart = async () => {
    addItem({
      img: props.data.image,
      title: props.data.productName,
      size: selectedSize.size,
      price: selectedSize.shopPrice,
      id: props.data._id + "-" + selectedSize.size,
    });
    const productData = {
      id: localStorage.getItem("riderId"),
      title: props.data.productName,
      size: selectedSize.size,
      price: selectedSize.shopPrice,
      image: props.data.image,
      productid: props.data._id + "-" + selectedSize.size,
    };
    try {
      const response = await axios.post(
        "http://localhost:5000/cart",
        productData
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error adding product to cart:", error);
    }
  };

  const handleSelectSize = (size, price) => {
    setSelectedSize({ size: size, shopPrice: price });
  };

  return (
    // <></>
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        <img
          src={props.data.image}
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
