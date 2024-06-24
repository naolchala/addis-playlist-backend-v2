import { Schema } from "mongoose";
import * as statics from "./statics.js";
import * as methods from "./methods.js";
import { IPlaylist } from "./types.js";

const PlaylistSchema = new Schema<IPlaylist>(
	{
		label: { type: String, required: true },
		desc: { type: String },
		visibility: {
			type: String,
			enum: ["PUBLIC", "PRIVATE"],
			default: "PUBLIC",
		},
		playlistArtURL: { type: String, required: true },
		favorite: { type: Boolean, default: false },
		userID: { type: Schema.Types.ObjectId, ref: "User", required: true },
		sharedTo: [
			{
				type: Schema.Types.ObjectId,
				ref: "User",
				default: [],
			},
		],
		songs: [
			{
				type: Schema.Types.ObjectId,
				ref: "Song",
				default: [],
			},
		],
	},
	{
		timestamps: true,
		toJSON: {
			virtuals: true,
		},
		toObject: {
			virtuals: true,
		},
	}
);

PlaylistSchema.statics = statics;
PlaylistSchema.methods = methods;

export default PlaylistSchema;
