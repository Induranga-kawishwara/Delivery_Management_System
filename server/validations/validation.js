import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const employeeValidation = (data) => {
  const complexityOptions = {
    min: 8,
    max: 30,
    lowerCase: 1,
    upperCase: 1,
    numeric: 1,
    symbol: 1,
    requirementCount: 4,
  };

  const passwordSchema = Joi.string()
    .required()
    .label("Password")
    .custom((value, helpers) => {
      const complexityResult =
        passwordComplexity(complexityOptions).validate(value);
      if (complexityResult.error) {
        return helpers.error("Password must meet the complexity requirements");
      }
      return value;
    }, "complexity");

  const schema = Joi.object({
    title: Joi.string().required().label("Title"),
    firstName: Joi.string().required().label("First Name"),
    lastName: Joi.string().required().label("Last Name"),
    nic: Joi.string().required().label("Last Name"),
    phoneNum: Joi.string().required().label("Phone Number"),
    email: Joi.string().email().required().label("Email"),
    password: passwordSchema,
    gender: Joi.string().required().label("Gender"),
    houseNo: Joi.string().required().label("House Number"),
    street: Joi.string().required().label("Street"),
    city: Joi.string().required().label("City"),
    location: Joi.string().required().label("Location"),
    birthday: Joi.date()
      .required()
      .max("now")
      .label("Birthday")
      .min(new Date().getFullYear() - 20, "YYYY")
      .label("Age"),
    typeOfPosition: Joi.string().required().label("Type of Position"),
  });

  return schema.validate(data);
};

export default employeeValidation;
