import { dbQuery } from "@/middlewares/error.middleware";
import { RequestWithFile } from "@/types/request.type";
import Playlist from "@models/playlist";
import { uploadImage } from "@utils/cloudinary";
import { CreatePlaylistBody } from "@validations/playlist.validation";
import { NextFunction, Response } from "express";

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

const PlaylistController = {
	createPlaylist,
};

export default PlaylistController;
