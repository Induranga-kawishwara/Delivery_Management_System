import ShopModel from "../modules/products.js";
import validation from "../validations/validation.js";
import dotenv from "dotenv";

dotenv.config();

const getProducts = async (req, res) => {
  try {
    const users = await ShopModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).send("Error getting users");
  }
};

const addProduct = async (req, res) => {
  try {
    const ProductName = await ShopModel.findOne({
      staffID: req.body.staffID,
    });
    const user = await ShopModel.findOne({ email: req.body.email });
    if (ProductName)
      return res
        .status(409)
        .send({ message: "Addmin with given id already Exist!" });

    if (user)
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });
    await new ShopModel(req.body).save();
    res.status(201).send("User saved successfully!");
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("Error adding user");
  }
};

const deleteProduct = async (req, res) => {
  const userID = req.params.id;
  console.log(userID);
  try {
    const deleteProduct = await ShopModel.findById(userID);

    if (!deleteProduct) {
      return res.status(404).send("User not found");
    }
    res.status(200).send("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Error deleting user");
  }
};

export { getProducts, addProduct, deleteProduct };
