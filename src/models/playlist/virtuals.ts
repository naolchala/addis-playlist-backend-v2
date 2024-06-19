import PlaylistSchema from "./schema";

PlaylistSchema.virtual("id").get(function getId() {
	return this._id.toHexString();
});
