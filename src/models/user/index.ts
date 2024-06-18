import mongoose, { Model } from "mongoose";
import userSchema, { IUser } from "./schema";

export interface UserModel extends Model<IUser> {
	register(data: IUser): IUser;
}

const User = mongoose.model("User", userSchema);
export default User;
