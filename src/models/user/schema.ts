import { Roles } from "@utils/resources.js";
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
		role: {
			type: String,
			enum: Object.keys(Roles),
			default: Roles.USER,
		},
	},
	{
		toJSON: {
			transform: (doc, ret) => {
				ret.id = ret._id;
				// delete ret._id;
				delete ret.__v;
				delete ret.password;
			},
			virtuals: true,
		},
		toObject: {
			virtuals: true,
			transform: (doc, ret) => {
				ret.id = ret._id;
				// delete ret._id;
				delete ret.__v;
				delete ret.password;
			},
		},
	}
);

export default userSchema;
