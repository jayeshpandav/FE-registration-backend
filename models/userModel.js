const Joi = require("joi");

const userSchema = Joi.object({
  email: Joi.string().email().required(),
  phone: Joi.string()
    .regex(/^\d{10}$/)
    .required(),
  first_name: Joi.string().max(50),
  middleName: Joi.string().max(50),
  last_name: Joi.string().max(50),
  year: Joi.string().valid("FE", "SE", "TE", "BE"),
  div: Joi.string().max(10),
  roll_no: Joi.string().max(20),
  department: Joi.string().max(50),
  expectation: Joi.string().max(500),
  payment_id: Joi.string().allow(""),
  trId: Joi.string().max(50),
  receiptImage: Joi.any(), //adjust this for file validation
});

module.exports = userSchema;
