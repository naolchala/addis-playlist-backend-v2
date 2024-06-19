import cloudinary from "cloudinary";
import DataURIParser from "datauri/parser";
import path from "path";
import { Express } from "express";

cloudinary.v2.config({
	cloud_name: process.env.CLOUDINARY_NAME,
	api_key: process.env.CLOUDINARY_API_KEY,
	api_secret: process.env.CLOUDINARY_API_SECRET,
});

const parser = new DataURIParser();

export const uploadImage = async (
	image: Express.Multer.File,
	folder: string
) => {
	const base64Image = parser.format(
		path.extname(image.originalname).toString(),
		image.buffer
	);

	if (base64Image.content) {
		const uploadedImage = await cloudinary.v2.uploader.upload(
			base64Image.content,
			{
				folder,
				resource_type: "auto",
			}
		);
		return uploadedImage;
	}
};

export { cloudinary };
