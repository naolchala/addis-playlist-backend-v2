import { RequestWithUser } from "@/types/request.type";
import { JWT_SECRET } from "@configs/env.config";
import HttpError from "@utils/HttpError";
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

	jwt.verify(token, JWT_SECRET, (err: unknown, id) => {
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
