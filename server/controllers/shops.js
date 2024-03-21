import ShopModel from "../modules/shops.js";
import validation from "../validations/validation.js";
import dotenv from "dotenv";

dotenv.config();

const getShopDetails = async (req, res) => {
  try {
    const users = await ShopModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting Shops' detils:", error);
    res.status(500).send("Error getting Shops' detils");
  }
};

const addShopDetails = async (req, res) => {
  try {
    // const { error } = validation.staffValidation();
    // if (error) {
    //   return res.status(400).send({ message: error.details[0].message });
    // }

    const ShopId = await ShopModel.findOne({
      shopId: req.body.shopId,
    });
    const phoneNo = await ShopModel.findOne({ shopNo: req.body.shopNo });
    if (ShopId)
      return res.status(409).send({ message: "This shop id already Exist!" });

    if (phoneNo)
      return res
        .status(409)
        .send({ message: "This phone number already Exist!" });
    await new ShopModel(req.body).save();
    res.status(201).send("Shop saved successfully!");
  } catch (error) {
    console.error("Error adding Shop:", error);
    console.log(req.body);
    res.status(500).send("Error adding Shop");
  }
};

const DeleteShopDetails = async (req, res) => {
  const userID = req.params.id;
  console.log(userID);
  try {
    const deleteUser = await ShopModel.findById(userID);

    if (!deleteUser) {
      return res.status(404).send("Shop not found");
    }
    res.status(200).send("Shop deleted successfully");
  } catch (error) {
    console.error("Error deleting Shop:", error);
    res.status(500).send("Error deleting Shop");
  }
};

export { getShopDetails, addShopDetails, DeleteShopDetails };
