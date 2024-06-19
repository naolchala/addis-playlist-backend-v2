import UserController from "@controllers/user.controller";
import User from "@models/user";
import { dbQuery, errorMiddleware } from "@/middlewares/error.middleware";
import {
	loginValidator,
	registerValidator,
} from "@validations/user.validators";
import { Router } from "express";
import { validateBody } from "@/middlewares/validate.middleware";

const UserRouter = Router();

UserRouter.post("/login", validateBody(loginValidator), UserController.login);

UserRouter.post(
	"/register",
	validateBody(registerValidator),
	UserController.register
);

export default UserRouter;
