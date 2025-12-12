import express from "express";
import { hash, compare } from "bcryptjs";
import { UserModel } from "../models/UserModel.js";
import { generateToken } from "../utils/generateToken.js";
import { sendResponse } from "../utils/response.js";
import { validateRegister } from "../utils/validators.js";

export const authRoute = express.Router();
//register
authRoute.post("/register", async (req, res) => {
  try {
    const error = validateRegister(req.body);
    if (error) return sendResponse(res, 400, error);
    const { name, email, password, role } = req.body;
    const exists = await UserModel.findOne({ email });
    if (exists) return sendResponse(res, 400, "Email already registered");
    const hashed = await hash(password, 12);
    const user = new UserModel({
      name,
      email,
      password: hashed,
      role: role || "customer",
    });

    await user.save();

    return sendResponse(res, 201, "User registered", { id: user._id });
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});

//login
authRoute.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await UserModel.findOne({ email });
    if (!user) return sendResponse(res, 400, "Invalid email");

    const ok = await compare(password, user.password);
    if (!ok) return sendResponse(res, 400, "Invalid password");
    const token = generateToken(user);
    res.cookie("token", token, {
      httpOnly: true,
      secure: false, 
      sameSite: "lax",
    });
    return sendResponse(res, 200, "Login successful", {
      token,
      role: user.role,
      id: user._id,
    });
  } catch (err) {
    return sendResponse(res, 500, err.message);
  }
});
//logout
authRoute.post("/logout", (req, res) => {
  res.clearCookie("token");
  return sendResponse(res, 200, "Logout successful");
});
