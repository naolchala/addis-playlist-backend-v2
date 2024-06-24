import { RequestWithUser } from "@/types/request.type.js";
import ENV from "@configs/env.config.js";
import HttpError from "@utils/HttpError.js";
import { NextFunction, Response } from "express";
import * as jwt from "jsonwebtoken";

const authenticate = (
	req: RequestWithUser,
	res: Response,
	next: NextFunction
) => {
	const authHeader = req.headers?.authorization;
	const token = authHeader && authHeader?.split(" ")[1];

	if (!token) {
		return next(
			new HttpError({
				status: 403,
				message: "Invalid Authentication Token",
			})
		);
	}

	jwt.verify(token, ENV.AUTH_SECRET, (err: unknown, id) => {
		if (err) {
			next(
				new HttpError({
					message: "Invalid Token",
					status: 403,
				})
			);
		}

		req.userId = id as string;
		next();
	});
};

export default authenticate;
