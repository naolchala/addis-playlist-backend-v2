import express from "express";
import cors from "cors";
import helmet from "helmet";

import morgan from "morgan";
import router from "@routes/index.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import { admin, adminRouter } from "./admin/components/admin.js";

const app = express();
app.use(
	cors({
		origin: ["*"],
	})
);
app.use(express.json());
app.use(
	helmet({
		contentSecurityPolicy: {
			directives: {
				defaultSrc: ["'self'"],
				scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
				styleSrc: ["'self'", "https:", "'unsafe-inline'"],
				baseUri: ["'self'"],
				fontSrc: ["'self'", "https:", "data:"],
			},
		},
	})
);

app.use(morgan("dev"));
app.use(admin.options.rootPath, adminRouter);
app.use("/api", router);
app.use(errorMiddleware);

export default app;
