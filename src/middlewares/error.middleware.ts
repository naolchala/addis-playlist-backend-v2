import HttpError from "@utils/HttpError";
import { NextFunction, Request, RequestHandler, Response } from "express";

export const errorMiddleware = (error: Error, req: Request, res: Response) => {
	if (error instanceof HttpError) {
		return res.status(error.status).json({
			message: error.message,
			...error.options,
		});
	}
	return res.status(500).json({ message: error.message ?? "oops" });
};

export const dbQuery =
	(fn: RequestHandler) =>
	(req: Request, res: Response, next: NextFunction) => {
		try {
			fn(req, res, next);
		} catch (error) {
			next(error);
		}
	};
