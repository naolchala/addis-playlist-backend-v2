import PlaylistSchema from "./schema.js";

PlaylistSchema.virtual("id").get(function getId() {
	return this._id.toHexString();
});
