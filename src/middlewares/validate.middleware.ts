import HttpError from "@utils/HttpError";
import { NextFunction, Request, Response } from "express";
import Joi from "joi";

const validateBody =
	(schema: Joi.Schema) =>
	(req: Request, res: Response, next: NextFunction) => {
		const { error } = schema.validate(req.body);
		if (error) {
			next(
				new HttpError({
					message: error.message,
					status: 400,
					options: {
						field: error.details[0].path[0],
					},
				})
			);
		}

		next();
	};

export default validateBody;
