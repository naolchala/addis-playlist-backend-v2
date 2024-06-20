import envSchema, { IEnv } from "@validations/env.validation";
import dotenv from "dotenv";

const loadEnvironment = () => {
	console.log("Loading env");
	dotenv.config();
	const environment = process.env;

	const { error, value } = envSchema.validate(environment);

	if (error) {
		console.error(error);
		throw new Error(
			`Environment Validation Error: ${error.details[0].path}, ${error.details[0].message}`
		);
	}

	return value as IEnv;
};

const ENV = loadEnvironment();

export default ENV;
