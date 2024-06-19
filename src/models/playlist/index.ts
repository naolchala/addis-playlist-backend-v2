import mongoose from "mongoose";
import PlaylistSchema from "./schema";
import { IPlaylist, PlaylistModel } from "./types";

const Playlist = mongoose.model<IPlaylist, PlaylistModel>(
	"Playlist",
	PlaylistSchema
);

export default Playlist;
