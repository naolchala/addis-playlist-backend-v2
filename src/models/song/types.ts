import { IPlaylist } from "@models/playlist/types.js";
import { CreateSongBody } from "@validations/song.validation.js";
import { Types, Model, HydratedDocument } from "mongoose";

export interface ISong {
	title: string;
	album?: string;
	artist: string;
	duration?: number;
	releaseYear?: number;
	deezerURL?: string;
	playlistID: Types.ObjectId;

	createdAt?: Date;
	updatedAt?: Date;
}

export interface SongMethods {}

export interface SongModel extends Model<ISong, {}, SongMethods> {
	createSong: (
		data: CreateSongBody,
		playlist: HydratedDocument<IPlaylist>
	) => Promise<HydratedDocument<ISong>>;
}
