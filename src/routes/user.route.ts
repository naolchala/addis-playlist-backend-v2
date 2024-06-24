import UserController from "@controllers/user.controller.js";
import {
	loginValidator,
	registerValidator,
} from "@validations/user.validators.js";
import { Router } from "express";
import validateBody from "@/middlewares/validate.middleware.js";

const UserRouter = Router();

UserRouter.post("/login", validateBody(loginValidator), UserController.login);

UserRouter.post(
	"/register",
	validateBody(registerValidator),
	UserController.register
);

export default UserRouter;
