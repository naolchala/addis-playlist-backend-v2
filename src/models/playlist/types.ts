// eslint-disable-next-line import/no-cycle
import { SearchPlaylistQuery } from "@validations/playlist.validation.js";
import { IUser } from "@models/user/schema.js";
import { HydratedDocument, Model, Types } from "mongoose";

export type PlaylistVisibility = "PUBLIC" | "PRIVATE";

export interface SearchPlaylistStaticParams {
	userId: string;
	filters: SearchPlaylistQuery;
}

export interface IPlaylist {
	label: string;
	desc?: string;
	visibility: PlaylistVisibility;
	playlistArtURL: string;
	favorite: boolean;
	userID: Types.ObjectId;
	sharedTo: Types.ObjectId[];
	songs: Types.ObjectId[];

	createdAt: Date;
	updatedAt: Date;
}

export interface IPlaylistMethods {
	share: (userId: string) => Promise<HydratedDocument<IUser>>;
}

export interface PlaylistModel extends Model<IPlaylist, {}, IPlaylistMethods> {
	findByIdOrThrow: (
		this: Model<IPlaylist>,
		id: string,
		userID: string
	) => Promise<HydratedDocument<IPlaylist>>;
	search: (
		params: SearchPlaylistStaticParams
	) => Promise<HydratedDocument<IPlaylist>[]>;
	getPublicPlaylists: (
		params: Omit<SearchPlaylistStaticParams, "userId">
	) => Promise<HydratedDocument<IPlaylist>[]>;
	getSharedPlaylists: (
		params: SearchPlaylistStaticParams
	) => Promise<HydratedDocument<IPlaylist>[]>;
}
