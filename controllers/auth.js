import User from "../models/user_model.js";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const register = async (req, res) => {
  console.log(req.body);
  try {
    const newUser = await User.create(req.body);
    return res.status(201).json({ message: `Welcome ${newUser.username}` });
  } catch (err) {
    return res.status(422).json(err);
  }
};

export const login = async (req, res) => {
  try {
    console.log("hitting the correct endpoint");
    // * find the user in the db
    const userToLogin = await User.findOne({ email: req.body.email });
    console.log(userToLogin);
    // * check if the user exists, and that the passwords match, if either are false throw an error
    if (!userToLogin || !userToLogin.validatePassword(req.body.password)) {
      // throw new Error();
      console.log("this is the error");
    }

    // * generate a token for the user
    // * we need to pass "sign" the "sub" which is the id of the user
    // * 2nd we pass the secret it needs to encode the token
    // * 3rd we pass it when the token should expire
    const token = jwt.sign({ sub: userToLogin._id }, process.env.SECRET, {
      expiresIn: "1 day",
    });
    // * return the token in the response along with a message
    return res.status(200).json({ userToLogin, token });
  } catch (err) {
    return res.status(404).json({ message: "Unauthorized" });
  }
};
