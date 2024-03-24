import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "../jwt/jwt.js";
import adminModel from "../modules/admin.js";
import EmployeeModel from "../modules/employee.js";
import UserModel from "../modules/user.js";

const authuser = async (req, res) => {
  try {
    const { error } = validate(req.body);
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    let user;

    const admin = await adminModel.findOne({ email: req.body.email });
    const employee = await EmployeeModel.findOne({ email: req.body.email });
    const normalUser = await UserModel.findOne({ email: req.body.email });

    if (!admin && !employee && !normalUser)
      return res.status(401).send({ message: "Invalid Email or Password" });

    let validPassword = false;

    if (admin) {
      validPassword = req.body.password === admin.password;
      user = admin;
    } else if (employee) {
      validPassword = await bcrypt.compare(
        req.body.password,
        employee.password
      );
      user = employee;
    } else {
      validPassword = await bcrypt.compare(
        req.body.password,
        normalUser.password
      );
      user = normalUser;
    }

    if (!validPassword)
      return res.status(401).send({ message: "Invalid Email or Password" });

    const token = jwt(user);
    console.log(user._id);

    res
      .status(200)
      .send({ data: token, message: "Logged in successfully", id: user._id });
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Internal Server Error" });
  }
};

const validate = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required().label("Email"),
    password: Joi.string().required().label("Password"),
  });
  return schema.validate(data);
};

export { authuser };
