import mongoose, { Model } from "mongoose";
import PlaylistSchema, { IPlaylist } from "./schema";

interface PlaylistModel extends Model<IPlaylist> {}

const Playlist = mongoose.model<IPlaylist, PlaylistModel>(
	"Playlist",
	PlaylistSchema
);

export default Playlist;
