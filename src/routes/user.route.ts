import UserController from "@controllers/user.controller";
import User from "@models/user";
import { dbQuery, errorMiddleware } from "@utils/error.middleware";
import { validateBody } from "@validations/index";
import {
	loginValidator,
	registerValidator,
} from "@validations/user.validators";
import { Router } from "express";

const UserRouter = Router();

UserRouter.post("/login", validateBody(loginValidator), UserController.login);

UserRouter.post(
	"/register",
	validateBody(registerValidator),
	UserController.register
);

export default UserRouter;
