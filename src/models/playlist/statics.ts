import { Model } from "mongoose";
import HttpError from "@utils/HttpError";
import { IPlaylist, SearchPlaylistStaticParams } from "./types";

export async function findByIdOrThrow(
	this: Model<IPlaylist>,
	id: string,
	userID: string
) {
	const playlist = await this.findById(id);
	if (!playlist) {
		throw new HttpError({
			status: 404,
			message: "Playlist not found",
		});
	}

	if (playlist.userID !== userID) {
		throw new HttpError({
			status: 403,
			message: "You are not allowed to access this playlist",
		});
	}

	return playlist;
}

export async function search(
	this: Model<IPlaylist>,
	params: SearchPlaylistStaticParams
) {
	const { userId, filters } = params;
	const { keyword, orderBy, orderDirn, visibility } = filters;

	const queryBuilder = this.find({
		userID: userId,
	});

	if (keyword) {
		queryBuilder.find({
			label: { $regex: keyword, $options: "i" },
		});
	}

	if (visibility) {
		queryBuilder.find({
			visibility,
		});
	}

	if (orderBy && orderDirn) {
		queryBuilder.sort({ [orderBy]: orderDirn });
	}

	const playlists = await queryBuilder.exec();

	return playlists;
}

export async function getPublicPlaylists(
	this: Model<IPlaylist>,
	params: Omit<SearchPlaylistStaticParams, "userId">
) {
	const { filters } = params;
	const { keyword, orderBy, orderDirn } = filters;

	const queryBuilder = this.find({
		visibility: "PUBLIC",
	});

	if (keyword) {
		queryBuilder.find({
			label: { $regex: keyword, $options: "i" },
		});
	}

	if (orderBy && orderDirn) {
		queryBuilder.sort({ [orderBy]: orderDirn });
	}

	const playlists = await queryBuilder.exec();

	return playlists;
}

// export async function getSharedPlaylists(
// 	this: Model<IPlaylist>,
// 	params: SearchPlaylistStaticParams
// ) {
// 	const { filters, userId } = params;
// 	const queryBuilder = this.find({
// 		sharedTo:
// 	});
// }
