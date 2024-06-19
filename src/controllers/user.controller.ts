import User from "@models/user";
import {
	UserLoginBody,
	UserRegisterBody,
	registerValidator,
} from "@validations/user.validators";
import { NextFunction, Request, Response } from "express";
import * as bcrypt from "bcrypt";
import { HttpError, dbQuery } from "@utils/error.middleware";
import _ from "lodash";
import { generateUserToken } from "@utils/auth.utils";

const login = dbQuery(
	async (req: Request, res: Response, next: NextFunction) => {
		const { email, password } = req.body as UserLoginBody;
		const user = await User.findOne({
			email,
		});

		if (!user) {
			throw new HttpError({
				status: 404,
				message: "User with such email not found",
				options: {
					field: "email",
				},
			});
		}

		const match = await bcrypt.compare(password, user.password);

		if (!match) {
			throw new HttpError({
				status: 403,
				message: "Incorrect Password",
				options: {
					field: "password",
				},
			});
		}

		const response = _.omit(user.toObject(), "password");
		const token = generateUserToken(user.id);
		return res.status(200).json({ ...response, token });
	}
);

const register = dbQuery(
	async (req: Request, res: Response, next: NextFunction) => {
		const { password, ...data } = req.body as UserRegisterBody;
		const hashedPassword = await bcrypt.hash(password, 10);

		const photoURL = `https://api.dicebear.com/5.x/initials/svg?seed=${encodeURI(
			data.firstName + " " + data.lastName
		)}`;
		const currentUser = await User.findOne({
			email: data.email,
		}).countDocuments();

		if (currentUser) {
			throw new HttpError({
				message: "User with that email already exists",
				options: {
					field: "email",
				},
			});
		}

		const user = new User({
			...data,
			password: hashedPassword,
			photoURL,
		});

		await user.save();
		return res.json(_.omit(user.toObject(), "password"));
	}
);

const UserController = {
	login,
	register,
};
export default UserController;