import { dbQuery } from "@/middlewares/error.middleware.js";
import { RequestWithUser } from "@/types/request.type.js";
import Playlist from "@models/playlist/index.js";
import Song from "@models/song/index.js";
import HttpError from "@utils/HttpError.js";
import {
	CreateSongBody,
	UpdateSongBody,
} from "@validations/song.validation.js";
import { NextFunction, Response } from "express";

const createSong = dbQuery(async (req: RequestWithUser, res: Response) => {
	const { userId } = req;
	const data = req.body as CreateSongBody;
	const playlist = await Playlist.findByIdOrThrow(
		data.playlistID,
		userId ?? ""
	);
	const song = await Song.createSong(data, playlist);
	return res.status(200).json(song);
});

const updateSong = dbQuery(
	async (req: RequestWithUser, res: Response, next: NextFunction) => {
		const { userId } = req;
		const { id } = req.params;
		const data = req.body as UpdateSongBody;
		const song = await Song.findById(id);

		if (!song) {
			return next(
				new HttpError({
					status: 404,
					message: "Song not found",
				})
			);
		}

		const playlist = await Playlist.findById(song.playlistID);

		if (!playlist) {
			return next(
				new HttpError({
					status: 404,
					message: "Playlist not found",
				})
			);
		}

		if (playlist.userID !== userId) {
			return next(
				new HttpError({
					status: 403,
					message: "You are not authorized to update this song",
				})
			);
		}

		const updatedSong = await Song.findByIdAndUpdate(id, data, {
			new: true,
		});

		return res.status(200).json(updatedSong);
	}
);

const deleteSong = dbQuery(
	async (req: RequestWithUser, res: Response, next: NextFunction) => {
		const { userId } = req;
		const { id } = req.params;
		const song = await Song.findById(id);

		if (!song) {
			return next(
				new HttpError({
					status: 404,
					message: "Song not found",
				})
			);
		}

		const playlist = await Playlist.findById(song.playlistID);

		if (!playlist) {
			return next(
				new HttpError({
					status: 404,
					message: "Playlist not found",
				})
			);
		}

		if (playlist.userID !== userId) {
			return next(
				new HttpError({
					status: 403,
					message: "You are not authorized to delete this song",
				})
			);
		}

		playlist.songs = playlist.songs.filter((s) => s !== song.id);

		return song;
	}
);

const SongController = {
	createSong,
	updateSong,
	deleteSong,
};

export default SongController;
