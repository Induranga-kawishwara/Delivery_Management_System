import EmployeeModel from "../modules/employee.js";
import employeeValidation from "../validations/validation.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const getEmployees = async (req, res) => {
  try {
    const users = await EmployeeModel.find();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).send("Error getting users");
  }
};

const addgetEmployee = async (req, res) => {
  try {
    const { error } = employeeValidation(req.body);
    if (error) {
      return res.status(400).send({ message: error.details[0].message });
    }
    const user = await EmployeeModel.findOne({ email: req.body.email });
    if (user) {
      return res
        .status(409)
        .send({ message: "User with given email already Exist!" });
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashPassword = await bcrypt.hash(req.body.password, salt);
    await new EmployeeModel({ ...req.body, password: hashPassword }).save();

    res.status(201).send("User saved successfully!");
  } catch (error) {
    console.error("Error adding user:", error);
    res.status(500).send("Error adding user");
    console.log(error);
  }
};

const deleteEmployee = async (req, res) => {
  const userID = req.params.id;
  console.log(userID);
  try {
    const deleteUser = await EmployeeModel.findById(userID);

    if (!deleteUser) {
      return res.status(404).send("User not found");
    }
    res.status(200).send("User deleted successfully");
  } catch (error) {
    console.error("Error deleting user:", error);
    res.status(500).send("Error deleting user");
  }
};

export { getEmployees, addgetEmployee, deleteEmployee };
