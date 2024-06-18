import mongoose from "mongoose";
import { DB_URL } from "./env.config";

export const createDbConnection = async () => {
	if (!DB_URL) {
		throw new Error("DB_URL is not defined");
	}

	try {
		await mongoose.connect(DB_URL).then(() => console.log("DB connected"));
	} catch (error) {
		console.log("Could not connect to DB");
		console.log(error);
	}
};
