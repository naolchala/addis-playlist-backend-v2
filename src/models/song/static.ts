import { HydratedDocument, Model } from "mongoose";
import { CreateSongBody } from "@validations/song.validation";
import { IPlaylist } from "@models/playlist/types";
import { ISong } from "./types";
import Song from ".";

// eslint-disable-next-line import/prefer-default-export
export async function createSong(
	this: Model<ISong>,
	data: CreateSongBody,
	playlist: HydratedDocument<IPlaylist>
) {
	const song = new Song(data);
	await song.save();

	playlist.songs.push(song._id);
	playlist.save();

	return song;
}
