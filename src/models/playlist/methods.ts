import User from "@models/user/index.js";
import { Document, FlatRecord } from "mongoose";
import HttpError from "@utils/HttpError.js";
import _ from "lodash";
import { IPlaylist } from "./types.js";

// eslint-disable-next-line import/prefer-default-export
export async function share(
	this: Document<unknown, {}, FlatRecord<IPlaylist>> & FlatRecord<IPlaylist>,
	email: string
) {
	const user = await User.findOne(
		{
			email,
		},
		"id firstName lastName email photoURL"
	);

	if (!user) {
		throw new HttpError({
			status: 404,
			message: "User not found",
		});
	}

	if (user.id === this.userID) {
		throw new HttpError({
			status: 403,
			message: "You can't share playlist to yourself",
		});
	}

	if (this.sharedTo.includes(user.id)) {
		throw new HttpError({
			status: 400,
			message: "Playlist already shared to this user",
		});
	}

	this.sharedTo.push(user.id);
	this.save();

	return _.omit(user.toObject(), "password");
}
