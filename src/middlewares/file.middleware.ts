import HttpError from "@utils/HttpError.js";
import multer, { memoryStorage } from "multer";

const imageUpload = multer({
	storage: memoryStorage(),
	limits: {
		fileSize: 5 * 1024 * 1024,
		files: 1,
	},
	fileFilter: (req, file, cb) => {
		if (!file.mimetype.startsWith("image/")) {
			return cb(
				new HttpError({
					status: 400,
					message: "Only Image files are allowed",
				})
			);
		}

		cb(null, true);
	},
});

const playlistImageUpload = imageUpload.single("playlistArt");

const FileMiddlewares = {
	playlistImageUpload,
};

export default FileMiddlewares;
