import Joi from "joi";

export interface IEnv {
	AUTH_SECRET: string;
	DB_URL: string;
	CLOUDINARY_NAME: string;
	CLOUDINARY_API_KEY: string;
	CLOUDINARY_API_SECRET: string;
}

const envSchema = Joi.object({
	AUTH_SECRET: Joi.string().required().min(32),
	DB_URL: Joi.string().required(),
	CLOUDINARY_NAME: Joi.string().required(),
	CLOUDINARY_API_KEY: Joi.string().required(),
	CLOUDINARY_API_SECRET: Joi.string().required(),
});

export default envSchema;
