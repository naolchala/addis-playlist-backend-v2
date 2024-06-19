import User from "@models/user";
import { Document, FlatRecord } from "mongoose";
import HttpError from "@utils/HttpError";
import _ from "lodash";
import { IPlaylist } from "./types";

export default async function share(
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

	this.sharedTo.push(user.id);
	this.save();

	return _.omit(user.toObject(), "password");
}
