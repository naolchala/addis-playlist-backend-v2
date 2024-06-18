import http from "http";
import dotenv from "dotenv";
import app from "./app";

dotenv.config();

const server = http.createServer(app);
const port = process.env.PORT || 5000;

server.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
