import { NextFunction, Response } from "express";
import { dbQuery } from "@/middlewares/error.middleware";
import { RequestWithFile, RequestWithUser } from "@/types/request.type";
import Playlist from "@models/playlist";
import HttpError from "@utils/HttpError";
import { uploadImage } from "@utils/cloudinary";
import {
	CreatePlaylistBody,
	EditPlaylistBody,
	SearchPlaylistQuery,
	SharePlaylistBody,
} from "@validations/playlist.validation";

const createPlaylist = dbQuery(
	async (req: RequestWithFile, res: Response, _next: NextFunction) => {
		const { file, userId } = req;
		const { label, desc, visibility } = req.body as CreatePlaylistBody;

		let playlistArt;
		if (file) {
			const uploadStatus = await uploadImage(file, "PlaylistArt");
			playlistArt = uploadStatus?.url;
		}

		const playlist = new Playlist({
			label,
			desc,
			visibility,
			userID: userId,
			playlistArtURL: playlistArt,
		});

		await playlist.save();

		return res.json(playlist);
	}
);

const updatePlaylist = dbQuery(async (req: RequestWithUser, res: Response) => {
	const { userId } = req;
	const { id } = req.params;
	const { label, desc, visibility } = req.body as EditPlaylistBody;

	const playlist = await Playlist.findById(id);

	if (!playlist) {
		throw new HttpError({
			status: 404,
			message: "Playlist not found",
		});
	}

	if (playlist?.userID !== userId) {
		throw new HttpError({
			status: 403,
			message: "You are not allowed to edit this playlist",
		});
	}

	const updatedPlaylist = await Playlist.findByIdAndUpdate(
		id,
		{
			label,
			desc,
			visibility,
		},
		{ new: true }
	);

	return res.status(200).json(updatedPlaylist);
});

const deletePlaylist = dbQuery(async (req: RequestWithUser, res: Response) => {
	const { id } = req.params;
	const { userId } = req;

	const playlist = await Playlist.findById(id);
	if (!playlist) {
		throw new HttpError({
			status: 404,
			message: "Playlist not found",
		});
	}

	if (playlist?.userID !== userId) {
		throw new HttpError({
			status: 403,
			message: "You are not allowed to delete this playlist",
		});
	}

	const deletedPlaylist = await Playlist.findByIdAndDelete(id);

	return res.json(deletedPlaylist);
});

const searchPlaylist = dbQuery(async (req: RequestWithUser, res: Response) => {
	const { userId } = req;
	const filters = req.query as SearchPlaylistQuery;

	const playlists = await Playlist.search({
		userId: userId ?? "",
		filters,
	});

	return res.json(playlists);
});

const searchPublicPlaylist = dbQuery(
	async (req: RequestWithUser, res: Response) => {
		const filters = req.query as SearchPlaylistQuery;

		const playlists = await Playlist.getPublicPlaylists({
			filters,
		});

		return res.json(playlists);
	}
);

const searchSharedPlaylist = dbQuery(
	async (req: RequestWithUser, res: Response) => {
		const { userId } = req;
		const filters = req.query as SearchPlaylistQuery;

		const playlists = await Playlist.getSharedPlaylists({
			userId: userId ?? "",
			filters,
		});

		return res.json(playlists);
	}
);

const sharePlaylist = dbQuery(async (req: RequestWithUser, res: Response) => {
	const { id } = req.params;
	const { userId } = req;
	const { email } = req.body as SharePlaylistBody;

	const playlist = await Playlist.findById(id);

	if (!playlist) {
		throw new HttpError({
			status: 404,
			message: "Playlist not found",
		});
	}

	if (playlist?.userID !== userId) {
		throw new HttpError({
			status: 403,
			message: "You are not allowed to share this playlist",
		});
	}

	const sharedUser = await playlist.share(email);

	return res.json(sharedUser);
});

const PlaylistController = {
	createPlaylist,
	updatePlaylist,
	deletePlaylist,
	searchPlaylist,
	searchPublicPlaylist,
	searchSharedPlaylist,
	sharePlaylist,
};

export default PlaylistController;
