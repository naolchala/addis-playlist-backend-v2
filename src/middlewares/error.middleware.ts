/* eslint-disable no-unused-vars */
import { RequestWithUser } from "@/types/request.type.js";
import HttpError from "@utils/HttpError.js";
import { NextFunction, Request, Response } from "express";

export const errorMiddleware = (
	error: Error,
	req: Request,
	res: Response,
	_next: NextFunction
) => {
	if (error instanceof HttpError) {
		return res.status(error.status).json({
			message: error.message,
			...error.options,
		});
	}
	return res.status(500).json({ message: error.message ?? "oops" });
};

export const dbQuery =
	(
		fn: (
			req: Request | RequestWithUser,
			res: Response,
			next: NextFunction
		) => Promise<unknown | void>
	) =>
	(req: Request | RequestWithUser, res: Response, next: NextFunction) => {
		fn(req, res, next).catch(next);
	};
