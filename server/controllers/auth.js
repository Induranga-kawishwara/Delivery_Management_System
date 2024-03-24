import bcrypt from "bcrypt";
import Joi from "joi";
import jwt from "../jwt/jwt.js";
import adminModel from "../modules/admin.js";
import EmployeeModel from "../modules/employee.js";
import UserModel from "../modules/user.js";

const authuser = async (req, res) => {
  try {
    const { error } = validate({
      email: req.body.email,
      password: req.body.password,
    });
    if (error)
      return res.status(400).send({ message: error.details[0].message });

    let user;
    let validPassword = false;

    if (req.body.from === "user") {
      user = await UserModel.findOne({ email: req.body.email });
      validPassword = await bcrypt.compare(req.body.password, user.password);
    } else if (req.body.from === "employee") {
      user = await EmployeeModel.findOne({ email: req.body.email });
      validPassword = await bcrypt.compare(req.body.password, user.password);
    } else {
      user = await adminModel.findOne({ email: req.body.email });
      validPassword = req.body.password === user.password;
    }

    if (!user)
      return res.status(401).send({ message: "Invalid Email or Password" });

    if (!validPassword)
      return res.status(401).send({ message: "Invalid Password" });

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
