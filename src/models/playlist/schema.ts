import { Schema } from "mongoose";
import * as statics from "./statics";
import * as methods from "./methods";
import { IPlaylist } from "./types";

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
		userID: { type: String, required: true },
		sharedTo: [
			{
				type: Schema.ObjectId,
				ref: "User",
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
