import ShopModel from "../modules/shops.js";
import validation from "../validations/validation.js";
import dotenv from "dotenv";

dotenv.config();

const getStaff = async (req, res) => {
  try {
    const users = await ShopModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).send("Error getting users");
  }
};

const addUser = async (req, res) => {
  try {
    const { error } = validation.staffValidation();
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }

    const AddminId = await ShopModel.findOne({
      staffID: req.body.staffID,
    });
    const user = await ShopModel.findOne({ email: req.body.email });
    if (AddminId)
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

const deleteUser = async (req, res) => {
  const userID = req.params.id;
  console.log(userID);
  try {
    const deleteUser = await ShopModel.findById(userID);

    if (!deleteUser) {
      return res.status(404).send("User not found");
    }
    res.status(200).send("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Error deleting user");
  }
};

export { getStaff, addUser, deleteUser };
