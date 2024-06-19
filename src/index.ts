import http from "http";
import dotenv from "dotenv";
import createDbConnection from "@configs/db.config";
import app from "./app";

dotenv.config();
createDbConnection();

const server = http.createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
