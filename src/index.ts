import http from "http";
import dotenv from "dotenv";
import createDbConnection from "@configs/db.config.js";
import logger from "@utils/logger.js";
import app from "./app.js";
import { admin } from "./admin/components/admin.js";

dotenv.config();
createDbConnection();

const server = http.createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => {
	logger.info(`Server is running on port ${port}`);
	logger.info(`Admin Portal served at ${admin.options.rootPath}`);
});
