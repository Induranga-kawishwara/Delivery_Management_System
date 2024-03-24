import CartModel from "../modules/cart.js";
import validation from "../validations/validation.js";
import dotenv from "dotenv";

dotenv.config();

const getCart = async (req, res) => {
  const userID = req.params.id;

  try {
    const product = await CartModel.findOne({ id: userID });
    res.status(200).json(product);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).send("Error getting users");
  }
};

const addCartItem = async (req, res) => {
  try {
    const existingProduct = await CartModel.findOne({
      id: req.body.id,
      "details.title": req.body.title,
      "details.size": req.body.size,
    });

    if (existingProduct) {
      const newQuantity = existingProduct.details[0].quantity + 1;
      const newPrice = req.body.price * newQuantity;

      await CartModel.updateOne(
        {
          id: req.body.id,
          "details.title": req.body.title,
          "details.size": req.body.size,
        },
        {
          $set: {
            "details.$.quantity": newQuantity,
            "details.$.price": newPrice,
          },
        }
      );
      res.status(200).send("Quantity and price updated successfully!");
    } else {
      const newProduct = new CartModel({
        id: req.body.id,
        details: [
          {
            img: req.body.image,
            title: req.body.title,
            size: req.body.size,
            price: req.body.price,
            quantity: 1,
            productid: req.body.productid,
          },
        ],
      });
      await newProduct.save();
      res.status(201).send("Product saved successfully!");
    }
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send("Error adding product");
  }
};

const deleteProduct = async (req, res) => {
  const userID = req.params.id;
  console.log(userID);
  try {
    const deleteProduct = await CartModel.findById(userID);

    if (!deleteProduct) {
      return res.status(404).send("User not found");
    }
    res.status(200).send("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Error deleting user");
  }
};

export { getCart, addCartItem, deleteProduct };
