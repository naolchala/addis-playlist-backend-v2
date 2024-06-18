import { NextFunction, Request, Response, Router } from "express";

export const errorMiddleware = (
	error: Error,
	req: Request,
	res: Response,
	next: NextFunction
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
	(fn: (req: Request, res: Response, next: NextFunction) => Promise<any>) =>
	(req: Request, res: Response, next: NextFunction) => {
		fn(req, res, next).catch(next);
	};

export class HttpError extends Error {
	public status: number;
	public options: any;
	constructor({
		status,
		message,
		options,
	}: {
		status?: number;
		message: string;
		options?: any;
	}) {
		super(message);
		this.status = status ?? 500;
		this.options = options;
	}
}
