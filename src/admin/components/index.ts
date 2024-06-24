import { ComponentLoader } from "adminjs";
import path from "path";
import * as url from "url";

const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
export const componentLoader = new ComponentLoader();

export const Components = {
	ProfilePicture: componentLoader.add(
		"ProfilePicture",
		path.join(__dirname, "profile")
	),
};
