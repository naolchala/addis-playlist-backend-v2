import { RequestWithUser } from "@/types/request.type";
import { JWT_SECRET } from "@configs/env.config";
import { NextFunction } from "express";
import * as jwt from "jsonwebtoken";
import { HttpError } from "./error.middleware";

export const generateUserToken = (id: string) => {
	const token = jwt.sign(id, JWT_SECRET);

	return token;
};

export const verifyJwt = (
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

	jwt.verify(token, JWT_SECRET, (err: any, id: any) => {
		if (err) {
			next(
				new HttpError({
					message: "Invalid Token",
					status: 403,
				})
			);
		}

		req.userId = id;
		next();
	});
};
