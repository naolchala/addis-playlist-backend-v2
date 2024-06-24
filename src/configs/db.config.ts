import mongoose from "mongoose";
import logger from "@utils/logger.js";
import ENV from "./env.config.js";

const createDbConnection = async () => {
	try {
		await mongoose
			.connect(ENV.DB_URL)
			.then(() => logger.info("DB connected"));
	} catch (error) {
		logger.error("Could not connect to DB");
		logger.error(error);
	}
};

export default createDbConnection;
