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
    const existingProduct = await ShopModel.findOne({
      productName: req.body.productName,
    });

    if (existingProduct) {
      if (existingProduct.sizes && Array.isArray(existingProduct.sizes)) {
        const sizeIndex = existingProduct.sizes.findIndex(
          (size) => size.size === req.body.size
        );

        if (sizeIndex !== -1) {
          existingProduct.sizes[sizeIndex].shopPrice = req.body.shopPrice;
          await existingProduct.save();

          return res.status(200).send({
            message: "Shop price updated for the existing size of the product!",
          });
        }

        const priceExists = existingProduct.sizes.some(
          (size) => size.price === req.body.price
        );

        if (priceExists) {
          return res.status(409).send({
            message: "Price already exists for another size of the product!",
          });
        }

        existingProduct.sizes.push({
          size: req.body.size,
          price: req.body.price,
          shopPrice: req.body.shopPrice,
        });
        await existingProduct.save();

        return res.status(200).send({
          message:
            "New size, price, and shop price added to the existing product!",
        });
      } else {
        return res.status(500).send({
          message:
            "Sizes array is missing or not properly formatted in the database!",
        });
      }
    }
    console.log(req.body.productName);
    const newProduct = new ShopModel({
      productName: req.body.productName,
      sizes: [
        {
          size: req.body.size,
          price: req.body.price,
          shopPrice: req.body.shopPrice,
        },
      ],
      image: req.body.image,
    });
    console.log(newProduct);

    await newProduct.save();
    res.status(201).send("Product saved successfully!");
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send("Error adding product");
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
