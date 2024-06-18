import http from "http";
import dotenv from "dotenv";
import app from "./app";
import { createDbConnection } from "@configs/db.config";

dotenv.config();
createDbConnection();

const server = http.createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
