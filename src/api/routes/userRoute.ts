import express from "express";
import UserController from "../controllers/UserController";

const userRoute = express.Router();
const userController = new UserController();

userRoute.post("/user", (req, res) => userController.create(req, res));
userRoute.get("/user/:id", (req, res) => userController.findById(req, res));
userRoute.get("/user", (req, res) => userController.findAll(req, res));
userRoute.put("/user/:id", (req, res) => userController.update(req, res));
userRoute.delete("/user/:id", (req, res) => userController.delete(req, res));

export default userRoute;
