import { IPlaylist } from "@models/playlist/types";
import { AccessControl } from "accesscontrol";
import { HydratedDocument, Types } from "mongoose";
import { PLAYLIST, SHARE_PLAYLIST } from "./resources";

const accessControl = new AccessControl();

accessControl.grant("user").createOwn(SHARE_PLAYLIST);
accessControl.grant("user").readOwn(SHARE_PLAYLIST);

accessControl
	.grant("user")
	.createOwn(PLAYLIST)
	.updateOwn(PLAYLIST)
	.deleteOwn(PLAYLIST);

accessControl
	.grant("user")
	.createOwn("song")
	.deleteOwn("song")
	.updateOwn("song");

export const isUserPlaylistOwner = (
	userId: string,
	playlist: HydratedDocument<IPlaylist>
) => {
	return playlist.userID === userId;
};

export const canUserSeePlaylist = (userId: string, playlist: IPlaylist) => {
	const uid = new Types.ObjectId(userId);
	return playlist.userID === userId || playlist.sharedTo.includes(uid);
};

export default accessControl;
