import userSchema from "./schema";

userSchema.virtual("id").get(function getId() {
	return this._id.toHexString();
});
