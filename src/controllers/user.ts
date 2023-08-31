import { createUser, getUserByEmail, getUserByPassword, getUsers } from "../db/users";
import express from "express";
import { generateToken } from "../helpers/index";

export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { username, email, password } = req.body;

    if (!username || !password || !email) {
      return res.status(404).json({ Error: "Not Found" }).end();
    }
    const existingEmail = await getUserByEmail(email);
    if (existingEmail) return res.status(400).json({ Error: "User Already Exist" }).end();

    const user = await createUser({
      username,
      email,
      password,
    });
    return res.status(200).json({registeredUser: user}).end();
  } catch (error) {
    console.log(error);
    return res.status(404);
  }
};

export const login = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(404).json({ Error: "Not Found" }).end();
    }

    const user = await getUserByEmail(email);
    if (!user) {
      return res.status(404).json({ Error: "User Not Found" }).end();
    }

    const isPasswordValid = await getUserByPassword(password);
    if (!isPasswordValid) {
      return res.status(401);
    }

    const token = generateToken(email); // Generate JWT token
    console.log(token);
    return res.status(200).json({ token }).end();
  } catch (error) {
    console.log(error);
    return res.status(500);
  }
};

export const getUser = async (req: express.Request, res: express.Response) => {
  try {
    const user = await getUsers();
    if(!user) {
      return res.status(200).json({
        message: "User not found"
      })
    }
    return res.status(200).json({
      usersList: user
    })
  } catch (error) {
    console.log(error);
  }
}
