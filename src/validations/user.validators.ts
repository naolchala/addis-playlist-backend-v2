import Joi from "joi";

export const loginValidator = Joi.object({
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
});

export const registerValidator = Joi.object({
	firstName: Joi.string().required(),
	lastName: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
});

export interface UserRegisterBody {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
}

export interface UserLoginBody {
	email: string;
	password: string;
}
