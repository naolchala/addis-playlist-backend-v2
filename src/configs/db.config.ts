import mongoose from "mongoose";
import ENV from "./env.config";

const createDbConnection = async () => {
	try {
		await mongoose
			.connect(ENV.DB_URL)
			.then(() => console.log("DB connected"));
	} catch (error) {
		console.log("Could not connect to DB");
		console.log(error);
	}
};

export default createDbConnection;
