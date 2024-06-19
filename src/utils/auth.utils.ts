import { JWT_SECRET } from "@configs/env.config";
import * as jwt from "jsonwebtoken";

const generateUserToken = (id: string) => {
	const token = jwt.sign(id, JWT_SECRET);
	return token;
};

const AuthUtils = {
	generateUserToken,
};

export default AuthUtils;
