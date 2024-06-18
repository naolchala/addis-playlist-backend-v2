import userSchema from "./schema";

userSchema.virtual("id").get(function () {
	return this._id.toHexString();
});
