import { required } from "joi";
import { Schema } from "mongoose";

export interface IUser {
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	photoURL?: string;
}

const userSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
			required: true,
		},
		email: {
			type: String,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		photoURL: {
			type: String,
			required: false,
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
		toObject: {
			virtuals: true,
		},
	}
);

export default userSchema;
