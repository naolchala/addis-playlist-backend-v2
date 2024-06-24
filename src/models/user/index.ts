import mongoose, { Model } from "mongoose";
import userSchema, { IUser } from "./schema.js";

export interface UserModel extends Model<IUser> {}

const User = mongoose.model<IUser, UserModel>("User", userSchema);
export default User;
