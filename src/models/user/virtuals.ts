import userSchema from "./schema.js";

userSchema.virtual("id").get(function getId() {
	return this._id.toHexString();
});
