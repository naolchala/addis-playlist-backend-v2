import { JWT_SECRET } from "@configs/env.config";
import * as jwt from "jsonwebtoken";

export const generateUserToken = (id: string) => {
	const token = jwt.sign(id, JWT_SECRET);
	return token;
};
