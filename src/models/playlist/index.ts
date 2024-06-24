import mongoose from "mongoose";
import PlaylistSchema from "./schema.js";
import { IPlaylist, PlaylistModel } from "./types.js";

const Playlist = mongoose.model<IPlaylist, PlaylistModel>(
	"Playlist",
	PlaylistSchema
);

export default Playlist;
