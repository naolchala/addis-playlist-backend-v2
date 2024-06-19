import { Schema } from "mongoose";

export type PlaylistVisibility = "PUBLIC" | "PRIVATE";

export interface IPlaylist {
	label: string;
	desc?: string;
	visibility: PlaylistVisibility;
	playlistArtURL: string;
	favorite: boolean;
	userID: string;

	createdAt: Date;
	updatedAt: Date;
}

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

export default PlaylistSchema;
