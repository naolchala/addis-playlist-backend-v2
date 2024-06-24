import { Schema } from "mongoose";
import { ISong } from "./types.js";

const songSchema = new Schema<ISong>(
	{
		title: {
			type: String,
			required: true,
		},
		album: String,
		artist: {
			type: String,
			required: true,
		},
		duration: Number,
		releaseYear: Number,
		deezerURL: String,
		playlistID: {
			type: Schema.Types.ObjectId,
			ref: "Playlist",
			required: true,
		},
	},
	{
		timestamps: true,
	}
);

export default songSchema;
